import { all } from 'redux-saga/effects'

import { watchJwt } from './authSaga'
import { watchFetchSession } from './sessionSaga'
import { watchKeepSession } from "./authSessionSaga"
import { watchLogin } from "./loginSaga"
import { watchRegister } from "./registerSaga"
import { watchProcessMessages } from "./messagesSaga"
import { watchFetchConversation } from "./conversationSaga"

export default function* rootSaga(){
    yield all([
        watchJwt(),
        watchFetchSession(),
        watchKeepSession(),
        watchLogin(),
        watchRegister(),
        watchProcessMessages(),
        watchFetchConversation()
    ])
}