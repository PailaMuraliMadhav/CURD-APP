import express from "express";
import todoRoutes from "./routes/todo.routes.js";


const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/todos',todoRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Backend is running!');
});



export default app;