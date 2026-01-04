import { FeatureCollection } from "../lib/featureCollection.js";
import { Feature } from "../lib/feature.js";
import { Geometry } from "../lib/geometry.js";
import { Properties } from "../lib/properties.js";
import { BoundingBox } from "../lib/bbox.js";
import { Polygon } from "../lib/polygon.js";

export const getPolygonFeatureCollection = (req, res) => {
    let bboxParam = req.query.bbox;
    let numFeatures = req.query.number;
    let vertices = req.query.vertices;
    let maxArea = req.query.maxArea;
    let bbox = null;
    if (!numFeatures) {
        numFeatures = 10;
    }
    if (numFeatures > 1000) {
        numFeatures = 1000;
    }

    if (!maxArea) {
        maxArea = 500000;
    }

    if (maxArea > 500000000) {
        maxArea = 500000000;
    }

    if (!vertices) {
        vertices = 10;
    }

    if (vertices > 100) {
        vertices = 100
    }

    if (!bboxParam) {
        bbox = new BoundingBox().getRandomBoundingBox();
    } else {
        const bboxParts = bboxParam.split(',').map(Number);
        bbox = {
            minLon: bboxParts[0],
            minLat: bboxParts[1],
            maxLon: bboxParts[2],
            maxLat: bboxParts[3]
        };
    }
    const fc = new FeatureCollection();
    for (let i = 0; i < numFeatures; i++) {
        const randomPolygon = new Polygon().getRandomPolygonInBbox(vertices, maxArea, bbox);
        const geom = new Geometry("Polygon", randomPolygon);
        const props = new Properties({})
        const feature = new Feature(geom, props);        
        fc.addFeature(feature)
    }
    res.json(fc.getFeatureCollection())
}