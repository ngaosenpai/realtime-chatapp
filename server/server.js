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

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function cb() {
  console.log("Now connected to MongoDB!")
});

const homeRoute = require('./routes/home.route')
const authsRoute = require('./routes/auths.route')

const {authenticateToken} = require('./middlewares/index.middleware')

app.use('/auths', authsRoute)
app.use('/', authenticateToken, homeRoute)

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log(`server listening on port ${PORT}: http://localhost:${PORT}`);
});