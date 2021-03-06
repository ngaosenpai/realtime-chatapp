import { 
    ADD_ONE_NEW_MESSAGE_SUCCESS, 
    ADD_ONE_NEW_MESSAGE_FAILURE,
    SEND_MESSAGE
} from "./redux/messages/messagesActionType"

import {
    PUSH_CONVERSATION,
    MAKE_CONVERSATION
} from "./redux/conversation/conversationActionType"

import { io } from 'socket.io-client';
export const INIT_SOCKET = "INIT_SOCKET"


let socket = null

export const socketMiddleware = storeAPI => next => action => {
    const { user } = storeAPI.getState().session

    if(action.type === INIT_SOCKET){
        
        const handshake = {
            auth : {
                userId : user._id,
                // add token later
            }
        }

        socket = io("http://localhost:4000", handshake)
        
        //
        socket.on("test", (data) => {
            console.log("server send: ", data)
        })
        socket.on("server-make-conversation", function(data) {
            let { user1, user2 } = data
            let targetUser  
            if(user1._id === user._id){
                targetUser = user2
            } else {
                targetUser = user1
            }
            console.log(targetUser)
            storeAPI.dispatch({ 
                type: PUSH_CONVERSATION,
                payload :  {
                    newMessage: {
                        name : targetUser.locals.name,
                        image : targetUser.locals.image,
                        contactedId : targetUser._id,
                        receiverId: targetUser._id,
                        lastedMessage : "",
                        lastedTime : Date().now,
                    }
                }
            })
            
            
        })

        socket.on("server-send-message", function(data) {
            
            console.log("server send this: ", data)
            const { message, error } = data

            if(message){
                console.log("rece")
                storeAPI.dispatch({
                    type : ADD_ONE_NEW_MESSAGE_SUCCESS,
                    payload : {
                        newMessages : [message]
                    }
                })

                storeAPI.dispatch({
                    type : PUSH_CONVERSATION,
                    payload : {
                        newMessage : message
                    }
                })

            }
            if(error){
                storeAPI.dispatch({
                    type : ADD_ONE_NEW_MESSAGE_FAILURE,
                    payload : {
                        error
                    }
                })
            }

            console.log(storeAPI.getState())
        })

        
    } else if (action.type === SEND_MESSAGE) {

        const { receiverId, content } = action.payload
        console.log("you send message - wait for server response!")
        socket.emit("client-send-message", {
            senderId : user._id, 
            // senderId : action.payload.senderId, 
            receiverId,
            content 
        })

    } else if (action.type === MAKE_CONVERSATION) {
        socket.emit("client-make-conversation", {
            userId : user._id, 
            targetId: action.payload.targetId,

        })  
    }
    
    else return next(action)
}