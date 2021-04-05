import React, { useState, useEffect } from 'react';
import './LeftNav.scss'


import NavAccount from '../NavAccount/NavAccount';
import UserList from '../UserList/UserList'
function LeftNav(props) {

    const [height, setHeight] = useState("1000px")
    useEffect(() => {
        console.log(window.innerHeight)
        setHeight(`${window.innerHeight - 128}px`)
    }, [])

    return (
        <div className="left-nav">
            <NavAccount />
            <UserList height={height} />
        </div>
    );
}

export default LeftNav;