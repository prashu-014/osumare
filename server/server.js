import express from "express";

const app = express();
app.use(express.json())

const port = process.env.NODE_PORT || 5002;

app.get("/", (req, res) => {
  res.send("server is running...");
});


app.listen(port, () => {
  console.log(`server is running on port no ${port}`);
});
