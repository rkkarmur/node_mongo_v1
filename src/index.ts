import express from "express";
import * as dotenv from "dotenv";
import { V1Routes } from "./apis";
dotenv.config();
const port = process.env.PORT || 3000;
export const webServer = () => {
  const app = express();
  app.use(express.json());
  const v1 = new V1Routes();
  app.use("/api/v1", v1.path());

  app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
  });
};
