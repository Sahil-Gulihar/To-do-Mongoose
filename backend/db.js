const mongoose= require('mongoose');

//mongoDB url

// mongodb+srv://sahil-gulihar:<password>@cluster0.qchgfzn.mongodb.net/
mongoose.connect("mongodb+srv://sahil-gulihar:lmaoded@cluster0.qchgfzn.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todos', todoSchema)

module.exports = {
    todo
}