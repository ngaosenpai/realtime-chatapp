import React from 'react';
// import UserList from '../UserList/UserList';
// import UserItem from '../UserItem/UserItem'
import './Main.scss'

import LeftNav from '../LeftNav/LeftNav'
import RightMain from '../RightMain/RightMain';
function Main(props) {
    return (
        <div className="main">
            <LeftNav/>
            <RightMain /> 
        </div>
    );
}

export default Main;