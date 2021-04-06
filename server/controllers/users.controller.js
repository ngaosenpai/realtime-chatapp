const bcrypt = require('bcrypt');

const User = require('../models/user.model');

module.exports.index = async (req, res) => {
    try {
        await User.find({})
            .then((listUsers) => {
                listUsers = listUsers.map((user) => {
                    return {
                        _id: user._id,
                        username: user.locals.username,
                        name: user.locals.name,
                        status: 'user.status',
                        image: 'url/path-to-image',
                        isFriend: true
                    }
                })
                res.json({
                    code: 200,
                    message: "",
                    data: listUsers
                })
            })
            .catch((err) => {throw new Error(err)})
    } catch (error) {
        if (error) {
            res.json({
                code: 400,
                message: error.message,
                title: "Getting users failed" 
            })
        }        
    }
}

module.exports.profile = async (req, res) => {
    try {
        await User.findById(req.params.id)
            .then((user) => {
                console.log(user)
                user = {
                    _id: user._id,
                    name: user.locals.name,
                    status: 'user.status',
                    image: 'url/path-to-image',
                    listFriend: [],
                    groups: [],
                }
                res.json({
                    code: 200,
                    message: "Getting profile successfully",
                    data: user
                })
            })
            .catch((err) => {
                throw err})
    } catch (error) {
        if (error) {
            res.json({
                code: 400,
                message: error.message,
                title: "Getting profile failed"
            })
        }        
    }
}

module.exports.edit = async (req, res) => {
    try {
        // saasdas
        let changes = req.body,
            salt = await bcrypt.genSalt(10)
            newPassword =  await bcrypt.hash(changes.password, salt)
            newProfile = { 
            "locals.name": changes.name,
            "locals.password": newPassword,
            "locals.email": changes.email,
            "locals.username": changes.username,
            "locals.phone": changes.phone,
            updated: new Date()
        }
        await User.findByIdAndUpdate(req.params.id, newProfile, {new:true, upsert: true, runValidators: true})
            .then((user) => {
                console.log(user)
                res.json({
                    code: 200,
                    message: "Updating profile successfully",
                    data: user
                })
            })
            .catch((err) => {throw new Error(err)})
    } catch (error) {
        if (error) {
            console.log(`errorcheck`)
            // console.log(error.email.message)
            // console.log(error.username.message)
            console.log(error)
            let errorMessage = '';
            if (error.code === 11000) {errorMessage = ''}
            res.json({
                code: 400,
                message: error.message,
                title: "Updating profile failed"
            })
        }        
    }
}