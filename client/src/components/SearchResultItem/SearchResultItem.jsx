import React, { useEffect } from 'react';
import {MessageOutlined} from '@ant-design/icons'
import { Link,  } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import './SearchResultItem.scss'
import axios from 'axios';
import { PUSH_CONVERSATION } from '../../redux/conversation/conversationActionType'
function SearchResultItem(props) {
    const { data } =  props 
    const store = useSelector(state => state)
    const dispatch = useDispatch();
    const handlerClick = () => {
        const header = {
            headers: {
                'Authorization': `Bearer ${store.jwt.token}` 
            }
        }

        axios.post("http://localhost:4000/conversation/make", {
            userId: store.session.user, 
            targetId: data.id 
        }, header)
            .then((response) => {
                let {user, targetUser} = response.data
                if (![user, targetUser].every(Boolean)) {
                    if (user !== null && targetUser !== null) {
                        dispatch({
                            type : PUSH_CONVERSATION,
                            payload : {
                                newMessage: {
                                    name: user.locals.name,
                                    contactedId: targetUser._id,
                                    content: "",
                                    sentTime: Date().now,
                                    newFriend: true,
                                }
                            }
                        })
                    }
                    else{
                        dispatch({
                            type: PUSH_CONVERSATION,
                            payload: {
                                newMessage: {
                                    contactedId: data.id,
                                    sentTime: Date().now,
                                    newFriend: false,
                                }
                            }
                        })
                    }
                }
            })
    }
    return (
        <div className="search-result-item">
            <div className="search-result-item__left">
                <img src={data.img} alt="Image of search result item"/>
            </div>
            <div className="search-result-item__center">
                <div className="search-result-item__center__name">
                    <p>{`${data.name} ${data.id}`}</p>
                </div>
                <div className="search-result-item__center__content">
                    <div className="search-result-item__center__content__info">
                        <p style={{minWidth:'150px', maxWidth: '150px', whiteSpace:'nowrap', overflow:"hidden", textOverflow:'ellipsis'}}>
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="search-result-item__right">
                <button
                    onClick={handlerClick}
                >
                    <MessageOutlined />
                    Message
                </button>        
            </div>
        </div>
    );
}

export default SearchResultItem;