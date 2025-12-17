import { Router } from "express";

export const apiRouter = new Router();

apiRouter.get('/', (req, res) => {
    res.json(
        {
            "statusCode": res.statusCode,
            "timestamp": new Date().toISOString()
        });
});

export default apiRouter;