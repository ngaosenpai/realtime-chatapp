import { call, put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import { io } from "socket.io-client";

import {
    FETCH_SESSION,
    FETCH_SESSION_START,
    FETCH_SESSION_SUCCESS,
    FETCH_SESSION_FAILURE
} from '../redux/session/sessionActionType'


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
            const socket = yield io("http://localhost:4000", handshake)
            console.log(socket)
            user = { ...user, socket : socket }
            //

            yield put({
                type : FETCH_SESSION_SUCCESS,
                payload : user
            })

            // socket handle here
            socket.on("test", (data) => {
                console.log("server send: ", data)
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