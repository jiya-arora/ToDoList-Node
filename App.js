const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { createTask, showTasks, updateTask, deleteTask, ToggleTaskCompletion } = require("./src/controllers")

//DB Connection START
try {
    mongoose.connect("mongodb://localhost:27017/todo_list");
}
catch (error) {
    console.log(error);
}

mongoose.connection.on("connected", () => {
    console.log("DB connected");
})

//DB Connection END

server.use(cors());
server.use(express.json());

server.get("/show-tasks", showTasks);
server.post("/create-task", createTask);
server.put("/update-task", updateTask);
server.delete("/delete-task", deleteTask);
server.patch("/toggle-task", ToggleTaskCompletion);

const port = 4000;

server.listen(port, () => {
    console.log(`Server started at port number ${port}`);
});