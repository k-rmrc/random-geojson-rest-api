/**
 * Represents a GeoJSON FeatureCollection.
 *
 * A FeatureCollection is a container for multiple GeoJSON Feature objects
 * as defined by the GeoJSON specification.
 *
 */
export class FeatureCollection {

    /**
     * Creates an empty GeoJSON FeatureCollection.
     *
     * The collection is initialized with:
     * - type: "FeatureCollection"
     * - features: empty array
     */
    constructor() {
        /**
         * GeoJSON type identifier.
         * Always set to `"FeatureCollection"`.
         * @type {string}
         */
        this.type = "FeatureCollection";

        /**
         * Array of GeoJSON Feature objects.
         * @type {Array<Object>}
         */
        this.features = [];
    }

    /**
     * Returns the FeatureCollection as a valid GeoJSON object.
     *
     * @returns {Object} GeoJSON FeatureCollection object.
     * @returns {string} returns.type - Always `"FeatureCollection"`.
     * @returns {Array<Object>} returns.features - Array of GeoJSON Feature objects.
     */
    getFeatureCollection() {
        return {
            type: this.type,
            features: this.features
        };
    }
}
