import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { LOGIN } from "../../redux/login/loginActionType"

import { Link } from 'react-router-dom'
import './Login.scss'
function Login(props) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.login)

    const [content, setContent] = useState({
        username : "",
        password : ""
    })

    return (
        <div className="login-page">
            <div className="login-page__header">
                <h1>The best chat app in Viet Nam</h1>
            </div>
            <div className="login-page__body">

                <div className="login-form">
                    <div className="login-form__title">
                        <h2>Login now!</h2>
                    </div>
                    <div className="login-form__alert">
                        {state.errors.map((error, i) => (<p key={i}>{error.message}</p>))}
                    </div>
                    <div className="login-form__body">
                        <input 
                            type="text" 
                            placeholder="Username"
                            onChange={e => setContent({...content, username : e.target.value})}
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            onChange={e => setContent({...content, password : e.target.value})}
                        />
                        <button 
                            disabled={state.isLoading}
                            onClick={() => {
                                console.log(content)
                                dispatch({
                                    type : LOGIN,
                                    payload : content
                                })
                            }} 
                        >Login</button>
                    </div>
                    <div className="login-form__footer">
                        <Link 
                            style={{textDecoration:"none", color: "#0096C7"}}
                            to="/register"
                        >Have no account?</Link>
                    </div>
                </div>

            </div>
            <div className="login-page__footer">
                <p>
                    Developed by Le Anh Hao, Tran Bao Long, Nguyen Thuong Hai
                </p>
            </div>
        </div>
    );
}

export default Login;