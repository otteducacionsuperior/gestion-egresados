import { Request, Response } from "express";

export const getEgresados = async (req: Request, res: Response) => {
  try {
    res.send("Listado de egresados");
  } catch (error) {
    console.error("Error en egresados:", error);
    res.status(500).send("Error interno del servidor");
  }
};
