const router = require('express').Router();

const usersRoute = require('../routes/users.route')
const messagesRoute = require('../routes/messages.route')
const controller = require('../controllers/home.controller')
const conversationRoute = require('../routes/conversation.route')
const imagesRoute = require('../routes/images.route')


router.get('/', controller.index)
router.use('/users', usersRoute)
router.use('/messages', messagesRoute)
router.use('/conversation', conversationRoute)
router.use('/images', imagesRoute)

module.exports = router