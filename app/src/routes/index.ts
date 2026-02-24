import { Router } from "express";
import dashboardRoutes from "./dashboard.routes";
import egresadosRoutes from "./egresados.routes";
import actualizacionesRoutes from "./actualizaciones.routes";

const router = Router();

router.use("/dashboard", dashboardRoutes);
router.use("/egresados", egresadosRoutes);
router.use("/actualizaciones", actualizacionesRoutes);

export default router;
