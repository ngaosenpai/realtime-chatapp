import { call, put, takeEvery, all, take } from 'redux-saga/effects'

import { 
    GET_JWT_LOCAL_STORAGE,
    GET_JWT, 
    CLEAR_JWT_LOCAL_STORAGE, 
    CLEAR_JWT 
} from '../redux/auth/authActionType'


export function* workerJwt(action){
    const jwt = yield call({context: localStorage, fn: localStorage.getItem}, 'ACCESS_TOKEN')
    console.log(jwt)
    yield put({
        type : GET_JWT_LOCAL_STORAGE,
        payload : jwt
    })
}

export function* workerClearJWt(action){
    yield call({
        context : localStorage,
        fn : localStorage.removeItem
    }, "ACCESS_TOKEN")
    yield put({type : CLEAR_JWT_LOCAL_STORAGE})
}

export function* watchJwt(){
    yield takeEvery(GET_JWT, workerJwt)
    yield takeEvery(CLEAR_JWT, workerClearJWt)
}