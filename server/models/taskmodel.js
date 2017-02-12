// Contains code to create model for the backend database

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskdetail: { type: String, required: true },
    completed: { type: Boolean }
});

module.exports = mongoose.model('Task', taskSchema);