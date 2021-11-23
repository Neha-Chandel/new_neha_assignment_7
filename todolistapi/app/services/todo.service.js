const db = require("../models");
const Todo = db.todo;

save = (data) => {
    let todo = new Todo();
    todo.title = data.title;
    todo.description = data.description;
    let new_todo = todo.save();
    return new_todo;
}

get = () => {
    let todos = Todo.find();
    return todos;
}

update = (data) => {
    data.lastModifiedDate = new Date();
    let updated_todo = Todo.updateOne({ _id: data.id }, data);
    return updated_todo;
}

remove = (id) => {
    let removed_todo = Todo.deleteOne({ _id: id });
    return removed_todo;
}

module.exports = {
    save, get, update, remove
}