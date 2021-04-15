import React from 'react';
import './UserItem.scss'

import { NavLink, useRouteMatch } from 'react-router-dom'
function UserItem(props) {
    const { data } =  props 
    // const ellipsis = true
    // console.log(data)
    const { url } = useRouteMatch()
    return (
        <NavLink 
            exact
            to={`${url}chat/${data.contactedId}`} 
            style={{textDecoration: 'none', color:'inherit'}}
            activeStyle={{backgroundColor : "#3a3b3c"}}
        >
            <div className="user-item">
                
                <div className="user-item__left">
                    <img src={"https://picsum.photos/200"} alt=""/>
                </div>

                <div className="user-item__center">
                    <div className="user-item__center__name">
                        <p>{`${data.name}`}</p>
                    </div>
                    <div className="user-item__center__content">
                        <div className="user-item__center__content__msg">
                            <p style={{minWidth:'150px', maxWidth: '150px', whiteSpace:'nowrap', overflow:"hidden", textOverflow:'ellipsis'}}>
                                {data.lastedMessage}
                            </p>
                        </div>
                    
                        <div className="user-item__center__content__time">
                            <p>{` -${0}`}</p>
                        </div>
                    </div>
                </div>

                <div className="user-item__right">

                    {/* <img src={data.src} alt=""/> */}
                    {/* <img src={data.seen} alt=""/> */}
                    <img src={`https://picsum.photos/200`} alt=""/>


                </div>
            </div>
        </NavLink>
    );
}

export default UserItem;