// import express
const express = require('express');
// importing ur API for the routes.
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');
const router = express.Router();

// using route method to creat ur request(chaining)
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

// export router.
module.exports = router;