import express from "express";
import getTodoById from "../controller/getTodo.controller.js";

const router = express.Router();

router.get("/:id", getTodoById);

export default router;
