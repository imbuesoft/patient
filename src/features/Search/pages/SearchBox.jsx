import React, { useState, useEffect } from 'react';
import { AutoComplete, Button, Input } from 'antd';

const SearchBox = ({ data }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.color.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const suggestions = data.reduce((acc, item) => {
      if (
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
        !acc.includes(item.name)
      ) {
        acc.push({ value: item.name, label: item.name });
      }
      return acc;
    }, []);
    setSuggestions(suggestions);
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleSearch = value => {
    setSearchTerm(value);
  };

  const handleSelect = value => {
    setSearchTerm(value);
  };

  return (
    <>
      <AutoComplete
        size="large"
        options={suggestions}
        value={searchTerm}
        onChange={handleSearch}
        onSelect={handleSelect}
      >
        <Input.Search size="large" placeholder="Search..." allowClear={true} />
      </AutoComplete>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", margin:"1em 0 0 0" }}>
        {searchResults.map(result => {
          return (
            <Button
              key={result.id}
              size='large'
              style={{ background: result.color }}
            >
              {result.name} : {result.category}
            </Button>
          )
        })}
      </div>
    </>
  );
};

export default SearchBox;
