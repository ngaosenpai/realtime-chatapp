import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { FETCH_MESSAGES, SEND_MESSAGE } from "../../redux/messages/messagesActionType"


import { UnorderedListOutlined } from '@ant-design/icons'
import Message from "../Message/Message.jsx"
import './ChatMain.scss'
function ChatMain(props) {


    //test
    // const devId = '606836ab9158801258ac3498'
    // const adminId = '60688ba34507a14e9caf541a'
    const { shouldShowMenu, setShouldShowMenu } = props
    const {userId} = useParams()

    const currentMessages = useSelector(state => state.currentMessages)
    const session = useSelector(state => state.session)
    const list = useSelector(state => state.conversation.list)
    const targetUser = list.filter(item => item.contactedId === userId)

    const dispatch = useDispatch()

    const [content, setContent] = useState("")
    // const {path} = useRouteMatch
    console.log("url: ", userId)
    
    const refBtn = useRef(null)
    const refScroll = useRef(null)


    useEffect(() => {
        console.log("last log after send mess")
        const scrollDown = e => {
            const { scrollHeight } = refScroll.current
            refScroll.current.scrollTo(0, scrollHeight)
        } 
        scrollDown()
        setContent("")
    }, [currentMessages.messages])

    useEffect(() => {
        dispatch({
            type : FETCH_MESSAGES,
            payload : {
                senderId : session.user._id, 
                receiverId : userId,
                // skip : currentMessages.skip
            }
        })

        //
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                refBtn.current.click()
            }
        };

        document.addEventListener("keydown", listener);
        

        return () => {
            document.removeEventListener("keydown", listener);
            
        };
    }, [userId])

    

    return (
        <div className="chat-main">
            <div className="chat-main__header">
                <div className="chat-main__header__avatar">
                    <img src="https://picsum.photos/200" alt=""/>
                </div>
                <div className="chat-main__header__name">
                    <p>{targetUser[0].name} </p>
                </div>
                { !shouldShowMenu && <UnorderedListOutlined 
                    style={{zIndex:99}}
                    className="chat-main__header__icon-close" 
                    onClick={() => setShouldShowMenu(pre => {console.log(pre); return !pre})}
                
                />}
            </div>
            <div 
                className="chat-main__content" 
                style={{height: 'calc(100vh - 122px)'}}
                ref={refScroll}
            >
                {currentMessages.messages.map((message) => <Message 
                        key={message._id} 
                        style={{
                            alignSelf : message.senderId === session.user._id ? 'flex-end' : 'flex-start'
                        }}
                        content = {message.content}
                        time = {new Date(Date.parse(message.sentTime))}
                    />
                )}
                
            </div>
            <div className="chat-main__feature">
                <input 
                    type="text" 
                    placeholder="Type the messages here..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button
                    ref={refBtn}
                    onClick={() => {
                        dispatch({
                            type : SEND_MESSAGE,
                            payload : {
                                receiverId : userId,
                                content
                            }
                        })
                    }}
                >Send</button>
            </div>
        </div>
    );
}

export default ChatMain;