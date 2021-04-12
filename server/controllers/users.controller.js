const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// const User = require('../models/user.model');
const {User} = require('../models/index.model');

module.exports.user_index = async (req, res) => {
    try {
        console.log(User)    
        await User.find({})
            .then((listUsers) => {
                if (listUsers.length > 0) {
                    // listUsers = listUsers.map((user) => {
                    //     return {
                    //         _id: user._id,
                    //         username: user.locals.username,
                    //         name: user.locals.name,
                    //         status: 'user.status',
                    //         image: 'url/path-to-image',
                    //         isFriend: true
                    //     }
                    // })
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

module.exports.user_create = async (req, res) => {
    try {
        let request = req.body,
            salt = await bcrypt.genSalt(10),
            newPassword =  await bcrypt.hash(request.password, salt),
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

module.exports.user_profile = async (req, res) => {
    try {
        await User.findById(req.params.id)
            .then((user) => {
                if (user) {
                    // user = {
                    //     _id: user._id,
                    //     name: user.locals.name,
                    //     status: 'user.status',
                    //     image: 'url/path-to-image',
                    //     listFriend: [],
                    //     groups: [],
                    // }
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

module.exports.user_update = async (req, res) => {
    try {
        let _id = req.params.id
            changes = req.body,
            salt = await bcrypt.genSalt(10),
            newPassword =  await bcrypt.hash(changes.password, salt),
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
        await newUser.validate({'locals.username': username, 'locals.email': email}, ['locals.username', 'locals.email'])
            .catch(err => {throw err});
        await User.findById(_id)
            .then(async (user) => {
                // console.log(username)
                
                if (user) {
                    await User.updateOne({_id}, newProfile)
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
                    await User.create(newProfile)
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

module.exports.user_delete = async (req, res) => {
    try {
        let _id = req.params.id
        await User.findByIdAndRemove(_id)
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

module.exports.user_token = async (req, res) => {
    // const authorizationHeader = req.headers.authorization
    // const accessToken = authorizationHeader && authorizationHeader.split(' ')[1]
    let accessToken = req.params.token
    if (accessToken == null) return res.sendStatus(401)
    await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, response) => {
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
                    name: user.locals.name
                }
            })
        }
        return res.json({
            code: 403, 
            message: "Getting user failed with invalid token"
        })
    })
}