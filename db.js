const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo').then(() => {
    console.log("db attached")
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
})

const todoModel = mongoose.model('todo', todoSchema)

module.exports = {
    todoModel
}