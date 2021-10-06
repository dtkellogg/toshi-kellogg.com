const express = require("express");
const router = express.Router();
const {
    sendMessageToNodemailer,
    sendMessageToDb
} = require("../controllers/messageController");

console.log("In the router")

router
    .route("/")
    .post(sendMessageToDb, sendMessageToNodemailer)

module.exports = router;