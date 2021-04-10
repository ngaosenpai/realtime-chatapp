const users = [];
console.log(`listing active users`)
console.log(users)
// trials

module.exports.userJoin = (id, username, roomId) => {
    const user = {id, username, roomId}
    users.push(user);
    return user;    
}

module.exports.getCurrentUser = (id) => {
    return users.find(user => user.id === id)
}

module.exports.userLeave = (id) => {
    const index = users.findIndex(user => user.id === id)

    if (index !== -1) {
        // return array with elements being splicing out at index
        return users.splice(index, 1)[0]
    }
}

module.exports.getActiveUsers = (roomId) => {
    return users.filter(user => user.roomId === roomId)
}