const router = require('express').Router();

const controller = require('../controllers/messages.controller')

router.route('/')
    .get(controller.index)
    .post(controller.message_create)

module.exports = router