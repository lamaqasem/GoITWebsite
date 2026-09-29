import { Router } from "express";
import {
  createServices,
  deleteServices,
  getAllServices,
  getServicesByID,
  updateServices,
} from "./services.controller.js";
import {
  validateCreateService,
  validateDeleteService,
  validategetServiceByID,
  validateUpdateService,
} from "./services.valideation.js";

const router = Router();

router.get("/", getAllServices);
router.get("/:id", validategetServiceByID, getServicesByID);
router.post("/", validateCreateService, createServices);
router.delete("/:id", validateDeleteService, deleteServices);
router.put("/:id", validateUpdateService, updateServices);

export default router;
