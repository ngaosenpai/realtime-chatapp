import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {
    const {jwt, session} = useSelector(state => ({jwt : state.jwt, session : state.session}))
    console.log("private route log: ", jwt, session)
    return (
        <Route {...rest}>
            {
                (jwt.token !== null && session.user !== null) ? 
                <Component/> : <Redirect to="/login" />
            }
        </Route>
    );
}

export default PrivateRoute;