import { call, put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import {
    FETCH_SESSION,
    FETCH_SESSION_START,
    FETCH_SESSION_SUCCESS,
    FETCH_SESSION_FAILURE
} from '../redux/session/sessionActionType'


export function* workderFetchSession(action){
    
    //get token in store
    const token = yield select(state => state.jwt.token)
    // start fetch session (user info)
    yield put({type : FETCH_SESSION_START})
    try{
        //ajax
        const user = yield axios.post(`localhost:4000/user/${token}`)
        //save to store
        yield put({
            type : FETCH_SESSION_SUCCESS,
            user : user
        })
    } catch (error) {
        console.log(error.message)
        yield put({
            type : FETCH_SESSION_FAILURE,
            error
        })
    }

}

export function* watchFetchSession(){
    yield takeEvery(FETCH_SESSION, workderFetchSession)
}