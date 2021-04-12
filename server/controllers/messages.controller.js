const {Message, User} = require('../models/index.model')
const devId = '606836ab9158801258ac3498'
const adminId = '60688ba34507a14e9caf541a'
const testerID = '60688ae72b376c4da8dd0cce'

module.exports.index = (req, res) => {
    try {
        let { sederId, receiverId, offset, skip, limit } = req.body
        // testing api
        skip = 0
        limit = 50, // skip + limit
        senderId = adminId,
        receiverId = devId
        Message.find({
            "$or":[
                {senderId},
                {receiverId:senderId},
            ]})
            .sort({sentTime: 1})
            .skip(skip)
            .limit(limit)
            .then((response) => {
                if (response.length > 0) {
                    response = response.map((message) => {
                        let to = senderId == message.senderId ? message.receiverId: message.senderId
                        return {
                            to: to,
                            content: message.content, 
                            sentTime: message.sentTime
                        }
                    })
                    return res.json({
                        code: 200, 
                        message: "Getting messages successfully",
                        data: response
                    })
                }
                throw new Error("Can't find any message")

            })
            .catch((error) => {throw error})
    } catch (error) {
        res.json({
            message: error.message,
        })
    }
}

module.exports.message_create = (req, res) => {
    try {
        const { senderId, receiverId, content} = req.body;
        Message.create({ senderId, receiverId, content })
            .then((response) => {
                if(response) {
                    return res.json({
                        code: 200, 
                        message: "Creating new message successfully"
                    })
                }
                throw new Error("Creating new message failed")
            })
            .catch(error => {throw error})
    } catch (error) {
        res.json({
            message: error.message,
        })
    }

}

//Hao add
module.exports.getPrivate = (req, res) => {
    const {
        senderId,
        receiverId,
        skip,
        limit
    } = req.body

    Message.find({
        $or : [
            {$and : [ {senderId}, {receiverId} ]},
            {$and : [ {senderId : receiverId, receiverId : senderId} ]}
        ]
    })
    .sort({ sentTime : 1 })
    .skip(skip)
    .limit(limit)
    .then(messages => res.json({messages}))
    .catch(error => res.json({error}))

}