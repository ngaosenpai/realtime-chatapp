import React from 'react';
import './LeftNav.scss'


import NavAccount from '../NavAccount/NavAccount';
import UserList from '../UserList/UserList'
function LeftNav(props) {


    return (
        <div className="left-nav">
            <NavAccount />
            <UserList />
        </div>
    );
}

export default LeftNav;