import { put, takeEvery, call } from 'redux-saga/effects'
import { 
    LOGIN,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../redux/login/loginActionType"
import { KEEP_SESSION } from "./authSessionSaga"
import axios from "axios"

export function* workerLogin(action){
    try{

        const { username, password } = action.payload
        if(!username || !password) throw new Error("Username and Password are required!")
        yield put({type : LOGIN_START})
        //send login req
        const response = yield axios.post(`localhost:4000/auths/login`, {
            username, password
        })

        //store token to localStorage
        yield call({
            context: localStorage,
            fn: localStorage.setItem
        }, 'ACCESS_TOKEN', response.accessToken)
        
        //dispatch to get jwt from localstorage and user info
        yield put({type : KEEP_SESSION})
        
        yield put({type : LOGIN_SUCCESS})
    } catch(error) {
        console.log(error)
        yield put({type : LOGIN_FAILURE, payload : error})
    }
}

export function* watchLogin(){
    yield takeEvery(LOGIN, workerLogin)
}