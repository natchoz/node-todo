const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: String,
    todo: String,
    complete: Boolean 
}, {
    collection: 'todo'
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
