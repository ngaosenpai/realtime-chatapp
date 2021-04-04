const router = require('express').Router();

const controller = require('../controllers/auths.controller')
const jwtRoute = require('./jwt.route')

router.get('/', controller.index)
router.get('/login', controller.loginForm)
router.post('/login', controller.login)
router.get('/register', controller.registerForm)
router.post('/register', controller.register)
router.get('/logout', controller.logout)
router.use('/jwt', jwtRoute)

module.exports = router