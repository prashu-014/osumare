import express from "express";
import addTodo from "../controller/addTodo.controller.js";

const router = express.Router();

router.post("/", addTodo);

export default router;
