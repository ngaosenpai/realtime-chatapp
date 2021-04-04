const bcrypt = require('bcrypt');
const { response } = require('express');

// const { User } = require('../models')
const User = require('../models/user.model')
const { optionSignToken } = require('../config')
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
}

const generateAccessToken = (user) => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, optionSignToken)
const generateRefreshToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

let refreshTokens = []

module.exports.index = (req, res) => {
    res.redirect('/auths/login')
}

module.exports.loginForm = (req, res) => {
    res.json({layout: 'LoginFrom'})
}

module.exports.login = async (req, res) => {
    let { username, password } = req.body
    try {
        if (![ username, password ].every(Boolean)) {
            throw new Error('Invalid arguments required');
        }
        else {
        await User.find({'locals.username': username})
            .then(response => {
                if (response.length > 0) {
                    const user = response[0];
                    const accessToken = generateAccessToken(user)
                    const refreshToken = generateRefreshToken(user)
                    
                    refreshTokens.push(refreshToken)

                    res.json({
                        code: 200,
                        message: 'Login successfully',
                        accessToken, 
                        refreshToken
                    })
                }
                else throw new Error('Login failed');
            })
        }
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message
        })
    }
}

module.exports.registerForm = (req, res) => {
    res.json({layout: 'RegisterForm'})
}

module.exports.register = async (req, res) => {
    let { username, password, email, name, phone } = req.body
    try {
        if (![ username, password, email, name, phone ].every(Boolean)) {
            throw new Error('Invalid arguments required');
        }
        else {
            await User.find({'locals.username': username, 'locals.email': email })
                .then(async (user) => {
                    if (user.length > 0) {
                        return res.json({
                            code: 303,
                            message: "There is an existing user",
                        })
                    }
                    else {
                        let newUser = {
                            locals: {
                                username,
                                password,
                                name,
                                email,
                                phone
                            }
                        }
                        await User.create(newUser)
                            .then(result => {
                                if (result) {
                                    return res.json({ 
                                        code : 200, 
                                        message : "Creating new user is successful",
                                        data : newUser
                                    })
                                }
                                else throw new Error("Creating new user is failed")
                            })
                    }
                })
                .catch(err => res.json({ 
                    code: 404, 
                    message: err.message,
                }))
        }
    }
    catch (err) { 
        res.json({ 
            code: err.code || 400, 
            message: err.message,
        })
    }
}

module.exports.logout = (req, res) => {
    let username = req.session.username;
    users.map(user => user.username !== username)
    res.json({ 
        code: 0,
        message: `${username} has been logged out`,
    })
}

// JWT
module.exports.refreshToken = (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    
}

module.exports.deleteToken = (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
}