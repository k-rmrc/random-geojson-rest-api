import { Router } from "express";
import { getPointFeature } from "../controllers/pointFeature.js";
import { getPointsFeatureCollection } from "../controllers/pointsCollection.js";

export const featureRouter = new Router();

featureRouter.get('/api/feature/point', getPointFeature);
featureRouter.get('/api/collection/points', getPointsFeatureCollection);

export default featureRouter;