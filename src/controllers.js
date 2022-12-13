const { ToDoList } = require("./models");

const showTasks = async (req,res) => {
    let _id = req.query.id;
    let allTasks = await ToDoList.find();

    if(allTasks.length===0){
        return res.json({status:"No remaining tasks to show"});
    }

    if(_id){    
        allTasks = await ToDoList.findById(_id);
    }
    
    return res.json(allTasks);
}

const createTask = async (req,res) => {
    await ToDoList.create(req.body);
    return res.json({status: "Task created"});
}

const updateTask = async (req,res) => {
    let _id = req.query.id;
    let data = req.body;
    await ToDoList.findByIdAndUpdate(_id,data);
    return res.json({status: "Task updated"});
}

const deleteTask = async (req,res) => {
    let _id = req.query.id;
    await ToDoList.findByIdAndDelete(_id);
    return res.json({status: "Task deleted"});
}

const ToggleTaskCompletion = async (req,res) => {
    let _id = req.query.id;
    let task = await ToDoList.findById(_id);
    let curr_status = task.isCompleted;
    await ToDoList.updateOne(task,{"isCompleted": !curr_status});
    return res.json({status: "Task toggled"});
}

module.exports = {createTask, showTasks, updateTask, deleteTask, ToggleTaskCompletion}