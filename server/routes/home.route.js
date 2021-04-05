const router = require('express').Router();

const usersRoute = require('../routes/users.route')
const controller = require('../controllers/home.controller')

router.get('/', controller.index)

router.use('/users', usersRoute)

module.exports = router