import React, { useState } from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import ChatMain from '../ChatMain/ChatMain';
import LeftNav from '../LeftNav/LeftNav'
import SearchResult from '../SearchResult/SearchResult'
import Profile from '../Profile/Profile'
import './RightMain.scss'
function RightMain(props) {
    const { path, url } = useRouteMatch();

    const [shouldShowMenu, setShouldShowMenu] = useState(false)
    
    
    return (
        <div className="right-main">
            {/* this contain the Left nav for mobile device */}
            <div className="right-main__menu-mobile">
                {shouldShowMenu && <LeftNav style={{display: 'block'}} setShouldShowMenu={setShouldShowMenu} shouldShowMenu={shouldShowMenu}/>}
            </div>
            {/* this wil contain routes: chat, search result, info user*/}
            <Switch>


                <Route  path={`${path}chat/:userId`}>
                    { <ChatMain shouldShowMenu={shouldShowMenu} setShouldShowMenu={setShouldShowMenu}/>}
                </Route>
                
                <Route exact path={`${path}user`}>
                    <Profile/>
                </Route>
                <Route exact path={`${path}search`}>
                    <SearchResult 
                        // showSearchResult={showSearchResult} 
                        // setShowSearchResult={setShowSearchResult}
                    />
                </Route>
                <Route exact path={`${path}`}>
                    <p>Wellcome</p>
                </Route>
            </Switch>
        </div>
    );
}

export default RightMain;