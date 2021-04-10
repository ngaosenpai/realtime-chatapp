const { Schema, model } = require('mongoose');

const FileSchema = new Schema({
    type: String,
    data: Buffer,
})

const File = model("File", FileSchema, "files");

module.exports = File;