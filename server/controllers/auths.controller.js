const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const { User } = require('../models')
const User = require('../models/user.model')
const { optionRefreshToken, optionAccessToken } = require('../config/index.config')
const handleErrors = (err) => {
    // console.log(err.message, err.code);
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

const generateAccessToken = (user) => jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, optionAccessToken)
// const generateAccessToken = (user) => jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: maxAge })
const generateRefreshToken = (user) => jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET)

let refreshTokens = []
const maxAge = 60
// const maxAge = 60 * 60 * 24 * 30

module.exports.index = (req, res) => {
    try {
        if (req.method !== 'GET') {
            throw new Error('Invalid required method');
        }
        else res.redirect('/auths/login')
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message
        })
    }
}

module.exports.loginForm = (req, res) => {
    try {
        if (req.method !== 'GET') {
            throw new Error('Invalid required method');
        }
        else res.json({layout: 'LoginFrom'})
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message
        })
    }
}

module.exports.login = async (req, res) => {
    try {
        if (req.method !== 'POST') {
            throw new Error('Invalid required method');
        }
        else {
            let { username, password } = req.body
            if (![ username, password ].every(Boolean)) {
                throw new Error('Invalid arguments required');
            }
            else {
            await User.find({'locals.username': username})
                .then(async response => {
                    if (response.length > 0) {
                        const user = response[0];
                        const validPassword = await bcrypt.compare(password, user.locals.password)
                        if (validPassword) {
                            const accessToken = generateAccessToken(user)
                            const refreshToken = generateRefreshToken(user)
                            refreshTokens.push(refreshToken)
                            res.set('Authorization', `Bearer ${accessToken}`);
                            res.cookie('accessToken', accessToken, { 
                                // secure: true, 
                                httpOnly: true, 
                                maxAge: optionAccessToken.expiresIn * 1000
                            });
                            res.cookie('refreshToken', refreshToken, { 
                                // secure: true, 
                                httpOnly: true, 
                                maxAge: optionRefreshToken.expiresIn * 1000
                            });
                            return res.json({
                                code: 200,
                                message: 'Login successfully',
                                accessToken, 
                                refreshToken
                            })
                        }
                        return res.json({
                            code: 401,
                            message: 'Login with incorrect username or password'
                        })
                        
                    }
                    else throw new Error('Login failed');
                })
            }
        }
    } 
    catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message
        })
    }
}

module.exports.registerForm = (req, res) => {
    try {
        if (req.method !== 'GET') {
            throw new Error('Invalid required method');
        }
        else res.json({layout: 'RegisterForm'})
    } 
    catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message
        })
    }
}

module.exports.register = async (req, res) => {
    try {
        if (req.method !== 'POST') {
            throw new Error('Invalid required method');
        }
        else {
            let { username, password, email, name, phone } = req.body
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
    }
    catch (err) { 
        res.json({ 
            code: 400, 
            message: err.message,
        })
    }
}

module.exports.logout = (req, res) => {
    try { 
        if (req.method !== 'POST') {
            throw new Error('Invalid required method');
        }  
        else {
            let username = req.session.username;
            users.map(user => user.username !== username)
            res.json({ 
                code: 0,
                message: `${username} has been logged out`,
            })
        }     
    }
    catch (err) { 
        res.json({ 
            code: 400, 
            message: err.message,
        })
    }
}

// JWT
module.exports.refreshToken = (req, res) => {
    try { 
        if (req.method !== 'POST') {
            throw new Error('Invalid required method');
        }  
        else {

            const signedCookies = req.signedCookies; // get signed cookies
            console.log('signed-cookies:', signedCookies);  
            const cookies = req.cookies; // get not signed cookies
            console.log('not-signed-cookies:', cookies);
            // or access directly to one cookie by its name :
            const myTestCookie = req.signedCookies.test;
            console.log('our test signed cookie:', myTestCookie);

            const refreshToken = req.cookies.refreshToken;
            if (refreshToken == null) return res.sendStatus(401);
            if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.sendStatus(403)
                const accessToken = generateAccessToken(user)
                res.set('Authorization', `Bearer ${accessToken}`);
                res.cookie('accessToken', accessToken, { 
                    // secure: true, 
                    httpOnly: true, 
                    maxAge: optionAccessToken.expiresIn * 1000
                });
                res.json({
                    code: 201,
                    message: "Refreshing token Successfully",
                    accessToken
                })
            })
        }
    }
    catch (err) { 
        res.json({ 
            code: 400, 
            message: err.message,
        })
    }
}

module.exports.deleteToken = (req, res) => {
    try { 
        if (req.method !== 'DELETE') {
            throw new Error('Invalid required method');
        }  
        else {
            refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken)
            const hasCookies = req.cookies && req.cookies.refreshToken
            if (hasCookies) {
                res.clearCookie('accessToken');
                res.clearCookie('refreshToken');
            }
            res.json({
                code: 204,
                message: "Deleting Token Successfully",
            })
        }
    }
    catch (err) { 
        res.json({ 
            code: 400, 
            message: err.message,
        })
    }
}