import { BoundingBox } from "./bbox.js";
import { Point } from "./point.js";

/**
 * Represents a polygon generator within geographic bounding boxes.
 *
 * This class can generate random polygons globally or within a specified bounding box,
 * constrained by a maximum area.
 */
export class Polygon {

    constructor() {
        /**
         * Internal bounding box instance used for generating random polygons.
         * @type {BoundingBox}
         * @private
         */
        this._bbox = new BoundingBox();
    }

    /**
     * Generates a random polygon within the default global bounding box.
     *
     * @returns {Array<Array<number>>} Polygon ring [[lon, lat], ...]
     */
    getRandomPolygon() {
        return this.getRandomPolygonInBbox(6, 1_000_000, this._bbox.getDefaultBoundingBox());
    }

    /**
     * Generates a random polygon within a specified bounding box,
     * constrained by a maximum area.
     *
     * @param {number} vertices - Number of vertices (>= 3)
     * @param {number} maxArea - Maximum polygon area in square meters
     * @param {Object} bbox - Bounding box
     *
     * @returns {Array<Array<number>>} Polygon ring [[lon, lat], ...]
     */
    getRandomPolygonInBbox(vertices, maxArea, bbox) {
        if (!bbox) {
            bbox = this._bbox.getRandomBoundingBox();
        }

        const { minLon, minLat, maxLon, maxLat } = bbox;

        if (minLon >= maxLon || minLat >= maxLat) {
            throw new Error("Invalid bounding box");
        }

        if (vertices < 3) {
            throw new Error("Polygon must have at least 3 vertices");
        }

        // Generate random points
        const points = [];
        const pointGen = new Point();

        for (let i = 0; i < vertices; i++) {
            points.push(pointGen.getRandomPointInBbox(bbox));
        }

        // Compute centroid
        let cx = 0, cy = 0;
        for (const [lon, lat] of points) {
            cx += lon;
            cy += lat;
        }
        cx /= vertices;
        cy /= vertices;

        // Sort by angle to avoid self-intersections
        points.sort((a, b) =>
            Math.atan2(a[1] - cy, a[0] - cx) -
            Math.atan2(b[1] - cy, b[0] - cx)
        );

        // Close ring
        points.push(points[0]);

        // Compute area and scale if needed
        const area = this._polygonAreaMeters(points);

        if (area > maxArea) {
            const scale = Math.sqrt(maxArea / area);
            this._scalePolygon(points, cx, cy, scale);
        }

        return [points];
    }

    /**
     * Computes polygon area in square meters using planar approximation.
     *
     * @private
     */
    _polygonAreaMeters(coords) {
        const R = 6371000; // Earth radius (m)
        let area = 0;

        for (let i = 0; i < coords.length - 1; i++) {
            const [lon1, lat1] = coords[i];
            const [lon2, lat2] = coords[i + 1];

            const x1 = R * lon1 * Math.PI / 180 * Math.cos(lat1 * Math.PI / 180);
            const y1 = R * lat1 * Math.PI / 180;
            const x2 = R * lon2 * Math.PI / 180 * Math.cos(lat2 * Math.PI / 180);
            const y2 = R * lat2 * Math.PI / 180;

            area += (x1 * y2 - x2 * y1);
        }

        return Math.abs(area) / 2;
    }

    /**
     * Scales polygon around centroid.
     *
     * @private
     */
    _scalePolygon(coords, cx, cy, scale) {
        for (let i = 0; i < coords.length; i++) {
            coords[i][0] = cx + (coords[i][0] - cx) * scale;
            coords[i][1] = cy + (coords[i][1] - cy) * scale;
        }
    }
}
