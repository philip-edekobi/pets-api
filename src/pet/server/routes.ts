import { Router } from "express";
import petController from "./controller";

const routes = Router();

routes.all("/pets", petController);

export default routes;
