import React from 'react';

const Sample = ({ name, address, refby }) => {
    return (
        <header>
            <h2>{name}</h2>
            <p>{address}</p>
            <h4>Ref. By: {refby}</h4>
        </header>
    );
};

export default Sample;
