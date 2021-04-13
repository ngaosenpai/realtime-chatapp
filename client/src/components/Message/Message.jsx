import React from 'react';

import './Message.scss'
function Message(props) {
    return (
        <div {...props} className="message">
            <div className="message__content">
                {props.content}
            </div>
            <div className="message__time">
                {props.time.toUTCString()}
            </div>
        </div>
    );
}

export default Message;