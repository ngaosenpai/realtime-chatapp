import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { FETCH_CONVERSATION } from "../../redux/conversation/conversationActionType"

import UserItem from '../UserItem/UserItem';

import './UserList.scss'

function UserList(props) {

    const dispatch = useDispatch()
    const { setShouldShowMenu } = props

    const conversationList = useSelector(state => state.conversation.list)

    useEffect(() => {
        dispatch({ type : FETCH_CONVERSATION })
    }, [])

    return (
        <div 
            className="user-list" 
            style={{height: 'calc(100vh - 128px)'}}
            onClick={() => {
                if(setShouldShowMenu !== undefined)
                    return setShouldShowMenu(pre => !pre)
                else return undefined
            }} 
        >
            {

                conversationList.map((item, i) => 
                    {console.log(item); return  <UserItem 
                        key={i} 
                        id={i} 
                        data={item} 
                    />}
                )
            }
        </div>
    );
}

export default UserList;