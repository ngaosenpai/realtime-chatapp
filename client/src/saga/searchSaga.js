import { put, takeEvery, call, select } from 'redux-saga/effects'
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
        const { search } = action.payload
        // const payloads = Object.keys(action.payload).map((key) => [Number(key), action.payload[key]]);
        
        if (![search].every(Boolean)) throw new Error("Please fill all fields");
        yield put({type: SEARCH_START});
        // send search request

        const token = yield select(state => state.jwt.token);
        const header = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }
        const response = yield axios.post("http://localhost:4000/users/search", {
            search
        }, header)
        console.log(`search`)
        console.log(search)
        if (response.data.users) {
            yield put({type: SEARCH_SUCCESS, payload: { 
                searchResults: response.data.users
            }})
        }
        if (response.data.error) { throw new Error(response.data.error)}

    } catch (error) {
        console.log(error)
        yield put({type: SEARCH_FAILURE, payload: {error}})
    }
}

export function* watchSearch(){
    yield takeEvery(SEARCH, workerSearch)
}