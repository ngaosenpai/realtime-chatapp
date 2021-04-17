import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { REGISTER } from "../../redux/register/registerActionType"

import { Link } from 'react-router-dom'
import './Register.scss'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary, {Cloudinary} from 'cloudinary-core';
import axios from "axios";
function Register(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)
    
    const cloudinaryCore = new Cloudinary({cloud_name: 'longtrnn'});

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
        error: [],
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

    const uploadImages = () => {
        const formData = new FormData();
        formData.append("file", content.img);
        // preset in cloudinary
        formData.append("upload_preset", "ft50zk6z");

        axios.post("https://api.cloudinary.com/v2/longtrnn/image/upload", formData)
            .then(response => {
                console.log(response)
            })
    }

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

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!content.selectedImg) return;

        const data = new FormData();
        data.append('file', content.selectedImg, content.selectedImg.name);
        // data.append('file', content.img);

        axios.post("http://localhost:4000/images/upload/cloudinary", {
                data
            })
                .then(response => {

                    console.log("Uploading ")
                    console.log(response)
                    setContent(prev => {
                        return{
                            ...prev,
                            img: null,
                            previewImg: "",
                        }
                    })
                    return response
                })
        // const reader = new FileReader();
        // reader.readAsDataURL(content.selectedImg);
        // reader.onloadend = () => {
        //     // const finnish = await uploadImage(content.selectedImg);
        //     // const finnish = await uploadImage(reader.result);
        //     uploadImage(reader.result)
        //         .then(response => {
        //             console.log(`finnish uploadImage`)
        //             console.log(response)
        //         })
        // };
        // reader.onerror = () => {
        //     console.error('AHHHHHHHH!!');
        // };

    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            // call api here
            console.log("base64 ")
            console.log(base64EncodedImage)
            axios.post("http://localhost:4000/images/upload/cloudinary", {
                data: base64EncodedImage
            })
                .then(response => {

                    console.log("Uploading ")
                    console.log(response)
                    setContent(prev => {
                        return{
                            ...prev,
                            img: "",
                            previewImg: "",
                        }
                    })
                    return response
                })
        } catch (err) {
            console.error(err);
        }
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
                    </div>
                    <div className="register-form__body">
                        <form onSubmit={handleSubmitFile}>
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
                            <div>
                                <input 
                                    type="text"
                                    placeholder="Email"
                                    onChange={e => setContent({...content, email : e.target.value})}
                                />
                                {/* {content.img && 
                                    <Image 
                                        cloudName="longtrnn"
                                        publicId=""
                                    />
                                } */}
                                 <input
                                    id="fileInput"
                                    type="file"
                                    name="image"
                                    onChange={handleFileInputChange}
                                    value={content.img}
                                    className="form-input"
                                />
                                {content.previewImg && (
                                    <img
                                        src={content.previewImg}
                                        alt="Preview"
                                        style={{ height: '250px', margin: '0 auto 20px auto'}}
                                    />
                                )}
                                {/* <input 
                                    type="file"
                                    onChange={event => setContent(prev => {
                                        console.log(event.target.files[0])
                                        return{...prev, img: event.target.files[0]}})}
                                /> */}
                                
                                    {/* <img src={cloudinaryCore.url('sample')} alt="Cloudinary"/> */}
                                    {/* <img src={`https://res.cloudinary.com/longtrnn/image/upload/v1618579902/sample.jpg`} alt="Cloudinary"/> */}
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    onChange={e => setContent({...content, username : e.target.value})}
                                />
                                <div className="register-form__body--rows">
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        onChange={e => setContent({...content, password : e.target.value})}
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Confirm Password"
                                        onChange={e => setContent({...content, confirmPassword : e.target.value})}
                                    />
                                </div>
                            </div>
                            <button 
                                type="submit"
                                disabled={state.isLoading}
                                onClick={async (event) => {
                                    // const uploaded = await handleSubmitFile(event);
                                    // const {error, confirmPassword, ...submitContent} = content
                                    const data = new FormData();
                                    data.append("file", content.selectedImg)
                                    data.append("name", content.name)
                                    data.append("email", content.email)
                                    data.append("phone", content.phone)
                                    data.append("username", content.username)
                                    data.append("password", content.password)
                                    // console.log(`uploaded`)
                                    // console.log(uploaded)
                                    // if (false) {
                                        // console.log(submitContent)
                                        dispatch({
                                            type : REGISTER,
                                            payload : data
                                        })
                                    // }
                                    // else {console.log("Please submit image again")}
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