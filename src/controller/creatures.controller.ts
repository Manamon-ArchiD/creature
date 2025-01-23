import { Request, Response } from "express";
import * as CreatureService from "@/services/creatures.service";

export const getCreatures = async (req: Request, res: Response) => {
    try {
        const creatures = await CreatureService.getAllCreatures();
        res.json(creatures);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch creatures" });
    }
};

export const assignCreature = async (req: Request, res: Response) => {
    try {
        const { matchId, creatureId } = req.body;
        const result = await CreatureService.assignCreature(matchId, creatureId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteCreature = async (req: Request, res: Response) => {
    try {
        const { creatureId } = req.params;
        const result = await CreatureService.deleteCreature(Number(creatureId));
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: "error.message" });
    }
};
