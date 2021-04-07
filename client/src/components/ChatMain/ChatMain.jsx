import React from 'react';
import './ChatMain.scss'

import { UnorderedListOutlined } from '@ant-design/icons'
import { useParams, useRouteMatch } from 'react-router-dom'

function ChatMain(props) {
    const chats = [
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        {content:"asasasas asdas shja asdas asd asd asdas d"},
        
    ]

    const { shouldShowMenu, setShouldShowMenu } = props
    const {userId} = useParams()
    // const {path} = useRouteMatch
    console.log(userId)
    return (
        <div className="chat-main">
            <div className="chat-main__header">
                <div className="chat-main__header__avatar">
                    <img src="https://picsum.photos/200" alt=""/>
                </div>
                <div className="chat-main__header__name">
                    <p>A user {userId} </p>
                </div>
                { !shouldShowMenu && <UnorderedListOutlined 
                    style={{zIndex:99}}
                    className="chat-main__header__icon-close" 
                    onClick={() => setShouldShowMenu(pre => {console.log(pre); return !pre})}
                
                />}
            </div>
            <div className="chat-main__content" style={{height: 'calc(100vh - 122px)'}}>
                {chats.map((chat, i) => <p key={i} style={{
                    alignSelf : i%2===0? 'flex-start' : 'flex-end'
                }}>{chat.content}</p>)}
            </div>
            <div className="chat-main__feature">
                <input type="text" placeholder="Type the messages here..."/>
                <button>Send</button>
            </div>
        </div>
    );
}

export default ChatMain;