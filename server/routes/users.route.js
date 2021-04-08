const router = require('express').Router();

const controller = require('../controllers/users.controller');

router.route('/')
    .get(controller.user_index)
    .post(controller.user_create)
router.route('/:id')
    .get(controller.user_profile)
    .put(controller.user_update)
    .delete(controller.user_delete)

module.exports = router