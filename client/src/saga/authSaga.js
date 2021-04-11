import { call, put, takeEvery, all } from 'redux-saga/effects'

import { GET_JWT_LOCAL_STORAGE, GET_JWT } from '../redux/auth/authActionType'


export function* workerJwt(action){
    const jwt = yield call({context: localStorage, fn: localStorage.getItem}, 'ACCESS_TOKEN')
    console.log(jwt)
    yield put({
        type : GET_JWT_LOCAL_STORAGE,
        payload : jwt
    })
}

export function* watchJwt(){
    yield takeEvery(GET_JWT, workerJwt)
}