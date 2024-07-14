import { Router } from "express";
import Controllers from "../controllers";

const routes = Router();

routes.post("/register", Controllers.user().createNewUser);

export default routes;
