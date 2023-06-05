// https://bbbootstrap.com/snippets/bootstrap-task-list-search-70202001
import { useState, useRef } from 'react';
import './SearchBox.css'
import SuggestionBox from '../SuggestionBox/SuggestionBox'


const SearchBox = ({ Svg, placeholder, name, data, suggestionBox, setSuggestionBox }) => {

  const [suggestions, setSuggestions] = useState(data)
  const search_input = useRef(null)

  const handleSuggestionClick = (item) => {
    console.log(item)
    setSuggestionBox('')
    search_input.current.value = item?.heading
  }

  return (
    <>
      <div className='w-100 d-grid flex-column position-relative'>
        <div className="search-container mx-auto">
          {Svg}
          <input
            className="search-box-input ps-0"
            ref={search_input}
            placeholder={placeholder}
            onFocus={() => setSuggestionBox(name)}
            onChange={
              (e) => {
                let value = ''
                setSuggestions(data?.filter((item) => {
                  // return item?.heading?.toLowerCase().includes(e.target.value?.toLowerCase()) || item?.description?.toLowerCase().includes(e.target.value?.toLowerCase())
                  value = e.target.value?.toLowerCase().split(' ')
                  return value?.every((item1) => {
                    return item?.heading?.toLowerCase().includes(item1) || item?.description?.toLowerCase().includes(item1)
                  })
                }))
              }
            }
          />
        </div>
        <div className={`${(suggestionBox !== name && 'd-none ') || ''} p-3 search-suggestion-container z-3`}>
          <div className='position-relative '>
            {
              suggestions?.length > 0 ?
                suggestions?.map((item, index) => {
                  return (
                    <SuggestionBox key={index} data={{
                      heading: item?.heading,
                      description: item?.description
                    }}
                    handleClick={handleSuggestionClick} />
                  )
                })
                :
                <SuggestionBox data={{
                  heading: 'No results found',
                }} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;