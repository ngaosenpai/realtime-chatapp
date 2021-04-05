import React from 'react';
import ChatMain from '../ChatMain/ChatMain';
import './RightMain.scss'
function RightMain(props) {
    return (
        <div className="right-main">
            {/* this wil contain routes: chat, search result, info user*/}
            <ChatMain />
        </div>
    );
}

export default RightMain;