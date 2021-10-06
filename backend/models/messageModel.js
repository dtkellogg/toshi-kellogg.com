const mongoose = require("mongoose");

console.log("MSG MODEL")
const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        // unique: true,
        required: [true, "Please add a message"],
    },
    name: {
        type: String,
        trim: true,
        unique: false,
        maxlength: [20, "Name must be less than 20 chars"],
    },
    email: {
        type: String,
        required: [true, "Please add an email address"],
    },
    subject: {
        type: String,
        required: [true, "Please add a subject"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model("Message", MessageSchema);