const {Schema, model} = require('mongoose')

const MessageSchema = new Schema({
    connectKey: String, 
    messages: [{
        sender: String,
        content: String,
        timeStamp: {
            type: Date,
            default: new Date()
        }
    }]
})

const Message = model("Message", MessageSchema, "messages");
module.exports = Message


