const router = require('express').Router();

const controller = require('../controllers/auths.controller')
const jwtRoute = require('./jwt.route')

router.get('/', controller.index)
router.route('/login')
    .get(controller.loginForm)
    .post(controller.login)
router.route('/register')
    .get(controller.registerForm)
    .post(controller.register)
router.post('/logout', controller.logout)
router.use('/jwt', jwtRoute)

// const paths = ['/login', '/register', '/logout', '/jwt']
// router.use(paths, (req, res)=>{
//     res.json({
//         code: 400,
//         message: 'Invalid required method'
//     })
// })
router.use((req, res)=>{
    console.log(req)

    res.json({
        code: 404,
        message: 'Page Not Found',
        title: 'Page Not Found'
    })
})
router.use((err, req, res, next) =>{
    res.status(500);
    res.json({
        code: 500,
        message: err.message,
        title: 'Internal Server Error'
    });
})
module.exports = router