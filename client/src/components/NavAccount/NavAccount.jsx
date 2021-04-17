import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {useHistory} from "react-router-dom"
import './NavAccount.scss'
import SearchConversation from '../SearchConversation/SearchConversation'
import { CloseOutlined } from '@ant-design/icons';
import {CLEAR_JWT} from "../../redux/auth/authActionType"
function NavAccount(props) {
    const user = useSelector(state => state.session.user)
    const jwt = useSelector(state => state.jwt)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() =>{
        console.log(`user`)
        console.log(user)
        if (!jwt.token) {
            history.push("/login")
        }
    }, [jwt])
    return (
        <div className="nav-account">
            <div className="nav-account__user">
                <img src={user.image} alt="Avatar user"/>
                <p>{`Chào ${user.name}!`}</p>
                <button
                    onClick={()=>{
                        dispatch({
                            type: CLEAR_JWT
                        })
                    }}
                > Logout</button>
                <CloseOutlined className="nav-account__user__icon-close"
                    onClick={() => props.setShouldShowMenu(pre => !pre)}
                />
            </div>
            <SearchConversation />
            {/* <div className="nav-account__search">
                <input 
                    type="text" 
                    placeholder='Find new friends...'

                />
                <button>search</button>
            </div> */}
        </div>
    );
}

export default NavAccount;