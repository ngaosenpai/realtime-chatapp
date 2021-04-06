// const { User }  = require('../models')
const User = require('../models/user.model')

module.exports.index = async (req, res) => {
    try {
        await User.find({})
            .then((listUsers) => {
                listUsers = listUsers.map((user) => {
                    return {
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
                message: "Getting users failed",
                title: err.message
            })
        }        
    }
}

module.exports.profile = async (req, res) => {
    try {
        await User.find({'locals.username': req.body.username})
            .then((listUsers) => {
                listUsers = listUsers.map((user) => {
                    return {
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
                message: "Getting users failed",
                title: err.message
            })
        }        
    }
}

module.exports.edit = async (req, res) => {
    try {
        // let user = { }
        await User.find({'locals.username': 'long'})
            .then((user) => {
                res.json({
                    code: 200,
                    message: "",
                    data: user
                })
            })
            .catch((err) => {throw new Error(err)})
    } catch (error) {
        if (error) {
            res.json({
                code: 400,
                message: "Getting users failed",
                title: err.message
            })
        }        
    }
}