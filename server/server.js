if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: './config/.env'})
}

const express = require('express');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const cookie = require('cookie-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const app = express();

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    resave: true,
    saveUninitialized: false, 
    secret: process.env.SESSION_SECRET,
}));
app.use(cookie(process.env.COOKIE_SECRET))

const homeRoute = require('./routes/home.route')
const authsRoute = require('./routes/auths.route')

app.use('/', homeRoute)
app.use('/auths', authsRoute)

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log(`server listening on port ${PORT}: http://localhost:${PORT}`);
});