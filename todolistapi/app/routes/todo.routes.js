const controller = require("../controllers/todo.controller");

module.exports = function(app){
    app.get("/api/todo/getTodoList",controller.getTodoList)
    app.post("/api/todo/createTodo",controller.createTodo);
    app.put("/api/todo/updateTodo",controller.updateTodo);
    app.delete("/api/todo/deleteTodo/:id",controller.deleteTodo);
}