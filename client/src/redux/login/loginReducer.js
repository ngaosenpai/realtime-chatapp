import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./loginActionType"

const initialState = {
    isLoading : false,
    errors : []
}

export const loginReducer = (state = initialState, action) => {
    const { payload } = action

    switch(action.type){
        
        case LOGIN_START:
            return {
                ...state,
                isLoading : true,
                errors : []
            }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading : false,
                errors : []
            }
        
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading : false,
                errors : [payload]
            }
        
        default: return state
    }
}