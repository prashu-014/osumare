import tosoStore from '../todostore/todo.js';

const getAllTasks = (req, res) => {
  res.status(200).json(tosoStore.todo);
};

export default getAllTasks;
