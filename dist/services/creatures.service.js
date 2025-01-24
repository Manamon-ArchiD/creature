"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCreature = exports.assignCreature = exports.getAllCreatures = void 0;
const creatures_model_1 = require("@/model/creatures.model");
const getAllCreatures = async () => {
    return creatures_model_1.creatures; // TODO: Implement a database
};
exports.getAllCreatures = getAllCreatures;
const assignCreature = async (matchId, creatureId) => {
    const creature = creatures_model_1.creatures.find((c) => c.id === creatureId);
    if (!creature) {
        throw new Error("Creature not found");
    }
    return {
        message: "Creature assigned successfully",
        matchId,
        creature,
    };
};
exports.assignCreature = assignCreature;
const deleteCreature = async (creatureId) => {
    const index = creatures_model_1.creatures.findIndex((c) => c.id === creatureId);
    if (index === -1) {
        throw new Error("Creature not found");
    }
    const [deletedCreature] = creatures_model_1.creatures.splice(index, 1);
    return {
        message: "Creature sold successfully",
        creditsRefunded: deletedCreature.price,
    };
};
exports.deleteCreature = deleteCreature;
