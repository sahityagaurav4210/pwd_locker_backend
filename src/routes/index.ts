import { Router } from "express";
import homeRoutes from "./home.route";
import userRoutes from "./users.route";
import { API_URLS } from "../api";

const routes = Router();

routes.use(homeRoutes);
routes.use(API_URLS.USER_URL, userRoutes);

export default routes;
