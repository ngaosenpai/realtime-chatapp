import React from 'react';
import './UserItem.scss'

function UserItem(props) {
    const { data } =  props 
    // console.log(data)
    return (
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
                        <p>{data.msg}</p>
                    </div>
                
                    <div className="user-item__center__content__time">
                        <p>- {data.time}</p>
                    </div>
                </div>
            </div>

            <div className="user-item__right">
                <img src={data.src} alt=""/>
            </div>
        </div>
    );
}

export default UserItem;