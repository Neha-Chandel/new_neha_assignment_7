
const todoServvice = require("../services/todo.service");
exports.createTodo = (req, res) => {
    let body = req.body;
    todoServvice.save(body).then((result) => {
        res.status(201).send({
            message: "Your todo item is added",
            data: result
        })
    }).catch(handleError(res));

}

exports.getTodoList = (req, res) => {
    todoServvice.get().then((result) => {
        res.send({
            data: result
        })
    }).catch(handleError(res));
}

exports.updateTodo = (req, res) => {
    let body = req.body;
    todoServvice.update(body).then((result) => {
        res.status(201).send({
            message: "Your todo item is updated",
            data: result
        })
    }).catch(handleError(res));
}

exports.deleteTodo = (req, res) => {
    let id = req.params.id;
    todoServvice.remove(id).then((result) => {
        res.status(201).send({
            message: "Your todo item is deleted",
            data: result
        })
    }).catch(handleError(res));
}

const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}