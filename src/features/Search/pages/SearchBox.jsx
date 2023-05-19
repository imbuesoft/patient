import React, { useState, useEffect } from 'react';
import { Input, Button, Space } from 'antd';

const SearchBox = ({ data }) => {

  const colors = {
    "red": "#ff000077",
    "yellow": "#ffff0077",
    "blue": "#0000ff77",
    "green": "#00ff0077",
    "purple": "#80008077",
    "orange": "#ffa50077",
    "pink": "#ffc0cb77",
    "cyan": "#00ffffff77",
    "brown": "#964B0077",
    "black": "#00000077",
    "white": "#ffffff77",
    "gray": "#80808077",
    "lightgray": "#d3d3d377",
    "darkgray": "#a9a9a977",
    "silver": "#c0c0c077",
    "gold": "#ffd70077",
    "navy": "#00008077",
    "olive": "#80800077",
    "maroon": "#80000077",
    "teal": "#00808077",
    "lime": "#00ff0077",
    "aqua": "#00ffff77",
    "fuchsia": "#ff00ff77",
    "indigo": "#4b008277",
    "lavender": "#e6e6fa77",
    "coral": "#ff7f5077",
    "skyblue": "#87ceeb77",
    // Add more colors here
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.color.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
        <Input.Search
        size='large'
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.map(result => {
          console.log(result.color + colors[result.color]);
          return <Button size='large' style={{ background: colors[result.color] || "red", backdropFilter: "saturate(0px)" }} key={result.id}>{result.name} : {result.category}</Button>
        })}
      </div>
    </div>
  );
};

export default SearchBox;