import { StarTwoTone } from "@ant-design/icons"
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

            const tempList = [...state.list, ...action.payload.conversationList]
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
                /**
                 * content: "dasdasdasd"
                    receiverId: "60767e80fbfe464214574e96"
                    senderId: "60688ba34507a14e9caf541a"
                    sentTime: "2021-04-14T15:46:52.511Z"
                 */

                /**
                 * {
                        "name": "Dev",
                        "contactedId": "606836ab9158801258ac3498",
                        "lastedMessage": "sadf",
                        "lastedTime": "2021-04-14T08:32:31.676Z"
                    }
                    */
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
        
            
                console.log(founds[0][0])
                console.log(founds[0][1])
                const oldMessageIndex = founds[0][0]
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
            }
            else if(newMessage.newFriend === false) {
                const founds = []
                for(let i in tempListPush){
                    if((tempListPush[i].contactedId === newMessage.contactedId)
                    ){
                        console.log("found: ", i, tempListPush[i])
                        founds.push( [i, tempListPush[i]] )
                    }
                }
                
                console.log(founds[0][0])
                console.log(founds[0][1])
                const oldMessageIndex = founds[0][0]
                const oldMessage = founds[0][1]
                tempListPush.splice(oldMessageIndex, 1)
                
                tempListPush.unshift({
                    ...newMessage,
                    name: oldMessage.name,
                    content: oldMessage.content,
                    
                })

                console.log(`>0`)
                return{
                    ...state,
                    list : [...tempListPush]
                }
            }
            else{
                return {
                    ...state,
                    list: [newMessage, ...state.list]
                }
            }

        default : return state

    }

}