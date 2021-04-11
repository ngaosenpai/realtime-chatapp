import { put, takeEvery, call } from 'redux-saga/effects'
import {
    REGISTER,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../redux/register/registerActionType'
import { KEEP_SESSION } from './authSessionSaga'
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

        // store token to localStorage
        yield call({
            context: localStorage, 
            fn: localStorage.setItem
        }, 'ACCESS_TOKEN', response.data.accessToken)

        // dispatch to get jwt from localStorage and user info
        yield put({type: KEEP_SESSION})
        
        yield put({type: REGISTER_SUCCESS})
    } catch (error) {
        console.log(error)
        yield put({type: REGISTER_FAILURE, payload: error})
    }
}

export function* watchRegister(){
    yield takeEvery(REGISTER, workerRegister)
}