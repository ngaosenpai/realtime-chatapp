import { put, takeEvery, select, takeLatest } from 'redux-saga/effects'
import axios from "axios"

import {
    FETCH_CONVERSATION,
    FETCH_CONVERSATION_START,
    FETCH_CONVERSATION_SUCCESS,
    FETCH_CONVERSATION_FAILURE
} from "../redux/conversation/conversationActionType"

function* workerFetchConversation(action){

    try {
        
        yield put({ type : FETCH_CONVERSATION_START })

        const userId = yield select(state => state.session.user._id)
        const token = yield select(state => state.jwt.token)
        const header = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }
        const response = yield axios.post("http://localhost:4000/conversation/get-list", {
            userId
        }, header)
        const { conversationList } = response.data
        console.log(conversationList)

        yield put({
            type : FETCH_CONVERSATION_SUCCESS,
            payload : {
                conversationList
            }
        })



    } catch (error) {
        yield put({
            type : FETCH_CONVERSATION_FAILURE,
            payload : {
                error
            }
        })
    }

}


export function* watchFetchConversation(){
    yield takeEvery(FETCH_CONVERSATION, workerFetchConversation)
}