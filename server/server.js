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
const socketio = require('socket.io')
const http = require('http')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    resave: true,
    saveUninitialized: false, 
    secret: process.env.SESSION_SECRET,
}));
app.use(cookie(process.env.COOKIE_SECRET))

mongoose.set('useFindAndModify', false);
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

io.use((socket, next) => {
    // client should add userId into socket.auth 
    const userId = socket.handshake.auth.userId;
    if (!userId) {
        return next(new Error("Invalid user ID"));
    }
    socket.userId = userId;
    next();
})

io.on('connection', socket => {
    socket.on('joinRoom', ({name, roomId}) => {
        // Room would be roomId
        const user = userJoin(socket.id, name, roomId);
        socket.join(user.room);
        socket.emit('message', formatMessage('Admin', 'Welcome to ChatRoom'))

        socket.broadcast
            .to(user.roomId)
            .emit('message', formatMessage('Admin', `${user.name} joined`))
        
        io.to(user.roomId)
            .emit('roomUser', {
                roomId: user.roomId,
                users: getActiveUsers(user.roomId)
            })
    })

    socket.on('chatMessage', (message) => {
        const user = getCurrentUser(socket.id);
        io.to(user.roomId)
            .emit('message', formatMessage(user.name, message))

    })

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.roomId)
                .emit('message', formatMessage('Admin', `${user.name} left`))
            io.to(user.roomId)
                .emit('roomUser', {
                    roomId: user.roomId,
                    users: getActiveUsers(user.roomId)
                })
        }
    })
})

const { userJoin, getCurrentUser, userLeave, getActiveUsers} = require('./controllers/chatRoom.controller')

const homeRoute = require('./routes/home.route')
const authsRoute = require('./routes/auths.route')

const {authenticateToken, formatMessage} = require('./middlewares/index.middleware')

app.use('/auths', authsRoute)
app.use('/', authenticateToken, homeRoute)

const PORT = process.env.PORT || 3000;

server.listen( PORT, () => {
    console.log(`server listening on port ${PORT}: http://localhost:${PORT}`);
})