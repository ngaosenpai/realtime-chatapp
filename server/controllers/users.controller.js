const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const {Message, User} = require('../models/index.model')
const devId = '606836ab9158801258ac3498'
const adminId = '60688ba34507a14e9caf541a'
const testerID = '60688ae72b376c4da8dd0cce'
// 606e81428f9ef04454f8efaa
module.exports.user_index = (req, res) => {
    try {
        console.log(User)    
        User.find({})
            .then((listUsers) => {
                if (listUsers.length > 0) {
                    res.json({
                        code: 200,
                        message: "Getting users successfully",
                        data: listUsers
                    })
                }
                else {
                    res.json({
                        code: 404,
                        message: "Getting not found users"
                    })
                }
            })
            .catch((err) => {throw new Error(err)})
    } catch (error) {
        if (error) {
            res.json({
                code: 400,
                message: 'Error occurs', 
                error: error.message,
                title: "Getting users failed" 
            })
        }        
    }
}

module.exports.user_create = (req, res) => {
    try {
        let request = req.body,
            salt = bcrypt.genSalt(10),
            newPassword =  bcrypt.hash(request.password, salt),
            newProfile = {
                locals: {
                    username: request.username,
                    password: newPassword,
                    name: request.name,
                    email: request.email,
                    phone: request.phone,
                }
            }
        User.create(newProfile)
            .then((newUser) => {
                if (newUser) {
                    res.json({
                        code: 201,
                        message: 'Creating user successfully'
                    })
                }
                else {
                    res.json({
                        code: 202,
                        message: 'Creating user failed'
                    })
                }
            })
            .catch(err => {throw err})
    } catch (error) {
        res.json({
            code: 400,
            message: 'Error occurs', 
            error: error.message
        })
    }
}

module.exports.user_profile = (req, res) => {
    try {
        User.findById(req.params.id)
            .then((user) => {
                if (user) {
                    res.json({
                        code: 200,
                        message: "Getting profile successfully",
                        data: user
                    })
                }
                else {
                    res.json({
                        code: 404,
                        message: "Getting not found profile"
                    })
                }
            })
            .catch((err) => {
                throw err})
    } catch (error) {
        if (error) {
            res.json({
                code: 400,
                message: error.message
            })
        }        
    }
}

module.exports.user_update = (req, res) => {
    try {
        let _id = req.params.id
            changes = req.body,
            salt = bcrypt.genSalt(10),
            newPassword =  bcrypt.hash(changes.password, salt),
            newProfile = {
                locals: {
                    username: changes.username,
                    password: newPassword,
                    name: changes.name,
                    email: changes.email,
                    phone: changes.phone,
                },
                updated: new Date()
            }
        
        let {locals: { username, email}} = newProfile,
            newUser = new User(newProfile)
        newUser.validate({'locals.username': username, 'locals.email': email}, ['locals.username', 'locals.email'])
            .catch(err => {throw err});
        User.findById(_id)
            .then(async (user) => {
                if (user) {
                    User.updateOne({_id}, newProfile)
                        .then(response => {
                            if (response) {
                                res.json({
                                    code: 200,
                                    message: 'Updating user successfully'
                                })
                            }
                            else {
                                res.json({
                                    code: 202,
                                    message: 'Updating user failed'
                                })
                            }
                        })
                        .catch(err => {throw err;});
                }
                else {
                    User.create(newProfile)
                        .then(response => {
                            if(response) {
                                res.json({
                                    code: 201,
                                    message: 'Creating user successfully when updating'
                                })
                            }
                            else {
                                res.json({
                                    code: 202,
                                    message: 'Creating user failed when updating'
                                })
                            }
                        })
                        .catch(err => {throw err;});
                }
            })
            .catch((err) => {throw new Error(err)})
    } catch (error) {
        if (error) {
            res.json({
                code: 400,
                message: 'Error occurs', 
                error: err.message
            })
        }        
    }
}

module.exports.user_delete = (req, res) => {
    try {
        let _id = req.params.id
        User.findByIdAndRemove(_id)
                .then(user => {
                    if (user) {
                        res.json({
                            code: 200,
                            message: 'Deleting user successfully'
                        })
                    }
                    else {
                        res.json({
                            code: 404,
                            message: 'Deleting not found user'
                        })
                    }
                })
                .catch(err => {throw err})
        
    } catch (error) {
        res.json({
            code: 400,
            message: 'Error occurs', 
            error: error.message
        })
    }
}

module.exports.user_token = (req, res) => {
    let accessToken = req.params.token
    if (accessToken == null) return res.sendStatus(401)
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, response) => {
        if (error) {
            return res.json({
                code: 403,
                message: 'Error occurs', 
                error: error.message
            });
        }
        if (response) {
            let user = response.user
            console.log(response)
            return res.json({
                code: 200,
                message: "Getting user with valid token successfully",
                user: {
                    _id: user._id,
                    name: user.locals.name,
                    image: user.locals.image,
                }
            })
        }
        return res.json({
            code: 403, 
            message: "Getting user failed with invalid token"
        })
    })
}

module.exports.user_conversation = (req, res) => {
    try {
        let { senderId } = req.body,
            userId = senderId
            limit= 50,
            skip = 0
        // senderId = adminId

        Message.find({
            $or:[
                {senderId: userId, receiverId: {$ne: userId}},
                {senderId: {$ne: userId}, receiverId: userId},
            ]})
            .skip(skip)
            .limit(limit)
            .distinct('senderId') // check distinct sender before receiver to get self conversation
            .distinct('receiverId')
            .then((response) => {
                console.log(response)
                if (response.length > 0) {
                    // return res.json({
                    //     code: 200,
                    //     message: "Successfully",
                    //     data: response
                    // })
                    // return Message.find({
                    //             senderId: userId, 
                    //             receiverId: {$in: response, $ne: userId},
                    // })
                    
                    return User.find({_id: {$in: response}})
                }
                throw new Error("Can't find any user in conversation with");
            })
            // .then(response => {
            //     res.json({resposnse})
            // })
            .then(response => {
                console.log(response)
                if (response.length > 0) {
                    return res.json({
                        code: 200,
                        message: "Getting conversation successfully",
                        data: response
                    })
                }
                throw new Error("None user ever chat with")
            })
            .catch((error) => {throw error})

        
    } catch (error) {
        res.json({
            messages: error.messages
        })
    }
}

module.exports.user_search = (req, res) => {
    let { search, userId } = req.body;
    console.log(`search`)
    console.log(search)
    User.find({"locals.name": {$regex: `.*${search}.*`}})
        .then(response => {
            response = response.filter(user => user._id != userId)
            console.log(`Search Response list user`)
            console.log(response)
            res.json({
                users: response
            })
        })
        .catch(error => res.json({error: error.message}))
        
}