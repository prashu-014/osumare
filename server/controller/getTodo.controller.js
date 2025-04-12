import todoStore from "../todostore/todo.js";

const getTodoById = (req, res) => {
  const { id } = req.params;

  const task = todoStore.todo.find((t) => t.id === parseInt(id));
  console.log(task);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
};

export default getTodoById;
