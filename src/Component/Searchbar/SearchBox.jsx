import React, { useState } from 'react';
import './Searchbox.css'
import SuggestionBox from './SuggestionBox'

const SearchBox = ({ Svg, placeholder, data }) => {

    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)


    return (
        <>
            <div className='w-100 d-grid flex-column position-relative'>
                <div className="search-container mx-auto">
                    {/* {Svg} */}
                    {/* if Svg exist then render it else not */}
                    {Svg}
                    <input
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        className="search-box-input ps-0"
                        placeholder="Search Tasks..."
                    />
                </div>
                <div className={`${(!showSuggestions && 'd-none ') || ''} top-2 p-3 search-suggestion-container z-3`}>
                    <div className='position-relative  '>
                        <SuggestionBox />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBox;