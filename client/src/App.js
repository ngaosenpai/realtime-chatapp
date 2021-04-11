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
import Register from './components/Register/Register.jsx'

function App() {

  const jwt = useSelector(state => state.jwt)
  const user = useSelector(state => state.session)
  const dispatch = useDispatch()
  useEffect(() => {
    //get token from localstorage
    // dispatch({
    //   type : KEEP_SESSION
    // })
    //get user infor from api, use jwt above
    //...


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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
