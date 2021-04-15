import { 
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { authReducer } from './auth/authReducer'
import { sessionReducer } from './session/sessionReducer'
import { loginReducer } from "./login/loginReducer"
import { registerReducer } from "./register/registerReducer"
import { messagesReducer } from "./messages/messagesReducer"
import { conversationReducer } from "./conversation/conversationReducer"
import { searchReducer } from "./search/searchReducer"

import rootSaga from '../saga/rootSaga'
import { socketMiddleware } from "../socketClient"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    jwt: authReducer,
    session : sessionReducer,
    login : loginReducer,
    register : registerReducer,
    currentMessages : messagesReducer,
    conversation : conversationReducer,
    searchResults : searchReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(socketMiddleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store