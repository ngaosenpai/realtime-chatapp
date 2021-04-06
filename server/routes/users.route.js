const router = require('express').Router();

const controller = require('../controllers/users.controller');

router.route('/')
    .get(controller.index)
router.route('/:id')
    .get(controller.profile)
    .post(controller.edit)

module.exports = router