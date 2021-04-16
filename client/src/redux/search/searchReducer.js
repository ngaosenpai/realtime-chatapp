import { 
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from "./searchActionType"

const initialState = {
    isLoading : false,
    data: [],
    error : null,
}

export const searchReducer = (state = initialState, action) => {
    const { payload } = action

    switch(action.type){
        
        case SEARCH_START:
            return {
                ...state,
                isLoading : true,
                error : null
            }
        
        case SEARCH_SUCCESS:
            return {
                ...state,
                isLoading : false,
                error : null,
                data: [...payload.searchResults]
            }
        
        case SEARCH_FAILURE:
            return {
                ...state,
                isLoading : false,
                error : payload.error
            }
        
        default: return state
    }
}