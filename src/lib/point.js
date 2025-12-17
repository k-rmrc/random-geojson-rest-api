import { BoundingBox } from "./bbox.js";

/**
 * Represents a point generator within geographic bounding boxes.
 *
 * This class can generate random points globally or within a specified bounding box.
 */
export class Point {

    /**
     * Creates a Point generator.
     *
     * Internally initializes a BoundingBox instance for global defaults.
     */
    constructor() {
        /**
         * Internal bounding box instance used for generating random points.
         * @type {BoundingBox}
         * @private
         */
        this._bbox = new BoundingBox();
    }

    /**
     * Generates a random point within the default global bounding box.
     *
     * @returns {Array<number>} A random point as [longitude, latitude].
     */
    getRandomPoint() {
        return this.getRandomPointInBbox(this._bbox.getDefaultBoundingBox());
    }

    /**
     * Generates a random point within a specified bounding box.
     *
     * Validates that the bounding box has valid min and max coordinates.
     *
     * @param {Object} bbox - The bounding box to generate the point within.
     * @param {number} bbox.minLon - Minimum longitude (west).
     * @param {number} bbox.minLat - Minimum latitude (south).
     * @param {number} bbox.maxLon - Maximum longitude (east).
     * @param {number} bbox.maxLat - Maximum latitude (north).
     *
     * @returns {Array<number>} A random point as [longitude, latitude].
     *
     * @throws {Error} If the bounding box is invalid (min >= max).
     */
    getRandomPointInBbox(bbox) {
        const { minLon, minLat, maxLon, maxLat } = bbox;

        // Validate bounding box
        if (minLon >= maxLon || minLat >= maxLat) {
            throw new Error(
                `Invalid bounding box: minLon (${minLon}) must be < maxLon (${maxLon}) ` +
                `and minLat (${minLat}) must be < maxLat (${maxLat})`
            );
        }

        const lon = Math.random() * (maxLon - minLon) + minLon;
        const lat = Math.random() * (maxLat - minLat) + minLat;

        return [lon, lat];
    }
}
