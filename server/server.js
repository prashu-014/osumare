import express from "express";
import todoRouter from './routes/todo.route.js'
import getTodoRouter from './routes/getTodo.router.js'
import addTodoRouter from './routes/addTodo.router.js'
import updateTodoRouter from './routes/update.router.js'
import deleteTodoRouter from './routes/deleteTodo.router.js'

const app = express();
app.use(express.json())

const port = process.env.NODE_PORT || 5002;

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use('/api/v1/todo',todoRouter)
app.use('/api/v1/todo/newtodo',addTodoRouter)
app.use('/api/v1/todo',getTodoRouter)
app.use('/api/v1/todo',updateTodoRouter)
app.use('/api/v1/todo',deleteTodoRouter)

app.listen(port, () => {
  console.log(`server is running on port no ${port}`);
});
