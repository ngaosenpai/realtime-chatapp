import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { REGISTER } from "../../redux/register/registerActionType"

import { Link } from 'react-router-dom'
import './Register.scss'
function Register(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)
    
    const [content, setContent] = useState({
        name: "",
        email: "",
        phone: "",
        username : "",
        password : "",
        confirmPassword : "",
        img: null,
        selectedImg: null,
        previewImg: "",
        error: null
    })

    const validator = () => {
        // const listInvalid = content.filter(field => field === "")
        // console.log(listInvalid)
        // content.useState(previousState => ({...previousState, error: previousState.error.push("")}))
        let errorMessage = "";
        const { name, email, phone, img, selectedImg, username, password, confirmPassword} = content;
        if (name === "") {
            errorMessage = "Vui lòng nhập tên"
        }
        else if (phone === "") {
            errorMessage = "Vui lòng nhập số điện thoại"
            
        }
        else if (isNaN(phone) && phone !== "") {
            errorMessage = "Vui lòng nhập số điện thoại hợp lệ"
            
        }
        else if (!isNaN(phone) && phone.length <= 8 || phone.length > 12) {
            errorMessage = "Vui lòng nhập đúng số điện thoại"
            
        }
        else if (email === "") {
            errorMessage = "Vui lòng nhập email"
            
        }
        else if (!validateEmail(email)) {
            errorMessage = "Vui lòng nhập đúng định dạng email"
            
        }
        else if (!img && !selectedImg) {
            errorMessage = "Vui lòng chọn ảnh đại diện"
            
        }
        else if (username === "") {
            errorMessage = "Vui lòng nhập tên đăng nhập"
            
        }
        else if (password === "") {
            errorMessage = "Vui lòng nhập mật khẩu"
            
        }
        else if (confirmPassword === "") {
            errorMessage = "Vui lòng nhập mật khẩu xác nhận"
            
        }
        else if (!(password == confirmPassword)) {
            errorMessage = "Vui lòng nhập mật khẩu trùng mới mật khẩu xác nhận"
            
        }
        else {
            errorMessage = ""
            setContent(prev => {
                return {
                    ...prev,
                    error: null
                }
            })
            return true;
        }

        if (errorMessage !== "") {
            setContent(prev => {
                return {
                    ...prev,
                    error: errorMessage
                }
            })
            return false
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    useEffect(()=> {
        console.log(content.confirmPassword)
        console.log(content.error)
    },[content])
    
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setContent(prev => { 
            return{
                ...prev,
                selectedImg: file,
                img: e.target.value,
            }
        })
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setContent(prev => {
                return{
                    ...prev,
                    previewImg: reader.result
                }
            })
        };
    };

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
                        {state.errors.map((error, i) => (<p key={i}>{error.message}</p>))}
                        {content.error !== null && <p> {content.error}</p>}
                    </div>
                    <div className="register-form__announce">
                        {content.error === null && state.finnish && <p> Đăng kí thành công</p>}
                    </div>
                    <div className="register-form__body">
                        <form onSubmit={event => event.preventDefault()}>
                            <div className="register-form__body--rows">
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    onChange={e => setContent(prev => {return{...prev, name : e.target.value}})}
                                    />
                                <input 
                                    type="text"
                                    placeholder="Phone number"
                                    onChange={e => setContent(prev => {return{...prev, phone : e.target.value}})}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    placeholder="Email"
                                    onChange={e => setContent(prev => {return{...prev, email : e.target.value}})}
                                />
                                 <input
                                    id="fileInput"
                                    type="file"
                                    name="image"
                                    onChange={handleFileInputChange}
                                    value={content.img}
                                    className="register-form__body__img-uploader"
                                />
                                {content.previewImg && (
                                    <img
                                        className="register-form__body__img-uploader__img"
                                        src={content.previewImg}
                                        alt="Preview"
                                        style={{ height: '250px', margin: '0 auto 20px auto', width: "100%", objectFit: "cover" }}
                                    />
                                )}
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    onChange={e => setContent(prev => {return{...prev, username : e.target.value}})}
                                />
                                <div className="register-form__body--rows">
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        onChange={e => setContent(prev => {return{...prev, password : e.target.value}})}
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Confirm Password"
                                        onChange={e => setContent(prev => {return{...prev, confirmPassword : e.target.value}})}
                                    />
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={state.isLoading}
                                onClick={async () => {
                                    const isValid = validator()
                                    if (isValid) {
                                        
                                        const data = new FormData();
                                        data.append("file", content.selectedImg)
                                        data.append("name", content.name)
                                        data.append("email", content.email)
                                        data.append("phone", content.phone)
                                        data.append("username", content.username)
                                        data.append("password", content.password)
                                        dispatch({
                                            type : REGISTER,
                                            payload : data
                                        })
                                    }

                                }} 
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