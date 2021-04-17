const router = require('express').Router();

const controller = require('../controllers/images.controller')

router.route("/")
    .get(controller.getImages)
router.route("/upload/cloudinary")
    .post(controller.uploadImages)

module.exports = router;