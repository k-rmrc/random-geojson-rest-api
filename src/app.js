import express from "express";
import { } from 'dotenv/config';
import apiRouter from "./routes/apiRouter.js";
import featureRouter from "./routes/featureRouter.js";

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", apiRouter)
app.use("/api", apiRouter)
app.use("/api/feature/point", featureRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
