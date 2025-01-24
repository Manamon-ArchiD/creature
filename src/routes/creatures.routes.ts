import express from "express";
import * as CreatureController from "@/controller/creatures.controller";

const router = express.Router();

router.get("/", CreatureController.get);
router.post("/", CreatureController.add);
router.put("/:id", CreatureController.update);
router.delete("/:id", CreatureController.remove);

export default router;
