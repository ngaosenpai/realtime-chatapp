import React, { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import SearchResultItem from '../SearchResultItem/SearchResultItem'

import { SEARCH } from '../../redux/search/searchActionType'
import './SearchResult.scss'

function SearchResult (props) {
    
    const result = useSelector(state => state.searchResults) 
    const dispatch = useDispatch();

    const { search } = useParams();

    useEffect(()=> {
        dispatch({ type: SEARCH, payload: {search}})
    },[search])

    useEffect(()=> {
        console.log(`searching: ${search}`)
    },[])

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
                            img: "https://picsum.photos/200",
                            name: user.locals.name,
                            description: "Friend",
                    }}/>
            )}
            <div className="search-result__see-more">
                <button>See More</button>
            </div>
        </div>
    )
}

export default SearchResult;