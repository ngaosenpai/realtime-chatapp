import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { REGISTER } from "../../redux/register/registerActionType"

import { Link } from 'react-router-dom'
import './Register.scss'
function Register(props) {
    const dispatch = useDispatch()
    // const state = useSelector(state => state.login)

    const [content, setContent] = useState({
        name: "",
        email: "",
        phone: "",
        username : "",
        password : "",
        confirmPassword : "",
        error: []
    })

    const validator = (content) => {
        // const listInvalid = content.filter(field => field === "")
        // console.log(listInvalid)
        // content.useState(previousState => ({...previousState, error: previousState.error.push("")}))
        // const { name, email, phone, username, password, confirmPassword} = content;
        // if (![ name, email, phone, username, password, confirmPassword ].every(Boolean)) {
        // }
    }

    useEffect(() => {
        validator();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const valid = validator(content)
        console.log(content)
    }

    return (
        <div className="register-page">
            <div className="register-page__header">
                <h1>The best chat app in Viet Nam</h1>
            </div>
            <div className="register-page__body">

                <div className="register-form">
                    <div className="register-form__title">
                        <h2>You're new here!</h2>
                    </div>
                    <div className="register-form__alert">
                        {/* {state.errors.map((error, i) => (<p key={i}>{error.message}</p>))} */}
                    </div>
                    <div className="register-form__body">
                        <form onSubmit={handleSubmit}>
                            <div className="register-form__body--rows">
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    onChange={e => setContent({...content, name : e.target.value})}
                                    />
                                <input 
                                    type="text"
                                    placeholder="Phone number"
                                    onChange={e => setContent({...content, phone : e.target.value})}
                                />
                            </div>
                            <input 
                                type="text"
                                placeholder="Email"
                                onChange={e => setContent({...content, email : e.target.value})}
                            />
                            <input 
                                    className="input--alert"
                                    type="text" 
                                placeholder="Username"
                                onChange={e => setContent({...content, username : e.target.value})}
                            />
                            <div className="register-form__body--rows">
                                <input 
                                    className="input--alert"
                                    type="password" 
                                    placeholder="Password"
                                    onChange={e => setContent({...content, password : e.target.value})}
                                />
                                <input 
                                    className="input--alert"
                                    type="password" 
                                    placeholder="Confirm Password"
                                    onChange={e => setContent({...content, confirmPassword : e.target.value})}
                                />
                            </div>
                            <button 
                                // disabled={state.isLoading}
                                // onClick={() => {
                                //     console.log(content)
                                //     dispatch({
                                //         type : REGISTER,
                                //         payload : content
                                //     })
                                // }} 
                            >Register</button>
                        </form>
                    </div>
                    <div className="register-form__footer">
                        <Link 
                            style={{textDecoration:"none", color: "#0096C7"}}
                            to="/login"
                        >Already have an account?</Link>
                    </div>
                </div>

            </div>
            <div className="register-page__footer">
                <p>
                    Developed by Le Anh Hao, Tran Bao Long, Nguyen Thuong Hai
                </p>
            </div>
        </div>
    );
}

export default Register;