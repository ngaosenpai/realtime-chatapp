import { all } from 'redux-saga/effects'

import { watchJwt } from './authSaga'
import { watchFetchSession } from './sessionSaga'
import { watchKeepSession } from "./authSessionSaga"
import { watchLogin } from "./loginSaga"
import { watchRegister } from "./registerSaga"

export default function* rootSaga(){
    yield all([
        watchJwt(),
        watchFetchSession(),
        watchKeepSession(),
        watchLogin(),
        watchRegister()
    ])
}