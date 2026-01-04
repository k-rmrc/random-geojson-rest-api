import { BoundingBox } from "./bbox.js";
import { Point } from "./point.js";

/**
 * Represents a linestring generator within geographic bounding boxes.
 *
 * This class can generate random linestrings globally or within a specified bounding box.
 */
export class Linestring {

    /**
     * Creates a Linestring generator.
     *
     * Internally initializes a BoundingBox instance for global defaults.
     */
    constructor() {
        /**
         * Internal bounding box instance used for generating random linestrings.
         * @type {BoundingBox}
         * @private
         */
        this._bbox = new BoundingBox();
    }

    /**
     * Generates a random linestring within the default global bounding box.
     *
     * @returns {Array<number>} A random linestring as [longitude, latitude].
     */
    getRandomLinestring() {
        return this.getRandomLinestringInBbox(10, 5000, this._bbox.getDefaultBoundingBox());
    }

    /**
     * Generates a random linestring within a specified bounding box.
     *
     * Validates that the bounding box has valid min and max coordinates.
     *
     * @param {number} vertices - Number of vertices (>= 2)
     * @param {number} maxLengthMeters - Maximum total length in meters
     * @param {Object} bbox - The bounding box to generate the linestring within.
     * @param {number} bbox.minLon - Minimum longitude (west).
     * @param {number} bbox.minLat - Minimum latitude (south).
     * @param {number} bbox.maxLon - Maximum longitude (east).
     * @param {number} bbox.maxLat - Maximum latitude (north).
     *
     * @returns {Array<number>} A random linestring as [longitude, latitude].
     *
     * @throws {Error} If the bounding box is invalid (min >= max).
     */
    getRandomLinestringInBbox(vertices, maxLengthMeters, bbox) {
        if (!bbox) {
            bbox = this._bbox.getRandomBoundingBox();
        }

        const { minLon, minLat, maxLon, maxLat } = bbox;

        // Validate bounding box
        if (minLon >= maxLon || minLat >= maxLat) {
            throw new Error(
                `Invalid bounding box: minLon (${minLon}) must be < maxLon (${maxLon}) ` +
                `and minLat (${minLat}) must be < maxLat (${maxLat})`
            );
        }
        // Validate number of vertices
        if (vertices < 2) {
            throw new Error("LineString must have at least 2 vertices");
        }

        const EARTH_RADIUS = 6371000; // meters
        const MIN_SEGMENT = 0.01;

        const coordinates = [new Point().getRandomPointInBbox(bbox)];
        let remaining = maxLengthMeters;

        for (var i = 1; i < vertices; i++) {
            var prev = coordinates[i - 1];
            var lon = prev[0];
            var lat = prev[1];

            var segmentsLeft = vertices - i;

            // Ensure we never exhaust remaining length too early
            var maxSegment = remaining - (segmentsLeft - 1) * MIN_SEGMENT;
            if (maxSegment < MIN_SEGMENT) {
                maxSegment = MIN_SEGMENT;
            }

            var segmentLength =
                i === vertices - 1
                    ? remaining
                    : MIN_SEGMENT + Math.random() * (maxSegment - MIN_SEGMENT);

            var bearing = Math.random() * 2 * Math.PI;

            var lat1 = lat * Math.PI / 180;
            var lon1 = lon * Math.PI / 180;
            var angularDistance = segmentLength / EARTH_RADIUS;

            var sinLat1 = Math.sin(lat1);
            var cosLat1 = Math.cos(lat1);
            var sinAd = Math.sin(angularDistance);
            var cosAd = Math.cos(angularDistance);

            var lat2 = Math.asin(
                sinLat1 * cosAd +
                cosLat1 * sinAd * Math.cos(bearing)
            );

            var lon2 = lon1 + Math.atan2(
                Math.sin(bearing) * sinAd * cosLat1,
                cosAd - sinLat1 * Math.sin(lat2)
            );

            var nextLon = ((lon2 * 180 / Math.PI + 540) % 360) - 180;
            var nextLat = lat2 * 180 / Math.PI;

            coordinates.push([nextLon, nextLat]);
            remaining -= segmentLength;
        }

        return coordinates.slice().sort((a, b) => a[0] - b[0]);
    }
}
