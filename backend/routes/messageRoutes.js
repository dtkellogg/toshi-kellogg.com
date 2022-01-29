const express = require("express");
const router = express.Router();
const {
  sendMessageToNodemailer,
  sendMessageToDb
} = require("../controllers/messageController");


router
  .route("/")
  .post(sendMessageToDb, sendMessageToNodemailer)

module.exports = router;