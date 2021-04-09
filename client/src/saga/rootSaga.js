import { all } from 'redux-saga/effects'

import { watchJwt } from './authSaga'
import { watchFetchSession } from './sessionSaga'

export default function* rootSaga(){
    yield all([
        watchJwt(),
        watchFetchSession()
    ])
}