// // const { Router } = require('express');

// // nosql non relational db like mongo unike traditional dbs can store data in form of json 
// const express = require('express');
// const router = express.Router();


// const {getAllTasks, 
//     createTask, 
//     getTask, 
//     updateTask,
//     deleteTask} = require('../controllers/tasks');


// router.route('/').get(getAllTasks).post(createTask); // function name has to be same as declared in controller or else it won;t work;
// //router.get('/',getAllTasks); // function name has to be same as declared in controller or else it won;t work;

// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


// module.exports = router;

const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
