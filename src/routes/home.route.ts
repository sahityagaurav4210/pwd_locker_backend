import { Router } from "express";
import Controllers from "../controllers";

const routes = Router();

routes.get("/ping", Controllers.home().ping);
routes.get("/shut-down", Controllers.home().shutdown);

export default routes;
