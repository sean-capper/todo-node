// *** task model ***
const mongojs = require('mongojs');
const db = mongojs('to-do', ['tasks']);
const ObjectId = mongojs.ObjectId;

class Task {
    constructor(data) {
        if(data)
            this.data = data;
        else 
            this.data = {
                task: null,
                active: null
            };
    }

    get task() {
        return this.data.task;
    }

    set task(task) {
        this.data.task = task;
    }

    get active() {
        return this.data.active;
    }

    set active(active) {
        this.data.active = active;
    }

    static SaveTask(task) {
        let _task = {
            task: task.data.task,
            active: task.data.active
        };
        db.tasks.insert(_task, (err) => {
            if(err) {
                return console.log(err);
            } else {
                return true;
            }
        });
    }

    static GetTasks(callback) {
        let tasks = [];
        db.tasks.find((err, docs) => {
            if(err) {
                return console.log(err);
            } else {
                callback(docs);
            }
        });
    }

    static RemoveTask(id, callback) {
        db.tasks.remove({ _id: ObjectId(id) }, (err) => {
            if(err)
                return err;
        });
    }

    static UpdateTask(id, active, callback) {
        // get the task from the db
        db.tasks.findAndModify({
            query: { _id: ObjectId(id)},
            update: { $set: { active: JSON.parse(active) } },
            new: false
        }, (err, doc, lastErrorObject) => {
            // console.log(doc);
        });
    }
}

function callback(val) {
    return val;
}

module.exports = Task;