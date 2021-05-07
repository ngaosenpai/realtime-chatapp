import React, { useState, useEffect, } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import SearchResultItem from '../SearchResultItem/SearchResultItem'

import { SEARCH } from '../../redux/search/searchActionType'
import './SearchResult.scss'

function SearchResult (props) {
    
    const result = useSelector(state => state.searchResults) 
    const { user: currentUser } = useSelector(state => state.session) 
    const dispatch = useDispatch();
    const { search } = useParams();

    useEffect(()=> {
        dispatch({ type: SEARCH, payload: {search}})
    },[search])

    return (
        <div 
            className="search-result"
        >
            <p>Search Result</p>
            {
                result.data.map(user => 
                    <SearchResultItem 
                        key={user._id}
                        data={{
                            id: user._id,
                            img: user.locals.image || "https://picsum.photos/100",
                            name: user.locals.name,
                            description: user.contact.includes(currentUser)? "Friend": "Not in Contact",
                        }}/>
            )}
            <div className="search-result__see-more">
                <Link to="/">
                    <button>Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default SearchResult;