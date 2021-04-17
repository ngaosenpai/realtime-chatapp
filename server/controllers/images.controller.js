const { cloudinary } = require('../middlewares/utils/cloudinary');
const multer = require('multer')
const storage = multer.memoryStorage();
const uploader = multer({ storage }).single('image');

module.exports.getImages = async (req, res) => {
    const { resources } = await cloudinary.search
    .expression('folder:dev_setups')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.json({
        message: "Getting Cloudinary Image Successfully",
        data: publicIds
    });
}

module.exports.uploadImages =  (req, res) => {
    try {
        const fileStr = req.body.data;
        console.log(`fileStr`);
        console.log(fileStr);
        cloudinary.uploader.upload(fileStr)
            .then(response => {
                console.log(`upload response`)
                console.log(response)
                res.json({message: 'Uploading Cloudinary Image Successfully'})
            })
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            message: 'Something went wrong',
            error: err.message 
        });
    }
}