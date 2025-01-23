import express from "express";
import * as CreatureController from "@/controller/creatures.controller";

const router = express.Router();

router.get("/", CreatureController.getCreatures);
router.post("/assign", CreatureController.assignCreature);
router.delete("/:creatureId", CreatureController.deleteCreature);

export default router;
