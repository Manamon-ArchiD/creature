import { getAllCreatures, createCreature, updateCreature, removeCreature } from "@/services/creatures.service.js";
import { Request, Response } from "express";

export const get = async (req: Request, res: Response) => {
    try {
        const creatures = await getAllCreatures();
        res.json(creatures);
    } catch {
        res.status(500).json({ error: "Impossible de récupérer les créatures" });
    }
};

export const add = async (req: Request, res: Response) => {
    try {
        const newCreature = await createCreature(req.body);
        res.json(newCreature);
    } catch {
        res.status(500).json({ error: "Impossible de créer la créature" });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const creature = await updateCreature(req.params.id, req.body);
        res.json(creature);
    } catch {
        res.status(500).json({ error: "Impossible de mettre à jour la créature" });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const creature = await removeCreature(req.params.id);
        res.json(creature);
    } catch {
        res.status(500).json({ error: "Impossible de supprimer la créature" });
    }
}