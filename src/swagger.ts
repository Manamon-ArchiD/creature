export const swaggerOptions = {
    swagger: "2.0",
    info: {
        title: "Creature Microservice API",
        version: "1.0.0",
        description: "API documentation for the Creature microservice",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http"],
    paths: {
        "/creatures": {
            get: {
                tags: ["Creatures"],
                description: "Retrieve the list of creatures available in the store",
                responses: {
                    "200": {
                        description: "List of creatures",
                        content: {
                            "application/json": {
                                example: [
                                    { id: 1, name: "Dragon", type: "Fire", price: 100 },
                                    { id: 2, name: "Unicorn", type: "Mystic", price: 0 }
                                ],
                            },
                        },
                    },
                },
            },
        },
        "/creatures/assign": {
            post: {
                tags: ["Creatures"],
                description: "Assign a creature to the arena for a match",
                body: [
                    {
                        name: "matchId",
                        in: "body",
                        required: false,
                        description: "The ID of the match",
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Creature assigned successfully",
                        content: {
                            "application/json": {
                                example: {
                                    message: "Creature assigned successfully",
                                    creature: { id: 1, name: "Dragon", type: "Fire" },
                                    matchId: 12,
                                },
                            },
                        },
                    },
                },
            },
        },
        "/creatures/{creatureId}": {
            delete: {
                tags: ["Creatures"],
                description: "Sell a creature to get refunded credits",
                parameters: [
                    {
                        name: "creatureId",
                        in: "path",
                        required: true,
                        description: "The ID of the creature to sell",
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Creature sold successfully",
                        content: {
                            "application/json": {
                                example: {
                                    message: "Creature sold successfully",
                                    creditsRefunded: 50,
                                },
                            },
                        },
                    },
                    "404": {
                        description: "Creature not found",
                        content: {
                            "application/json": {
                                example: { error: "Creature not found" },
                            },
                        },
                    },
                },
            },
        },
    },
};
