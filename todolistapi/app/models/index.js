const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.todo = require("./todo.model");
module.exports = db;