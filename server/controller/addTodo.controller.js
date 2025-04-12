import todoStore from "../todostore/todo.js";

const addTodo = (req, res) => {
  const { name, description } = req.body;

  console.log(name, description);

  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Name and Description are required" });
  }

  const checkExist = todoStore.todo.some(
    (item) => item.name === name && item.description === description
  );
  
  if (checkExist) {
    return res
      .status(409)
      .json({ message: "Todo with same name and description already exists" });
  }

  const newTodo = { id: todoStore.todo_id++, name, description };
  todoStore.todo.push(newTodo);

  res.status(201).json(newTodo);
};

export default addTodo;
