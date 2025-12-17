/**
 * Represents a GeoJSON Feature.
 *
 * A Feature object contains a geometry object and a set of properties
 * according to the GeoJSON specification.
 *
 */
export class Feature {

    /**
     * Creates a GeoJSON Feature.
     *
     * @param {Object} geometry - Geometry wrapper object.
     * @param {Object} geometry.geometry - The GeoJSON geometry (e.g. Point, LineString, Polygon).
     * @param {Object} properties - Properties wrapper object.
     * @param {Object} properties.properties - Arbitrary key-value pairs describing the feature.
     */
    constructor(geometry, properties) {
        /**
         * GeoJSON type identifier.
         * Always set to `"Feature"`.
         * @type {string}
         */
        this.type = "Feature";

        /**
         * Geometry wrapper containing the GeoJSON geometry.
         * @type {Object}
         */
        this.geometry = geometry;

        /**
         * Properties wrapper containing feature attributes.
         * @type {Object}
         */
        this.properties = properties;
    }

    /**
     * Returns the feature as a valid GeoJSON Feature object.
     *
     * This method unwraps the internal geometry and properties
     * to match the GeoJSON specification.
     *
     * @returns {Object} GeoJSON Feature object.
     * @returns {string} returns.type - Always `"Feature"`.
     * @returns {Object} returns.geometry - GeoJSON geometry object.
     * @returns {Object} returns.properties - Feature properties.
     */
    getFeature() {
        return {
            type: this.type,
            geometry: this.geometry.geometry,
            properties: this.properties.properties
        };
    }
}