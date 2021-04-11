import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PublicRoute({ component: Component, ...rest }) {
    const {jwt, session} = useSelector(state => ({jwt : state.jwt, session : state.session}))
    console.log("public route log: ", jwt, session)
    return (
        <Route {...rest}>
            {
                (jwt.token !== null && session.user !== null) ? 
                <Redirect to="/" /> : <Component/>
            }
        </Route>
    );
}

export default PublicRoute;