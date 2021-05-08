import { put, takeEvery, select, takeLatest } from 'redux-saga/effects'
import { 
    FETCH_MESSAGES,
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    SEND_MESSAGE
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
       
        console.log(action.payload)
        yield put({ 
            type : FETCH_MESSAGES_START,
            payload : {...action.payload}
        })
        
        const cM = yield select(state => state.currentMessages)
        console.log("after start: ", cM )

        const token = yield select(state => state.jwt.token)
        const header = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }

        console.log(action)

        const response = yield axios.post(`/messages/get`, action.payload, header)

        const { messages, error } = response.data

        console.log("fetch ook: ", messages)

        if(messages){

            yield put({
                type : FETCH_MESSAGES_SUCCESS,
                payload : {
                    ...action.payload,
                    newMessages : response.data.messages
                }
            })
        }
        if(error) throw new Error(error)
        
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

// function* workerSendNewMessage(action){
//     const user = yield select(state => state.session.user)
//     const { receiverId, content } = action.payload
//     console.log("you send message - wait for server response!")
//     console.log(user)
//     user.socket.emit("client-send-message", {
//         // senderId : user._id,  
            // senderId : action.payload.senderId, //test
            // receiverId,
            // content
//     })

// }

export function* watchProcessMessages(){
    yield takeEvery(FETCH_MESSAGES, workerFetchMessages)
    // yield takeLatest(SEND_MESSAGE, workerSendNewMessage)
}