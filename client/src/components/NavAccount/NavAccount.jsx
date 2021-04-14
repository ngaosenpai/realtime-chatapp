import React from 'react';
import { useSelector } from "react-redux"

import './NavAccount.scss'
import { CloseOutlined } from '@ant-design/icons';

function NavAccount(props) {
    const user = useSelector(state => state.session.user)
    return (
        <div className="nav-account">
            <div className="nav-account__user">
                <img src="https://picsum.photos/200" alt=""/>
                <p>{`Chào ${user.name}!`}</p>
                <CloseOutlined className="nav-account__user__icon-close"
                    onClick={() => props.setShouldShowMenu(pre => !pre)}
                />
            </div>
            <div className="nav-account__search">
                <input type="text" placeholder='Find new friends...'/>
                <button>search</button>
            </div>
        </div>
    );
}

export default NavAccount;