import todoStore from "../todostore/todo.js";

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const todo = todoStore.todo.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ message: "Task not found" });

  if (name) todo.name = name;
  if (description) todo.description = description;

  res.status(200).json({ message: "Task updated", todo });
};

export default updateTodo;
