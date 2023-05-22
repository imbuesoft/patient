import React from 'react';

const Register = ({ registered, collected, reported }) => {
    return (
        <header>
            <h4>Registered on: </h4>
            <p>{registered}</p>
            <h4>Collected on: </h4>
            <p>{collected}</p>
            <h4>Reported on: </h4>
            <p>{reported}</p>
        </header>
    );
};

export default Register;
