import todoStore from "../todostore/todo.js";

const deleteTodo = (req,res)=>{
    const { id } = req.params;

  const index = todoStore.todo.findIndex(t => t.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  const deleted = todoStore.todo.splice(index, 1);
  res.status(200).json({ message: 'Task deleted', deleted });
}

export default deleteTodo