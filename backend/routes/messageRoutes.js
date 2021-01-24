const express = require("express");
const router = express.Router();
const {
    sendMessage,
} = require("../controllers/messageController");

console.log("In the router")

router
    .route("/")
    .post(sendMessage)

module.exports = router;
