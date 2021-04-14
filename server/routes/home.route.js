const router = require('express').Router();

const usersRoute = require('../routes/users.route')
const messagesRoute = require('../routes/messages.route')
const controller = require('../controllers/home.controller')
const conversationRoute = require('../routes/conversation.route')



router.get('/', controller.index)
router.use('/users', usersRoute)
router.use('/messages', messagesRoute)
router.use('/conversation', conversationRoute)

module.exports = router