import { Router } from "express";
import orphanages_routes from "./orphanages.routes";

const app_routes = Router();

app_routes.use("/orphanages", orphanages_routes);

export default app_routes;
