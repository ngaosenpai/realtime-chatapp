import { 
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from "./searchActionType"

const initialState = {
    isLoading : false,
    errors : []
}

export const searchReducer = (state = initialState, action) => {
    const { payload } = action

    switch(action.type){
        
        case SEARCH_START:
            return {
                ...state,
                isLoading : true,
                errors : []
            }
        
        case SEARCH_SUCCESS:
            return {
                ...state,
                isLoading : false,
                errors : []
            }
        
        case SEARCH_FAILURE:
            return {
                ...state,
                isLoading : false,
                errors : [payload]
            }
        
        default: return state
    }
}