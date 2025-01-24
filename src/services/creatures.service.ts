import { Prisma } from "@prisma/client";
import { prisma } from "./index.js";

export const getAllCreatures = async () => {
	return await prisma.creature.findMany();
};

export const createCreature = async (data: Prisma.CreatureCreateInput) => {
	return await prisma.creature.create({
		data,
	});
};

export const updateCreature = async (
	id: string,
	data: Prisma.CreatureUpdateInput
) => {
	return await prisma.creature.update({
		where: { id: Number(id) },
		data,
	});
};

export const removeCreature = async (id: string) => {
	return await prisma.creature.delete({
		where: { id: Number(id) },
	});
};
