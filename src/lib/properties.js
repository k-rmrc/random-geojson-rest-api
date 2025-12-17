/**
 * Represents the properties of a GeoJSON Feature.
 *
 * Properties are arbitrary key-value pairs describing a feature.
 * They can contain any relevant information such as name, ID, or metadata.
 *
 */
export class Properties {

    /**
     * Creates a Properties object.
     *
     * @param {Object} properties - Key-value pairs describing the feature.
     */
    constructor(properties) {
        /**
         * The properties of a GeoJSON feature.
         * @type {Object}
         */
        this.properties = properties;
    }
}
