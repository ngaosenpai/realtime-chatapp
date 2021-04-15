import React from 'react';
import './LeftNav.scss'


import NavAccount from '../NavAccount/NavAccount';
import UserList from '../UserList/UserList'
function LeftNav(props) {
    let {
        style,
        shouldShowMenu,
        setShouldShowMenu,
    } = props;
    
    return (
        <div className="left-nav" style={style}>
            <NavAccount 
                setShouldShowMenu={setShouldShowMenu} 
            />
            <UserList 
                setShouldShowMenu={setShouldShowMenu}
            />
        </div>
    );
}

export default LeftNav;