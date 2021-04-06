// const router = require('express').Router();
const errorHandler = (paths, router) => {
    router.use(paths, (req, res)=>{
        res.json({
            code: 400,
            message: 'Invalid required method'
        })
    })
    router.use((req, res)=>{
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
}

module.exports = errorHandler