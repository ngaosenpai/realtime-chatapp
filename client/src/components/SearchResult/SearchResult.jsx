import React, { useState } from 'react'
import SearchResultItem from '../SearchResultItem/SearchResultItem'
import './SearchResult.scss'

function SearchResult (props) {
    const searchResults = [
        {
            id: "0",
            name: "Long Trần",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "1",
            name: "Trần Long",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "2",
            name: "Trần Bảo Đại",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "3",
            name: "Trần Nghĩa",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "4",
            name: "Nguyễn Hải",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "5",
            name: "Hải Nguyễn",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "6",
            name: "Thượng Hải Nguyễn",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "6",
            name: "Hào Lê",
            img: "https://picsum.photos/200",
            description: "Friend"
        },
        
        {
            id: "7",
            name: "Lê Anh Hào",
            img: "https://picsum.photos/200",
            description: "Friend"
        }
    ]
    
    return (
        <div 
            className="search-result"
        >
            <p>Search Result</p>
            {
                searchResults.map(result => 
                    <SearchResultItem 
                        key={result.id}
                        id={result.id}
                        data={{
                            img: result.img,
                            name: result.name,
                            description: result.description,
                    }}/>
            )}
            <div className="search-result__see-more">
                <button>See More</button>
            </div>
        </div>
    )
}

export default SearchResult;