import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { FETCH_MESSAGES } from "../../redux/messages/messagesActionType"

import { UnorderedListOutlined } from '@ant-design/icons'
import './ChatMain.scss'
function ChatMain(props) {
    // const chats = [
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
    //     {content:"asasasas asdas shja asdas asd asd asdas d"},
        
    // ]

    //test
    const devId = '606836ab9158801258ac3498'
    const adminId = '60688ba34507a14e9caf541a'

    const { shouldShowMenu, setShouldShowMenu } = props
    const {userId} = useParams()
    const currentMessages = useSelector(state => state.currentMessages)
    const session = useSelector(state => state.session)
    const dispatch = useDispatch()

    // const {path} = useRouteMatch
    console.log(userId)
    
    useEffect(() => {
        dispatch({
            type : FETCH_MESSAGES,
            payload : {
                // senderId : session.user._id, 
                // receiverId : userId,

                //test
                senderId : adminId,
                receiverId : devId,
                skip : currentMessages.skip
            }
        })
    }, [userId])

    return (
        <div className="chat-main">
            <div className="chat-main__header">
                <div className="chat-main__header__avatar">
                    <img src="https://picsum.photos/200" alt=""/>
                </div>
                <div className="chat-main__header__name">
                    <p>A user {currentMessages.receiverId} </p>
                </div>
                { !shouldShowMenu && <UnorderedListOutlined 
                    style={{zIndex:99}}
                    className="chat-main__header__icon-close" 
                    onClick={() => setShouldShowMenu(pre => {console.log(pre); return !pre})}
                
                />}
            </div>
            <div className="chat-main__content" style={{height: 'calc(100vh - 122px)'}}>
                {currentMessages.messages.map((message) => <p key={message._id} style={{
                    alignSelf : message.senderId === adminId ? 'flex-start' : 'flex-end'
                }}>{message.content}</p>)}
            </div>
            <div className="chat-main__feature">
                <input type="text" placeholder="Type the messages here..."/>
                <button>Send</button>
            </div>
        </div>
    );
}

export default ChatMain;