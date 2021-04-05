if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: './config/.env'})
}

const jwt = require('jsonwebtoken')

module.exports = authenticateToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    const token = authorizationHeader && authorizationHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return res.json({
                code: 403,
                message: err.message
            });
        }
        req.user = user;
        next();
    })
}