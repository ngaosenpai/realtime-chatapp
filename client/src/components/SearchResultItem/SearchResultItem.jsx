import React, { useEffect,useState } from 'react';
import {MessageOutlined} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import './SearchResultItem.scss'
import axios from 'axios';
import { PUSH_CONVERSATION, MAKE_CONVERSATION } from '../../redux/conversation/conversationActionType'
function SearchResultItem(props) {
    const { data } =  props 
    const store = useSelector(state => state)
    const dispatch = useDispatch();
    const [click, setClick] = useState(false)
    const history = useHistory();
    const handlerClick = () => {
        if (data.id !== store.session.user._id) {
            setClick((prev) =>!prev)
            dispatch({ 
                type:   MAKE_CONVERSATION,
                payload: {
                    targetId: data.id
                }
            })
        }
    }
    function isFirst(id, list) {
        return list[0].contactedId === id;
    }
    useEffect(() => {
        if (store.conversation.list.length !== 0) {
            if (click && isFirst(data.id, store.conversation.list)) {
                history.push(`/chat/${data.id}`)
            }
        }
    },[store.conversation.list, click])
    return (
        <div className="search-result-item">
            <div className="search-result-item__left">
                <img src={data.img} alt="Search result"/>
            </div>
            <div className="search-result-item__center">
                <div className="search-result-item__center__name">
                    <p>{`${data.name}`}</p>
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
                {/* <Link
                    to={`/chat/${data.id}`}
                > */}
                    <button
                        onClick={handlerClick}
                    >
                        <MessageOutlined />
                        Message
                    </button>        
                {/* </Link> */}

            </div>
        </div>
    );
}

export default SearchResultItem;