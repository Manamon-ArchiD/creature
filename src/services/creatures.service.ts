import { prisma } from "./index.js";

export const getAllCreatures = async () => {
    const creatureList = await prisma.creature.findMany();
    return creatureList
};
