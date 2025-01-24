import Logger from "@/utils/logger";
import { Prisma } from '@prisma/client';
import { db } from './index.js';

export const getAllCreatures = async () => {
    try {
        return await db.creature.findMany();
    } catch (error) {
        Logger.error('Error fetching all creatures', error);
        throw error;
    }
};


export const getCreatureById = async (id: string) => {
    try {
        return await db.creature.findFirst({
            where: {id}
        });
    } catch (error) {
        Logger.error('Error fetching a creature by id', error);
        throw error;
    }
};

export const createCreature = async (data: Prisma.CreatureCreateInput) => {
    try {
        const newCreature = await db.creature.create({
            data
        });
        Logger.info(`Created creature with ID: ${ newCreature.id }`);
        return newCreature;
    } catch (error) {
        Logger.error('Error creating creature', error);
        throw error;
    }
};

export const updateCreature = async (
    id: string,
    data: Prisma.CreatureUpdateInput
) => {
    try {
        const updatedCreature = await db.creature.update({
            where: {id},
            data
        });
        Logger.info(`Updated creature with ID: ${ id }`);
        return updatedCreature;
    } catch (error) {
        Logger.error(`Error updating creature with ID: ${ id }`, error);
        throw error;
    }
};

export const removeCreature = async (id: string) => {
    try {
        const deletedCreature = await db.creature.delete({
            where: {id}
        });
        Logger.info(`Deleted creature with ID: ${ id }`);
        return deletedCreature;
    } catch (error) {
        Logger.error(`Error deleting creature with ID: ${ id }`, error);
        throw error;
    }
};