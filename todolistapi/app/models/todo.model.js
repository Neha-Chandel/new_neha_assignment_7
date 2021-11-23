const mongoose = require("mongoose");

const Todo = mongoose.model(
    "Todo",
    new mongoose.Schema({
        title: String,
        description: String,
        createdDate: {
            type: Date,
            default: Date.now
        },
        lastModifiedDate: {
            type: Date,
            default: Date.now
        }
    })
)

module.exports = Todo;