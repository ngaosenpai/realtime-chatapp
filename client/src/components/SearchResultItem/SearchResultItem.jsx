import React from 'react';
import {MessageOutlined} from '@ant-design/icons'
import { Link, useRouteMatch } from 'react-router-dom'
import './SearchResultItem.scss'
function SearchResultItem(props) {
    const { data } =  props 
    // const ellipsis = true
    // console.log(data)
    const { url } = useRouteMatch()
    return (
        <Link to={`chat/${props.id}`} style={{textDecoration: 'none', color:'inherit'}}>
            <div className="search-result-item">
                <div className="search-result-item__left">
                    <img src={data.img} alt="Image of search result item"/>
                </div>
                <div className="search-result-item__center">
                    <div className="search-result-item__center__name">
                        <p>{`${data.name} ${props.id}`}</p>
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
                    <button>
                        <MessageOutlined />
                        Message
                    </button>        
                </div>
            </div>
        </Link>
    );
}

export default SearchResultItem;