import express from "express";
import * as CreatureController from "@/controller/creatures.controller";

const router = express.Router();

router.get("/", CreatureController.getCreatures);

export default router;
