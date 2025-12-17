/**
 * Represents a GeoJSON Geometry object.
 *
 * A Geometry defines the spatial shape of a feature, such as
 * Point, LineString, Polygon, MultiPoint, MultiLineString, or MultiPolygon.
 *
 */
export class Geometry {

    /**
     * Creates a GeoJSON Geometry.
     *
     * @param {string} geomType - The GeoJSON geometry type
     * (e.g. "Point", "LineString", "Polygon", "MultiPoint").
     *
     * @param {Array} coordinates - The coordinates defining the geometry.
     * The structure depends on the geometry type according to GeoJSON rules.
     */
    constructor(geomType, coordinates) {
        /**
         * GeoJSON geometry type.
         * @type {string}
         */
        this.type = geomType;

        /**
         * Coordinate array describing the geometry.
         * Structure depends on the geometry type.
         * @type {Array}
         */
        this.coordinates = coordinates;

        /**
         * Wrapped GeoJSON geometry object.
         * This object conforms directly to the GeoJSON specification.
         * @type {{ type: string, coordinates: Array }}
         */
        this.geometry = {
            type: this.type,
            coordinates: this.coordinates
        };
    }
}
