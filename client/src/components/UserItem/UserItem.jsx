import React from 'react';
import './UserItem.scss'

import { Link, useRouteMatch } from 'react-router-dom'
function UserItem(props) {
    const { data } =  props 
    // const ellipsis = true
    // console.log(data)
    const { url } = useRouteMatch()
    return (
        <Link to={`${url}chat/${props.id}`} style={{textDecoration: 'none', color:'inherit'}}>
            <div className="user-item">
                
                <div className="user-item__left">
                    <img src={data.src} alt=""/>
                </div>

                <div className="user-item__center">
                    <div className="user-item__center__name">
                        <p>{data.name}</p>
                    </div>
                    <div className="user-item__center__content">
                        <div className="user-item__center__content__msg">
                            <p style={{minWidth:'150px', maxWidth: '150px', whiteSpace:'nowrap', overflow:"hidden", textOverflow:'ellipsis'}}>
                                {data.msg}
                            </p>
                        </div>
                    
                        <div className="user-item__center__content__time">
                            <p>{` -${data.time}`}</p>
                        </div>
                    </div>
                </div>

                <div className="user-item__right">
                    <img src={data.src} alt=""/>
                </div>
            </div>
        </Link>
    );
}

export default UserItem;