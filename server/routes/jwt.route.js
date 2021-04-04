const router = require('express').Router();

const controller = require('../controllers/auths.controller')

router.post('/token', controller.refreshToken)
router.delete('/delete', controller.deleteToken)

module.exports = router