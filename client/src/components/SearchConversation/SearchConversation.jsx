import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useRouteMatch, Link, useLocation } from 'react-router-dom'
import SearchResult from '../SearchResult/SearchResult'
import './SearchConversation.scss'

function SearchConversation (props) {

    const [content, setContent ] = useState("") 
    const submitSearch = (event) => {
        if (event.keyCode === 13 && event.target.value !== "") {
            console.log(event.target.value)
            
        }
    }
    let query =  new URLSearchParams(useLocation().search);

    const {path, url} = useRouteMatch();
    return (
        <div className="search-conversation">
            <input 
                type="text" 
                placeholder='Find new friends...'
                onKeyUp= {submitSearch}
                onChange={e => setContent(e.target.value)}
            />
            <Link
                to={`${url}search/${content}`}
            >
                <button>
                    Search
                </button>
            </Link>
            {/* <SearchResult/> */}
        </div>

    )
}

export default SearchConversation;