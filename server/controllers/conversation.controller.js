const User = require("../models/user.model")
const Message = require("../models/message.model")


module.exports.getConversationList = async (req, res) => {

    try {
        
        const { userId } = req.body
        const user = await User.findById(userId).exec()
        const { contact } = user
    
        const contactedUsersPromise = contact.map(contactedId => {
            return User.findById(contactedId).exec()
        })
    
        const lastestMessagesPromise =  contact.map(contactedId => {
            return Message.find({
                $or : [
                    { $and : [ { senderId : userId }, { receiverId : contactedId } ] }, 
                    { $and : [ { senderId : contactedId }, { receiverId : userId } ] }
                ]
            }).sort({ sentTime : -1 }).limit(1)
        })  
    
        const messagesPromiseAll = Promise.all(lastestMessagesPromise)
        const contactedsPromiseAll = Promise.all(contactedUsersPromise)
    
        const [lastestMessages, contactedUsers] = await Promise.all([messagesPromiseAll, contactedsPromiseAll])
        
        const conversationList = []
        for(let i in contactedUsers){
            let conversation = {}
            console.log(contactedUsers[i])
            console.log(lastestMessages[i])
            conversation.name = contactedUsers[i].locals.name
            conversation.image = contactedUsers[i].locals.image
            conversation.contactedId = contactedUsers[i]._id
            conversation.lastedMessage = lastestMessages[i][0] ? lastestMessages[i][0].content : null
            conversation.lastedTime = lastestMessages[i][0] ? lastestMessages[i][0].sentTime : null
    
            conversationList.push(conversation)
            console.log(conversation)
        }
    
        res.json({
            conversationList
        })

    } catch (error) {
        console.log(error.message)
        res.json({
            error
        })
    }

}


module.exports.makeConversation = async (req, res) => {
    
    try {
        
        const { userId, targetId } = req.body
    
        const [ user, targetUser ] = await Promise.all([
            User.findOneAndUpdate({
                _id : userId,
                contact : { $ne : targetId }
            }, { $push : { contact : targetId } }, { new : true }).exec(),
            User.findOneAndUpdate({
                _id : targetId,
                contact : { $ne : userId }
            }, { $push : { contact : userId } }, { new : true }).exec()
        ])

        
        res.json({
            user,
            targetUser
        })


    } catch (error) {
        console.log(error.message)
        res.json({
            error
        })
    }
    


}