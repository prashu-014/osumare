import todo from '../todostore/todo.js';

const getAllTasks = (req, res) => {
  res.status(200).json(todo);
};

export default getAllTasks;
