
module.exports = formatMessage = (name, message) =>{
    return {
        name,
        message,
        timeStamp: new Date()
    }    
}