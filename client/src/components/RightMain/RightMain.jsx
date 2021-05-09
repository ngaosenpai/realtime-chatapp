import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import {
    Switch,
    Route,
    useRouteMatch,
    useLocation
  } from "react-router-dom";

import { UnorderedListOutlined } from '@ant-design/icons'

import ChatMain from '../ChatMain/ChatMain';
import LeftNav from '../LeftNav/LeftNav'
import SearchResult from '../SearchResult/SearchResult'
import Profile from '../Profile/Profile'
import './RightMain.scss'
function RightMain(props) {

    const [shouldShowMenu, setShouldShowMenu] = useState(true)
    const { user } = useSelector(state => state.session)

    return (
        <div className="right-main">
            {/* this contain the Left nav for mobile device */}
            <div className="right-main__menu-mobile">
                {shouldShowMenu && <LeftNav style={{display: 'block'}} setShouldShowMenu={setShouldShowMenu} shouldShowMenu={shouldShowMenu}/>}
            </div>
            {/* this wil contain routes: chat, search result, info user*/}
            <Switch>
                <Route  path={`/chat/:targetId`}>
                    { <ChatMain shouldShowMenu={shouldShowMenu} setShouldShowMenu={setShouldShowMenu}/>}
                </Route>
                
                <Route exact path={`/user`}>
                    <Profile/>
                </Route>
                <Route path={`/search/:search`}>
                    <SearchResult/>
                </Route>
                <Route exact path={`/`}>
                    <div className="wellcome" >
                        <div className="wellcome__header">
                        {   !shouldShowMenu &&
                            <div 
                                style={{zIndex: "100"}}
                                className="wellcome__header__icon-close" 
                                onClick={() => setShouldShowMenu(pre => {console.log(pre); return !pre})}
                            >
                                <UnorderedListOutlined />
                            </div>
                        }
                        </div>
                        <div className="wellcome__body">
                            {user.name} ơi! Bạn bè đang đợi đấy!
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default RightMain;