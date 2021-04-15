import React, { useState }from 'react';
import { useSelector, useDispatch } from 'react-redux'

import SearchResult from '../SearchResult/SearchResult'
import './SearchConversation.scss'

function SearchConversation (props) {
    let searchResults = useSelector(state => state.searchResults)
    console.log(`searchResults`)
    console.log(searchResults)
    
    let [isSearchForcused, setIsSearchForcused] = useState(false)

    const submitSearch = (event) => {
        if (event.keyCode === 13 && event.target.value !== "") {
            console.log(event.target.value)

        }
    }

    return (
        <div>
            <div className="search-conversation">
                    <input 
                        type="text" 
                        placeholder='Find new friends...'
                        onKeyUp= {submitSearch}
                        onFocus= {() => setIsSearchForcused(prev => !prev)}
                        onBlur= {() => setIsSearchForcused(prev => !prev)}
                    />
                    {!isSearchForcused&& <button>search</button>}
            </div>
        </div>
    )
}

export default SearchConversation;