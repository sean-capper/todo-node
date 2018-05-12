// *** to-do controller ***
const Task = require('../models/task');

module.exports = {
    getTasks : (req, res) => {
        Task.GetTasks((tasks) => {
            if(tasks) {
                res.render('../views/index', {
                    errors: req.flash('error'),
                    tasks: tasks
                });
            } else {
                // make this error handling more elegant
                res.render('../views/index', {
                    tasks: [{task: 'No Tasks to display!'}]
                });
            }
            
        });
    },
    addTask : (req, res) => {
        req.checkBody('task', 'Please enter a task before saving!').notEmpty();
        let errors = req.validationErrors();

        if(errors) {
            req.flash('error', 'Please enter a task before saving');
            res.redirect('/');
        } else {
            let task = new Task({
                task: req.body.task,
                active: true
            });
            Task.SaveTask(task);
            res.redirect('/');
        }
    },
    removeTask: (req, res) => {
        Task.RemoveTask(req.params.id, (error) => {
            if(error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    },
    updateTask: (req, res) => {
        Task.UpdateTask(req.body.uid, req.body.active, (error) => {
            if(error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }
};