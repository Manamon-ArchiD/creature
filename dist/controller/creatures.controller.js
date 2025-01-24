"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCreature = exports.assignCreature = exports.getCreatures = void 0;
const CreatureService = __importStar(require("@/services/creatures.service"));
const getCreatures = async (req, res) => {
    try {
        const creatures = await CreatureService.getAllCreatures();
        res.json(creatures);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch creatures" });
    }
};
exports.getCreatures = getCreatures;
const assignCreature = async (req, res) => {
    try {
        const { matchId, creatureId } = req.body;
        const result = await CreatureService.assignCreature(matchId, creatureId);
        res.json(result);
    }
    catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};
exports.assignCreature = assignCreature;
const deleteCreature = async (req, res) => {
    try {
        const { creatureId } = req.params;
        const result = await CreatureService.deleteCreature(Number(creatureId));
        res.json(result);
    }
    catch (error) {
        res.status(404).json({ error: "error.message" });
    }
};
exports.deleteCreature = deleteCreature;
