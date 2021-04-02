const bcrypt = require('bcrypt');

const { User } = require('../models')

let users = []

module.exports.index = (req, res) => {
    res.redirect('/auths/login')
}

module.exports.loginForm = (req, res) => {
    res.send('LoginFrom')
}

module.exports.login = (req, res) => {
    res.redirect('/')
}

module.exports.registerForm = (req, res) => {
    res.send('RegisterForm')
}

module.exports.register = async (req, res) => {
    let { username, password, email, name, phone } = req.body
    try {
        if (![ username, password, email, name, phone ].every(Boolean)) {
            throw new Error('Invalid arguments required');
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10)
            User.findOne({username})
                .then(user => {
                    if (user) {
                        throw new Error({
                            code: 303,
                            message: "There is an existing user",
                        })
                    }
                    else {
                        let user = {
                            username,
                            password: hashedPassword,
                            name,
                            email,
                            phone
                        }
                        users.push(user)
                        return res.json({ 
                            code : 200, 
                            message : "thêm người dùng thành công", 
                            data : user
                        })
                    }
                })
                .catch(err => res.json({ 
                    code: err.code || 404, 
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