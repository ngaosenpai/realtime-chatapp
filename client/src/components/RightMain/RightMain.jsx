import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import ChatMain from '../ChatMain/ChatMain';
import './RightMain.scss'
function RightMain(props) {
    const { path, url } = useRouteMatch();
    console.log(path, url)
    return (
        <div className="right-main">
            {/* this wil contain routes: chat, search result, info user*/}
            <Switch>


                <Route exact path={`${path}chat`}>
                    <ChatMain />
                </Route>
                
                <Route exact path={`${path}user`}>
                    <p>User</p>
                </Route>
                <Route exact path={`${path}search`}>
                    <p>Search</p>
                </Route>

                <Route exact path={`${path}`}>
                    <p>Wellcome</p>
                </Route>
            </Switch>
        </div>
    );
}

export default RightMain;