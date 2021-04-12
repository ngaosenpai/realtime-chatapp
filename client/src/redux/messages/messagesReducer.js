import {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE
} from "./messagesActionType"

const initialState = {
    isLoading : false,

    receiverId : null,
    messages : [],
    error : null,
    skip : 0,
    limit : 50
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
            return {
                ...state,
                isLoading : true,
                error : null,
                receiverId : action.payload.receiverId
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
                messages : [...action.payload.newMessages],
                error : action.payload.error
            }
        
        default : return state

    }

}