// https://bbbootstrap.com/snippets/bootstrap-task-list-search-70202001
import { useState } from 'react';
import './SearchBox.css'
import SuggestionBox from '../SuggestionBox/SuggestionBox'


const SearchBox = ({ Svg, placeholder, data }) => {

  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState(data)
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <>
      <div className='w-100 d-grid flex-column position-relative'>
        <div className="search-container mx-auto">
          {/* {Svg} */}
          {Svg}
          <input
            className="search-box-input ps-0"
            placeholder="Search Tasks..."
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={
              (e) => {
                setSearch(e.target.value)
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
        <div className={`${(!showSuggestions && 'd-none ') || ''} p-3 search-suggestion-container z-3`}>
          <div className='position-relative '>
            {
              suggestions?.length > 0 ?
                suggestions?.map((item, index) => {
                  return (
                    <SuggestionBox key={index} data={{
                      heading: item?.heading,
                      description: item?.description
                    }} />
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