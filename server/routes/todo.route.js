import express from "express";
import todoController from "../controller/todo.controller.js";

const router = express.Router();

router.get("/", todoController);

export default router;
