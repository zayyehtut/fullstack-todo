import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
