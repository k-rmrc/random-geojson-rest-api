import { FeatureCollection } from "../lib/featureCollection.js";
import { Feature } from "../lib/feature.js";
import { Geometry } from "../lib/geometry.js";
import { Properties } from "../lib/properties.js";
import { BoundingBox } from "../lib/bbox.js";
import { Point } from "../lib/point.js";

export const getPointsFeatureCollection = (req, res) => {
    let bboxParam = req.query.bbox;
    let numFeatures = req.query.number;
    let bbox = null;
    if (!numFeatures) {
        numFeatures = 10;
    }
    if (numFeatures > 1000) {
        numFeatures = 1000;
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
        const randomPoint = new Point().getRandomPointInBbox(bbox);
        const geom = new Geometry("Point", randomPoint);
        const props = new Properties({})
        const feature = new Feature(geom, props);        
        fc.addFeature(feature)
    }
    res.json(fc.getFeatureCollection())
}