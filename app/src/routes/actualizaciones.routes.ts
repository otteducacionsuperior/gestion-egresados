import { Router } from "express";
import { getActualizaciones } from "../controllers/actualizaciones.controller";

const router = Router();

router.get("/", getActualizaciones);

export default router;
