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
        
        // if (![file, username, password, email, name, phone].every(Boolean)) throw new Error("Please fill all fields");
        yield put({type: REGISTER_START});
        
        const response = yield axios({
            method: "post",
            url: "http://localhost:4000/auths/register",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })

        yield console.log(response);
        if (response.data.data !== undefined) {
            let {username, password} = response.data.data.locals
            yield put({type: REGISTER_SUCCESS})
            yield put({type: LOGIN, payload: {username, password}})
            yield put({type: LOGIN_SUCCESS})
        }
        else {
            throw Error(response.data.message)
        }
    } catch (error) {
        console.log(error)
        yield put({type: REGISTER_FAILURE, payload: error})
    }
}

export function* watchRegister(){
    yield takeEvery(REGISTER, workerRegister)
}