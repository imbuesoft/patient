import React from 'react';

const Register = ({ registered, collected, reported }) => {
    return (
        <header>
            <h4 style={{textAlign: "right"}}>Registered on: </h4>
            <p>{registered}</p>
            <h4 style={{textAlign: "right"}}>Collected on: </h4>
            <p>{collected}</p>
            <h4 style={{textAlign: "right"}}>Reported on: </h4>
            <p>{reported}</p>
        </header>
    );
};

export default Register;
