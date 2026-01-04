import { Router } from "express";
import { getPointFeature } from "../controllers/pointFeature.js";
import { getPointFeatureCollection } from "../controllers/pointsCollection.js";
import { getLinestringFeature } from "../controllers/linestringFeature.js";
import { getLinestringFeatureCollection } from "../controllers/linestringCollection.js";
import { getPolygonFeature } from "../controllers/polygonFeature.js";
import { getPolygonFeatureCollection } from "../controllers/polygonCollection.js";

export const featureRouter = new Router();

//point
featureRouter.get('/api/feature/point', getPointFeature);
featureRouter.get('/api/collection/point', getPointFeatureCollection);
//linestring
featureRouter.get('/api/feature/linestring', getLinestringFeature);
featureRouter.get('/api/collection/linestring', getLinestringFeatureCollection);
//polygon
featureRouter.get('/api/feature/polygon', getPolygonFeature);
featureRouter.get('/api/collection/polygon', getPolygonFeatureCollection);

export default featureRouter;