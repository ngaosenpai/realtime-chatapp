import { 
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "./registerActionType"

const initialState = {
    isLoading : false,
    finnish: false,
    errors : []
}

export const registerReducer = (state = initialState, action) => {
    const { payload } = action

    switch(action.type){
        
        case REGISTER_START:
            return {
                ...state,
                isLoading : true,
                errors : []
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading : false,
                finnish: true,
                errors : [],
            }
        
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading : false,
                errors : [payload]
            }
        
        default: return state
    }
}