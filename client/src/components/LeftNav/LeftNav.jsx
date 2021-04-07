import React from 'react';
import './LeftNav.scss'


import NavAccount from '../NavAccount/NavAccount';
import UserList from '../UserList/UserList'
function LeftNav(props) {


    return (
        <div className="left-nav" style={props.style}>
            <NavAccount setShouldShowMenu={props.setShouldShowMenu} />
            <UserList setShouldShowMenu={props.setShouldShowMenu}/>
        </div>
    );
}

export default LeftNav;