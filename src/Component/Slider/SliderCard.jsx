import React from 'react'
import './SliderCard.css'

const SliderCard = () => {
    return (
        <div
            className="card mainCard"
        >
            <img
                src="https://www.eka.care/_next/image?url=https%3A%2F%2Fcdn.eka.care%2Fvagus%2Fcl5guuf6h000b0sh95v9z4yza.png&w=1920&q=75"
                className="card-img-top imgBG"
                alt="sym"
            />
            <h4
                style={{
                    textAlign: "topright",
                    position: "absolute",
                    top: "40px",
                    right: "16px",
                    color: "#64e3fb",
                }}
            >
                Step<div style={{ textalign: "center", fontSize: "46px" }}>01</div>
            </h4>
            <div
                className="card-body"
                style={{
                    color: "white",
                    fontFamily: "DM Sans, sans-serif",
                    lineHeight: "24px",
                }}
            >
                <h2>Store your medical records</h2>
                <p className="card-text" style={{ fontSize: "17px" }}>
                    Started by downloading your covid certificate
                </p>
                <button
                    type="button"
                    className="btn btn"
                    style={{
                        backgroundColor: "#0b3c43",
                        color: "white",
                        height: "20%",
                    }}
                >
                    Create Now &#8594;
                </button>
            </div>
        </div>
    )
}

export default SliderCard