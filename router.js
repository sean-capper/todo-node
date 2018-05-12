const express = require('express');
const router = express.Router();

// modules
let todo = require('./controllers/todo');
router.get('/', todo.getTasks);
router.post('/add', todo.addTask);
router.delete('/delete/:id', todo.removeTask);
router.post('/update', todo.updateTask);

module.exports = router;