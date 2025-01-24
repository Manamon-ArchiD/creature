"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCreature = exports.updateCreature = exports.createCreature = exports.getAllCreatures = void 0;
const index_js_1 = require("./index.js");
const getAllCreatures = async () => {
    const creatureList = await index_js_1.prisma.creature.findMany();
    return creatureList;
};
exports.getAllCreatures = getAllCreatures;
const createCreature = async (data) => {
    const newCreature = await index_js_1.prisma.creature.create({
        data,
    });
    return newCreature;
};
exports.createCreature = createCreature;
const updateCreature = async (id, data) => {
    const updatedCreature = await index_js_1.prisma.creature.update({
        where: { id },
        data,
    });
    return updatedCreature;
};
exports.updateCreature = updateCreature;
const removeCreature = async (id) => {
    const deletedCreature = await index_js_1.prisma.creature.delete({
        where: { id },
    });
    return deletedCreature;
};
exports.removeCreature = removeCreature;
