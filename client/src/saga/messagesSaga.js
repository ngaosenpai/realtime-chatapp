import { put, takeEvery, select } from 'redux-saga/effects'
import { 
    FETCH_MESSAGES,
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE
} from "../redux/messages/messagesActionType"
import axios from "axios"

function* workerFetchMessages(action){
    /** dispatch this
     * payload : {
                senderId : session.user._id,
                receiverId : userId,
                skip : currentMessages.skip
            }
     */
    try{
        console.log("1a")
        console.log(action.payload)
        yield put({ 
            type : FETCH_MESSAGES_START,
            payload : {...action.payload}
        })
        console.log("1b")
        const token = yield select(state => state.jwt.token)
        const header = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }
        console.log("1c")
        const response = yield axios.post("http://localhost:4000/messages/get", action.payload, header)
        console.log(response.data.messages)
        yield put({
            type : FETCH_MESSAGES_SUCCESS,
            payload : {
                ...action.payload,
                newMessages : response.data.messages
            }
        })
        console.log("1d")
    } catch(error) {
        put({
            type : FETCH_MESSAGES_FAILURE,
            payload : {
                ...action.payload,
                error
            }
        })
    }

}

export function* watchFetchMessages(){
    yield takeEvery(FETCH_MESSAGES, workerFetchMessages)
}