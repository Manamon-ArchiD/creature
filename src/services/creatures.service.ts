import { Prisma } from '@prisma/client';
import { prisma } from './index.js';

export const getAllCreatures = async () => {
	const creatureList = await prisma.creature.findMany();
	return creatureList;
};

export const createCreature = async (data: Prisma.CreatureCreateInput) => {
	const newCreature = await prisma.creature.create({
		data,
	});
	return newCreature;
};

export const updateCreature = async (
	id: string,
	data: Prisma.CreatureUpdateInput
) => {
	const updatedCreature = await prisma.creature.update({
		where: { id },
		data,
	});
	return updatedCreature;
};

export const removeCreature = async (id: string) => {
	const deletedCreature = await prisma.creature.delete({
		where: { id },
	});
	return deletedCreature;
};
