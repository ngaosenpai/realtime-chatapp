const router = require('express').Router();

const controller = require("../controllers/conversation.controller")

router.post("/get-list", controller.getConversationList)
router.post ("/make", controller.makeConversation)

module.exports = router