// require the model since you are going to make use of it.
const Task = require('../models/Task');
const { createCustomError } = require('../errors/custom-error')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (error) {

    }
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task })

}

const getTask = async (req, res, next) => {
    // geting the id
    const { id: taskId } = req.params;
    //searching for the task.
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
        return next(createCustomError(`No task with id : ${taskId}`, 404))
    }
    res.status(200).json({ task })
}

const updateTask = async (req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskId}`, 404))
    }
    res.status(200).json({ task })
}

const deleteTask = async (req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskId}`, 404))
    }
    res.status(200).json({ task })
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}