const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.static("./public"));

// middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("task manager app");
});
app.use("/api/v1/tasks", tasks);
// app.get("/api/v1/tasks")         - get all tasks
// app.post("/api/v1/tasks")        - create a new task
// app.get("/api/v1/tasks/:id")     - get single task
// app.patch("/api/v1/tasks/:id")   - update task
// app.delete("api/v1/tasks/:id")   - delete task

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log("Running on port 3000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
