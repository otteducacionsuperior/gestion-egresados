import { Request, Response } from "express";

export const getActualizaciones = async (req: Request, res: Response) => {
  try {
    res.send("Listado de actualizaciones pendientes");
  } catch (error) {
    console.error("Error en actualizaciones:", error);
    res.status(500).send("Error interno del servidor");
  }
};
