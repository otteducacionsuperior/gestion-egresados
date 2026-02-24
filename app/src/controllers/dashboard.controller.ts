import { Request, Response } from "express";

export const getDashboard = async (req: Request, res: Response) => {
  try {
    // Después acá irá lógica con Prisma
    const totalEgresados = 0;
    const totalCarreras = 0;

    res.render("dashboard", {
      title: "Dashboard",
      totalEgresados,
      totalCarreras
    });
  } catch (error) {
    console.error("Error en dashboard:", error);
    res.status(500).send("Error interno del servidor");
  }
};
