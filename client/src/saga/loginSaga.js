import { put, takeEvery, call } from 'redux-saga/effects'
import axios from "axios"

import { 
    LOGIN,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../redux/login/loginActionType"
import { KEEP_SESSION } from "./authSessionSaga"
import { CLEAR_JWT } from "../redux/auth/authActionType"

export function* workerLogin(action){
    try{
        
        console.log("run login")
        yield put({ type : CLEAR_JWT })
        const { username, password } = action.payload
        if(!username || !password) throw new Error("Username and Password are required!")
        yield put({type : LOGIN_START})
        //send login req
        // const response = yield axios.post(`http://localhost:4000/auths/login`, {
        const response = yield axios.post(`${process.env.REACT_APP_SERVER_URL}/auths/login`, {
            username, password
        })
        yield console.log(response)
        const { accessToken, error } = response.data

        if(accessToken){

            //store token to localStorage
            yield call({
                context: localStorage,
                fn: localStorage.setItem
            }, 'ACCESS_TOKEN', accessToken)
            //dispatch to get jwt from localstorage and user info
            yield put({type : KEEP_SESSION})
            
            yield put({type : LOGIN_SUCCESS})

        }
        
        if(error){
            throw new Error(error)
        }

    } catch(error) {
        console.log(error)
        yield put({ type: KEEP_SESSION })
        yield put({type : LOGIN_FAILURE, payload : error})
    }
}

export function* watchLogin(){
    yield takeEvery(LOGIN, workerLogin)
}