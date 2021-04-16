import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
    useLocation
  } from "react-router-dom";

import ChatMain from '../ChatMain/ChatMain';
import LeftNav from '../LeftNav/LeftNav'
import SearchResult from '../SearchResult/SearchResult'
import Profile from '../Profile/Profile'
import './RightMain.scss'
function RightMain(props) {

    const [shouldShowMenu, setShouldShowMenu] = useState(false)
    
    return (
        <div className="right-main">
            {/* this contain the Left nav for mobile device */}
            <div className="right-main__menu-mobile">
                {shouldShowMenu && <LeftNav style={{display: 'block'}} setShouldShowMenu={setShouldShowMenu} shouldShowMenu={shouldShowMenu}/>}
            </div>
            {/* this wil contain routes: chat, search result, info user*/}
            <Switch>
                <Route  path={`/chat/:userId`}>
                    { <ChatMain shouldShowMenu={shouldShowMenu} setShouldShowMenu={setShouldShowMenu}/>}
                </Route>
                
                <Route exact path={`/user`}>
                    <Profile/>
                </Route>
                <Route path={`/search/:search`}>
                    <SearchResult/>
                </Route>
                <Route exact path={`/`}>
                    <p>Wellcome</p>
                </Route>
            </Switch>
        </div>
    );
}

export default RightMain;