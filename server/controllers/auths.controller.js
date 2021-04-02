module.exports.index = (req, res) => {
    res.send('LoginFrom')
}

module.exports.loginForm = (req, res) => {
    res.send('LoginFrom')
}

module.exports.login = (req, res) => {
    res.redirect('/')
}

module.exports.registerForm = (req, res) => {
    res.send('/RegisterForm')
}

module.exports.register = (req, res) => {
    res.redirect('/register')
}

module.exports.logout = (req, res) => {
    res.redirect('/')
}