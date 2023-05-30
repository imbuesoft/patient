import React from 'react'

const SliderCard = () => {
    return (
        <div
            className="card"
            style={{
                width: "20rem",
                float: "right",
                marginTop: "20px",
                height: "27rem",
                backgroundColor: "#4042b2",
                borderRadius: "10.62px",
                borderColor: "#4042b2",
            }}
        >
            <img
                src="https://www.eka.care/_next/image?url=https%3A%2F%2Fcdn.eka.care%2Fvagus%2Fcl5guuf6h000b0sh95v9z4yza.png&w=1920&q=75"
                className="card-img-top"
                alt="sym"
                style={{
                    height: "34%",
                    backgroundColor: "#232477",
                    borderRadius: "50%",
                    width: "55%",
                    shapeImageThreshold: "circle",
                    padding: "14px",
                    margin: "24px",
                }}
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
                        backgroundColor: "#232477",
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