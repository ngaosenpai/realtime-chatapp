const router = require('express').Router();

const usersRoute = require('../routes/users.route')
const messagesRoute = require('../routes/messages.route')
const controller = require('../controllers/home.controller')

router.get('/', controller.index)
router.use('/users', usersRoute)
router.use('/messages', messagesRoute)

module.exports = router