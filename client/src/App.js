import React, { useEffect } from 'react'

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { KEEP_SESSION } from "./saga/authSessionSaga"

import Main from './components/Main/Main.jsx'
import Login from './components/Login/Login.jsx'

import PrivateRoute from './components/Route/PrivateRoute.jsx'
import PublicRoute from './components/Route/PublicRoute.jsx'

import Register from './components/Register/Register.jsx'


function App() {

  const jwt = useSelector(state => state.jwt)
  const user = useSelector(state => state.session)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch({type : KEEP_SESSION})

  }, [])

  useEffect(() => {
    console.log('re-render')
    console.log(jwt)
    console.log(user)
  })

  return (
    <div className="App">
      <Router>
        <Switch >
          <PublicRoute exact path="/login" component={Login} />
          
          <PublicRoute exact path="/register" component={Register} />
          
          <PrivateRoute path="/" component={ Main } />
          {/* <Route path="/" component={ Main } /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
