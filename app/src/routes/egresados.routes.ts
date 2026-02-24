import { Router } from "express";
import { getEgresados } from "../controllers/egresados.controller";

const router = Router();

router.get("/", getEgresados);

export default router;
