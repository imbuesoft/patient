import React from 'react';
import './Card.css';

const Card = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={divStyle}>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">
            <b className="title">Access India's digital Health ecosystem</b>
          </h3>
          <div className="card-description-wrapper">
            <p className="card-description">With Your ABHA address</p>
          </div>
          <button type="button" className="btn btn-outline-secondary btn-md" id="button-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>CREATE ABHA NOW</span>
              <div id="test-container" style={{ display: 'inline-block' }}>
                <svg
                  style={{
                    fontSize: '30px',
                    width: '20px',
                    marginBottom: '1px',
                    marginRight: '5px',
                    transition: 'transform 0.3s ease-in-out 0s',
                  }}
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M3.125 10.212h13.75M11.25 4.587l5.625 5.625-5.625 5.625"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="card-image">
          <img
            src="https://www.eka.care/_next/image?url=https%3A%2F%2Fcdn.eka.care%2Fvagus%2Fcl5jndjc8001l0sh9b4dc9yx5.png&w=1920&q=75"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
