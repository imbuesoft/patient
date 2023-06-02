import React, { useState } from 'react';

const Autocomplete = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the options based on the input value
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
    onSelect(option);
  };

  return (
    <div className="autocomplete">
      <select
        className="form-control mb-2"
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderWidth: '3px' }}
      >
        <option value="">Select patient name</option>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {filteredOptions.length > 0 && (
        <ul className="list-group autocomplete-options">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;



