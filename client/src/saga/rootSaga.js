import { all } from 'redux-saga/effects'

import { watchJwt } from './authSaga'
import { watchFetchSession } from './sessionSaga'
import { watchKeepSession } from "./authSessionSaga"
import { watchLogin } from "./loginSaga"
import { watchRegister } from "./registerSaga"
import { watchFetchMessages } from "./messagesSaga"

export default function* rootSaga(){
    yield all([
        watchJwt(),
        watchFetchSession(),
        watchKeepSession(),
        watchLogin(),
        watchRegister(),
        watchFetchMessages()
    ])
}