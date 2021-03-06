import React from 'react';
import Moment from "react-moment";
import './UserItem.scss'

import { NavLink, } from 'react-router-dom'
function UserItem(props) {
    const { data } =  props 
    
    return (
        <NavLink 
            exact
            to={`/chat/${data.contactedId}`} 
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
                            {data.lastedTime && <Moment style={{color: "gray"}}fromNow>{new Date(data.lastedTime)}</Moment>}
                        </div>
                    </div>
                </div>

                <div className="user-item__right">
                    <img src={`https://picsum.photos/200`} alt=""/>
                </div>
            </div>
        </NavLink>
    );
}

export default UserItem;