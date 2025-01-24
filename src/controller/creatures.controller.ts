import {
    getAllCreatures,
    createCreature,
    updateCreature,
    removeCreature,
    getCreatureById
} from "@/services/creatures.service.js";
import { Request, Response } from "express";
import { Creature } from "@prisma/client";

/**
 * Retrieve all creatures
 * @param req
 * @param res
 */
export const get = async (req: Request, res: Response) => {
    try {
        const creatures: Creature[] = await getAllCreatures();
        res.json(creatures);
    } catch {
        res.status(500).json({ error: "Impossible de récupérer les créatures" });
    }
};

/**
 * Retrieve a creature
 * @param req
 * @param res
 */
export const getById = async (req: Request, res: Response) => {
    try {
        const creature: Creature | null = await getCreatureById(req.params.id);
        res.json(creature ?? {});
    } catch {
        res.status(500).json({ error: "Impossible de récupérer les créatures" });
    }
};

/**
 * Add a new creature
 * @param req
 * @param res
 */
export const add = async (req: Request, res: Response) => {
    if (req.body.rarity < 1 || req.body.rarity > 5) {
        return res.status(400).json({ error: "La rareté doit être comprise entre 1 et 5" });
    }
    try {
        const newCreature: Creature = await createCreature(req.body);
        res.json(newCreature);
    } catch {
        res.status(500).json({ error: "Impossible de créer la créature" });
    }
};

/**
 * Update a creature
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
    if (req.body.rarity < 1 || req.body.rarity > 5) {
        return res.status(400).json({ error: "La rareté doit être comprise entre 1 et 5" });
    }
    try {
        const creature: Creature = await updateCreature(req.params.id, req.body);
        res.json(creature);
    } catch {
        res.status(500).json({ error: "Impossible de mettre à jour la créature" });
    }
}

/**
 * Remove a creature
 * @param req
 * @param res
 */
export const remove = async (req: Request, res: Response) => {
    try {
        const creature: Creature = await removeCreature(req.params.id);
        res.json(creature);
    } catch {
        res.status(500).json({ error: "Impossible de supprimer la créature" });
    }
}