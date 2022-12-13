const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
});

const ToDoList = mongoose.model("ToDoList",ListSchema);

module.exports = {ToDoList};