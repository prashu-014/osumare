import express from "express";
import todoRouter from './routes/todo.route.js'
import addTodoRouter from './routes/addTodo.router.js'

const app = express();
app.use(express.json())

const port = process.env.NODE_PORT || 5002;

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use('/api/v1/todo',todoRouter)
app.use('/api/v1/todo/newtodo',addTodoRouter)

app.listen(port, () => {
  console.log(`server is running on port no ${port}`);
});
