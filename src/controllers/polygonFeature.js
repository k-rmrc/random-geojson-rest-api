import { Feature } from "../lib/feature.js";
import { Geometry } from "../lib/geometry.js";
import { Properties } from "../lib/properties.js";
import { BoundingBox } from "../lib/bbox.js";
import { Polygon } from "../lib/polygon.js";

export const getPolygonFeature = (req, res) => {
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
    
    const randomPolygon = new Polygon().getRandomPolygonInBbox(10, bbox);
    const geom = new Geometry("Polygon", randomPolygon);
    const props = new Properties({})
    const feature = new Feature(geom, props);
    res.json(feature.getFeature())
}