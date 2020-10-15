import { Router } from "express";
import multer from "multer";

import OrphanageController from "../controllers/OrphanageController";

import uploadConfig from "../config/upload";

const orphanages_routes = Router();
const orphanagesController = new OrphanageController();
const upload = multer(uploadConfig);

orphanages_routes.post(
  "/",
  upload.array("images"),
  orphanagesController.create
);
orphanages_routes.get("/", orphanagesController.index);
orphanages_routes.get("/:id", orphanagesController.show);

export default orphanages_routes;
