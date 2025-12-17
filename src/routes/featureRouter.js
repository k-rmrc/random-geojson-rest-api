import { Router } from "express";
import { Feature } from "../lib/feature.js";
import { Geometry } from "../lib/geometry.js";
import { Properties } from "../lib/properties.js";
import { BoundingBox } from "../lib/bbox.js";
import { Point } from "../lib/point.js";

export const featureRouter = new Router();

featureRouter.get('/', (req, res) => {
    let bboxParam = req.query.bbox;
    let bbox = null;

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

    const randomPoint = new Point().getRandomPointInBbox(bbox);
    const geom = new Geometry("Point", randomPoint);
    const props = new Properties({})
    const feature = new Feature(geom, props);
    res.json(feature.getFeature())
});

export default featureRouter;