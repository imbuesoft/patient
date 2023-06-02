import React, { useState } from 'react';
import './Filter.css';
import data from './BrandsData.json';

const Demo = () => {
    const [input, setInput] = useState('')
    const suggestion = [];

    data.forEach(value => {
        suggestion.push(value.name);
    });
    const onChange = e => {
        setInput(e.target.value);
        
    };
    const sug = suggestion.filter(suggestion => suggestion.toLowerCase().includes(input.toLowerCase()));

    
    
    const handle = () => {
        setInput('')
    }


    return (
        <>
            <div className="filter">
                <div className="card" style={{ border: 'none' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ borderBottom: ' 0.5px solid  #f1f1f1', fontSize: '20px' }}>Filters</li>
                        <li className="list-group-item" style={{ border: 'none', fontSize: '15px' }}><b>Brands</b></li>
                        <li className="list-group-item" style={{ border: 'none' }}>
                            <div className="input-group input-group-sm mb-3">
                                <input
                                    type="search"
                                    value={input}
                                    onChange={onChange}
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Search..."
                                    style={{ backgroundColor: '#e9e9e9' }}
                                />
                            </div>
                        </li>
                        <div className="scrollable-list okay">
                            {
                                sug.map((val, index) => {
                                    return (
                                        <li
                                            className="list-group-item"
                                            key={val}
                                            style={{
                                                borderBottom: ' 0.5px solid  #f1f1f1 ',
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                                
                                            }}
                                        >
                                            <input id={val + index} type="checkbox" className="ais-RefinementList-checkbox"  />
                                            <label htmlFor={val + index} className="ais-RefinementList-labelText">{' '}{val}</label>
                                        </li>
                                    );
                                })}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Demo;
