const router = require('express').Router();

const controller = require('../controllers/messages.controller')

router.route('/')
    .get(controller.index)
    .post(controller.message_create)

//Hao add
router.route("/get").post(controller.getPrivate)

module.exports = router