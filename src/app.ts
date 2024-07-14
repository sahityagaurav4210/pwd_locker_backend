import "dotenv/config";

import express from "express";
import cors from "cors";

import routes from "./routes";
import { API_URLS } from "./api";

const app = express();

app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true, limit: "6kb" }));
app.use(
  cors({
    origin: process.env.ALLOWED_CLIENTS,
  })
);

app.use(`${API_URLS.BASE_URL}/${process.env.API_VERSION}`, routes);

export default app;
