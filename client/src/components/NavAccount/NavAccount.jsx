import React, { useEffect } from 'react';
import { useSelector } from "react-redux"

import './NavAccount.scss'
import SearchConversation from '../SearchConversation/SearchConversation'
import { CloseOutlined } from '@ant-design/icons';

function NavAccount(props) {
    const user = useSelector(state => state.session.user)
    useEffect(() =>{
        console.log(`user`)
        console.log(user)
    }, [])
    return (
        <div className="nav-account">
            <div className="nav-account__user">
                <img src="https://picsum.photos/200" alt=""/>
                <p>{`Chào ${user.name}!`}</p>
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