import {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    ADD_ONE_NEW_MESSAGE_SUCCESS,
    ADD_ONE_NEW_MESSAGE_FAILURE
} from "./messagesActionType"

const initialState = {
    isLoading : false,

    receiverId : null,
    messages : [],
    error : null,
    skip : 0,
    limit : 100
}

export const messagesReducer = (state = initialState, action) => {
    // const { 
    //     receiverId, 
    //     newMessages, 
    //     error,
    //     skip
    // } = (action.payload)

    switch(action.type){

        case FETCH_MESSAGES_START:

            const list = state.receiverId === action.payload.receiverId ? [...state.messages] : []
            const sk = state.receiverId === action.payload.receiverId ? state.skip : 0
            
            return {
                ...state,
                isLoading : true,
                error : null,
                receiverId : action.payload.receiverId,
                messages : list,
                skip : sk
            }
        
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                isLoading : false,
                error : null,
                skip : state.skip + action.payload.newMessages.length,
                messages : [...state.messages, ...action.payload.newMessages]
            }
        
        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                isLoading : false,
                error : action.payload.error
            }
        
        case ADD_ONE_NEW_MESSAGE_SUCCESS:
            console.log("called")
            return {
                ...state,
                messages : [...state.messages, ...action.payload.newMessages],
                skip : state.skip + 1,
                error : null
            }
        
        case ADD_ONE_NEW_MESSAGE_FAILURE:
            console.log("called")
            return {
                ...state,
                error : action.payload.error
            }
        
        
        default : return state

    }

}