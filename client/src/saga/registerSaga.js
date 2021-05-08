import { put, takeEvery, call } from 'redux-saga/effects'
import {
    REGISTER,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../redux/register/registerActionType'
import { LOGIN, LOGIN_SUCCESS } from '../redux/login/loginActionType'
import axios from 'axios'

export function* workerRegister(action) {
    try {
        console.log("run register");
        const data = action.payload
        // console.log(action.payload)
        console.log(data.get("file"))
        // const payloads = Object.keys(action.payload).map((key) => [Number(key), action.payload[key]]);
        
        yield put({type: REGISTER_START});

        // send register request

        const response = yield axios({
            method: "post",
            url: `${process.env.REACT_APP_SERVER_URL}/auths/register`,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },

          })
        if (response.data.data !== undefined){
            
            let {username, password} = response.data.data.locals
    
            yield put({type: REGISTER_SUCCESS})
            // const timerLogin = yield setTimeout(() =>{
                
            // },3000)
            // yield clearTimeout(timerLogin)
            yield put({type: LOGIN, payload: {username, password}})
            yield put({type: LOGIN_SUCCESS})
        }
        else throw new Error("There is an existing account")
    } catch (error) {
        console.log(error.message)
        yield put({type: REGISTER_FAILURE, payload: error})
    }
}

export function* watchRegister(){
    yield takeEvery(REGISTER, workerRegister)
}