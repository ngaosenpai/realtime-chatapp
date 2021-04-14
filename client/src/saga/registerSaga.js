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
        const { username, password, email, name, phone } = action.payload
        // const payloads = Object.keys(action.payload).map((key) => [Number(key), action.payload[key]]);
        
        if (![username, password, email, name, phone].every(Boolean)) throw new Error("Please fill all fields");
        yield put({type: REGISTER_START});
        // send register request
        const response = yield axios.post(`http://localhost:4000/auths/register`, {
            name, email, phone, username, password
        })
        yield console.log(response);

        yield put({type: REGISTER_SUCCESS})
        yield put({type: LOGIN, payload: {username, password}})
        yield put({type: LOGIN_SUCCESS})

    } catch (error) {
        console.log(error)
        yield put({type: REGISTER_FAILURE, payload: error})
    }
}

export function* watchRegister(){
    yield takeEvery(REGISTER, workerRegister)
}