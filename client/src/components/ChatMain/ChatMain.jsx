import React from 'react';
import './ChatMain.scss'
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
    return (
        <div className="chat-main">
            <div className="chat-main__header">
                <div className="chat-main__header__avatar">
                    <img src="https://picsum.photos/200" alt=""/>
                </div>
                <div className="chat-main__header__name">
                    <p>A user</p>
                </div>
            </div>
            <div className="chat-main__content" style={{height: 'calc(100vh - 200px)'}}>
                {chats.map((chat, i) => <p style={{
                    alignSelf : i%2==0? 'flex-start' : 'flex-end'
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