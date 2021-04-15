import { put, takeEvery, call } from 'redux-saga/effects'
import {
    SEARCH,
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../redux/search/searchActionType'
import axios from 'axios'

export function* workerSearch(action) {
    try {
        console.log("run search");
        const { username, password, email, name, phone } = action.payload
        // const payloads = Object.keys(action.payload).map((key) => [Number(key), action.payload[key]]);
        
        if (![username, password, email, name, phone].every(Boolean)) throw new Error("Please fill all fields");
        yield put({type: SEARCH_START});
        // send search request
        // not found api :)))))

        // search for users
        // const users = yield axios.post(`http://localhost:4000/users/search`, {
        //     name, email
        // })
        // search conversations
        // const conversation = yield axios.post(`http://localhost:4000/message/search`, {
        //     name, email, content
        // })
        // yield console.log(response);

        yield put({type: SEARCH_SUCCESS})
    } catch (error) {
        console.log(error)
        yield put({type: SEARCH_FAILURE, payload: error})
    }
}

export function* watchRegister(){
    yield takeEvery(SEARCH, workerSearch)
}