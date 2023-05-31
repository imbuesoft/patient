import { AutoComplete, Input } from 'antd';
import { useState } from 'react';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div style={{ margin: 'auto' }}>
            <span>
              Found {query} on{' '}
              <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                {category}
              </a>
            </span>
            <span>{getRandomInt(500, 500)} results</span>
          </div>
        ),
      };
    });

const App = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 500,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="Search for a course or learning path" enterButton />
      </AutoComplete>
    </div>
  );
};

export default App;
