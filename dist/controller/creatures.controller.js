"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.add = exports.get = void 0;
const creatures_service_js_1 = require("@/services/creatures.service.js");
const get = async (req, res) => {
    try {
        const creatures = await (0, creatures_service_js_1.getAllCreatures)();
        res.json(creatures);
    }
    catch {
        res.status(500).json({ error: "Impossible de récupérer les créatures" });
    }
};
exports.get = get;
const add = async (req, res) => {
    try {
        const newCreature = await (0, creatures_service_js_1.createCreature)(req.body);
        res.json(newCreature);
    }
    catch {
        res.status(500).json({ error: "Impossible de créer la créature" });
    }
};
exports.add = add;
const update = async (req, res) => {
    try {
        const creature = await (0, creatures_service_js_1.updateCreature)(req.params.id, req.body);
        res.json(creature);
    }
    catch {
        res.status(500).json({ error: "Impossible de mettre à jour la créature" });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const creature = await (0, creatures_service_js_1.removeCreature)(req.params.id);
        res.json(creature);
    }
    catch {
        res.status(500).json({ error: "Impossible de supprimer la créature" });
    }
};
exports.remove = remove;
