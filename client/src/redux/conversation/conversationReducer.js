import {
    FETCH_CONVERSATION_START,
    FETCH_CONVERSATION_SUCCESS,
    FETCH_CONVERSATION_FAILURE,
    PUSH_CONVERSATION
} from "./conversationActionType"

const initialState = {
    list : [],
    isLoading : false,
    error : null
}

export const conversationReducer = (state = initialState, action) => {

    switch(action.type){
        
        case FETCH_CONVERSATION_START:
            return {
                ...state,
                isLoading : true,
                error : null
            }
        
        case FETCH_CONVERSATION_SUCCESS:

            const tempList = [ ...action.payload.conversationList]
            tempList.sort((prev, next) => next.lastedTime - prev.lastedTime) //sap giam dan
            return {
                ...state,
                isLoading : false,
                error : null,
                list : [...tempList]
            }

            case FETCH_CONVERSATION_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error : action.payload.error
                }
            
            case PUSH_CONVERSATION:
                console.log("called")
                
                const { newMessage } = action.payload
                const tempListPush = state.list
                if (newMessage.newFriend === undefined){    
                    const founds = []
                    for(let i in tempListPush){
                        if((tempListPush[i].contactedId === newMessage.senderId) || 
                            (tempListPush[i].contactedId === newMessage.receiverId)
                        ){
                            console.log("found: ", i, tempListPush[i])
                            founds.push( [i, tempListPush[i]] )
                        }
                    }
                    if(founds.length > 0){

                        console.log(founds[0][0])
                        console.log(founds[0][1])
                        const oldMessageIndex = founds[0][0]
                        const oldMessage = founds[0][1]
                        tempListPush.splice(oldMessageIndex, 1)
                        
                        tempListPush.unshift({
                            name : founds[0][1].name,
                            contactedId : founds[0][1].contactedId,
                            lastedMessage : newMessage.content,
                            lastedTime : newMessage.sentTime
                        })
    
                        console.log(`>0`)
                        return{
                            ...state,
                            list : [...tempListPush]
                        }
                    } else{
                        console.log(newMessage)
                        return {
                            ...state,
                            list : [newMessage, ...state.list]
                        }
                    }
                
                }
                
                else{
                    console.log("newFriend")
                    console.log(newMessage)
                    return {
                        ...state,
                        list: [newMessage, ...state.list]
                    }
                }

        default : return state

    }

}