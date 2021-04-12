const {Schema, model} = require('mongoose')

const MessageSchema = new Schema({
    //Hao modify

    senderId: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    receiverId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    content: {
        type: String,
        default : null
    },
    sentTime : {
        type: Date,
        default : Date.now
    }
})

const Message = model("Message", MessageSchema, "messages");
module.exports = Message


