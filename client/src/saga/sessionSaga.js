import { call, put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import { io } from "socket.io-client";


import {
    FETCH_SESSION,
    FETCH_SESSION_START,
    FETCH_SESSION_SUCCESS,
    FETCH_SESSION_FAILURE
} from '../redux/session/sessionActionType'

import { 
    ADD_ONE_NEW_MESSAGE_FAILURE, 
    ADD_ONE_NEW_MESSAGE_SUCCESS 
} from "../redux/messages/messagesActionType"

import { INIT_SOCKET } from "../socketClient"

export function* workerFetchSession(action){
    
    try{
        //get token in store
        const token = yield select(state => state.jwt.token)
        console.log("saga log: ", token)
        // start fetch session (user info)
        yield put({type : FETCH_SESSION_START})
        //ajax
        const response = yield axios.get(`http://localhost:4000/users/token/${token}`, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        })
        yield console.log(response)
        //save to store
        let { user, error } = response.data
        if(user){
            const handshake = {
                auth : {
                    userId : user._id,
                    // add token later
                }
            }
            // // IMPLEMENT SOCKET
            // const socket = yield io("http://localhost:4000", handshake)
            // console.log(socket)
            // user = { ...user, socket : socket }
            // //

            // // socket handle here
            // socket.on("test", (data) => {
            //     console.log("server send: ", data)
            // })

            // socket.on("server-send-message", function(data) {
            //     // add new message to messageState
            //     const store = select(state => state)
            //     console.log(store)
            //     console.log("server send this: ", data)
            //     const { message, error } = data

            //     if(message){
            //         console.log("rece")
            //         put({
            //             type : ADD_ONE_NEW_MESSAGE_SUCCESS,
            //             payload : {
            //                 message
            //             }
            //         })
            //     }
            //     if(error){
            //         put({
            //             type : ADD_ONE_NEW_MESSAGE_FAILURE,
            //             payload : {
            //                 error
            //             }
            //         })
            //     }
            // })


            yield put({
                type : FETCH_SESSION_SUCCESS,
                payload : user
            })

            yield put({
                type : INIT_SOCKET
            })

        }
        if(error) throw new Error(error.message)
    } catch (error) {
        console.log(error.message)
        yield put({
            type : FETCH_SESSION_FAILURE,
            payload : error
        })
    }

}

export function* watchFetchSession(){
    yield takeEvery(FETCH_SESSION, workerFetchSession)
}