import { getAllCreatures } from "@/services/creatures.service.js";
import { Request, Response } from "express";

export const getCreatures = async (req: Request, res: Response) => {
    try {
        const creatures = await getAllCreatures();
        res.json(creatures);
    } catch {
        res.status(500).json({ error: "Impossible de récupérer les créatures" });
    }
};