import { Creature, creatures } from "@/model/creatures.model";

export const getAllCreatures = async (): Promise<Creature[]> => {
    return creatures; // TODO: Implement a database
};

export const assignCreature = async (matchId: number, creatureId: number) => {
    const creature = creatures.find((c) => c.id === creatureId);
    if (!creature) {
        throw new Error("Creature not found");
    }
    return {
        message: "Creature assigned successfully",
        matchId,
        creature,
    };
};

export const deleteCreature = async (creatureId: number) => {
    const index = creatures.findIndex((c) => c.id === creatureId);
    if (index === -1) {
        throw new Error("Creature not found");
    }
    const [deletedCreature] = creatures.splice(index, 1);
    return {
        message: "Creature sold successfully",
        creditsRefunded: deletedCreature.price,
    };
};
