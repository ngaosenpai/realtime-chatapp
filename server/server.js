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
const cors = require("cors")

const app = express();
const server = http.createServer(app);

//Hao add
const User = require("./models/user.model")
const Message = require("./models/message.model")

app.use('/public', express.static('public'));
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))
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



//Hao modify
//socket server implementation

const io = socketio(server, {
    cors: {
      origin: 'http://localhost:3000',
    }
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

    // Hao add
    console.log("have new connection: ", socket.id)
    //update socketId in user model 
    const { userId } = socket.handshake.auth
    User.findByIdAndUpdate(userId, {socketId : socket.id}, { new : true })
    .exec()
    .then(user => console.log(user))
    
    setTimeout(() => {
        socket.emit("test", "send after 5s")
    }, 5000)

    socket.on("client-send-message", ({senderId, receiverId, content}) => {

        const message = new Message({senderId, receiverId, content})
        message.save()
        .then(mess => {
            console.log("Save OK ",mess)
            return User.findById(receiverId)
        })
        .exec()
        .then(receiver => {
            if(receiver.socketId){
                io.to(receiver.socketId)
                .emit("server-send-message", {
                    ...message
                })
            }
            socket.emit("server-send-message", {
                ...message
            })
        }) 
        .catch(err => console.log("Some thing wrong: ", err.message))

    })
    // 


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