import express from "express";
import updateTodo from "../controller/updateTodo.controller.js";

const router = express.Router();

router.put("/:id", updateTodo);

export default router;
