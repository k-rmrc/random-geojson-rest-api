/**
 * Represents a geographic bounding box defined by longitude and latitude.
 *
 * Longitude range: -180 to 180
 * Latitude range:  -90 to 90
 *
 * The bounding box is expressed as:
 * - minLon: western boundary
 * - minLat: southern boundary
 * - maxLon: eastern boundary
 * - maxLat: northern boundary
 */
export class BoundingBox {

    /**
     * Creates a BoundingBox instance initialized with global default bounds.
     *
     * Defaults:
     * - minLon = -180
     * - minLat = -90
     * - maxLon = 180
     * - maxLat = 90
     */
    constructor() {
        this._minLon = -180;
        this._minLat = -90;
        this._maxLon = 180;
        this._maxLat = 90;
    }

    /**
     * Returns the default (global) bounding box.
     *
     * @returns {Object} The default bounding box.
     * @returns {number} returns.minLon - Minimum longitude (west).
     * @returns {number} returns.minLat - Minimum latitude (south).
     * @returns {number} returns.maxLon - Maximum longitude (east).
     * @returns {number} returns.maxLat - Maximum latitude (north).
     */
    getDefaultBoundingBox() {
        return {
            minLon: this._minLon,
            minLat: this._minLat,
            maxLon: this._maxLon,
            maxLat: this._maxLat
        };
    }

    /**
     * Generates a valid random geographic bounding box.
     *
     * Constraints:
     * - Longitude range: -180 to 180
     * - Latitude range:  -90 to 90
     * - Ensures min < max for both latitude and longitude
     *
     * @returns {Object} A valid random bounding box.
     */
    getRandomBoundingBox() {
        // Generate two random longitudes and sort them
        const lon1 = Math.random() * 360 - 180;
        const lon2 = Math.random() * 360 - 180;
        const [minLon, maxLon] = [lon1, lon2].sort((a, b) => a - b);

        // Generate two random latitudes and sort them
        const lat1 = Math.random() * 180 - 90;
        const lat2 = Math.random() * 180 - 90;
        const [minLat, maxLat] = [lat1, lat2].sort((a, b) => a - b);

        return {
            minLon: minLon,
            minLat: minLat,
            maxLon: maxLon,
            maxLat: maxLat
        };
    }
}
