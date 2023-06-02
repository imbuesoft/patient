import React from 'react';
//import p1 from './p1.png';
const HealthCheckupPackage = () => {
  const cardStyle = {
    width: "27rem",
    height: "21rem",
    borderRadius: "20px",
  };

  const titleStyle = {
    color: "#02475B",
  };

  const subtitleStyle = {
    color: "#02475B",
  };

  const descriptionStyle = {
    color: "#02475B",
  };

  const mrpStyle = {
    color: "#02475B",
    textDecoration: "line-through",
  };

  const offerStyle = {
    color: "#02475B",
  };

  const moreStyle = {
    color: "#FC9916",
    fontWeight: 600,
    paddingLeft: "5px",
    verticalAlign: "top",
    boxSizing: "inherit",
  };

  const buttonStyle = {
    fontSize: "15px",
    padding: "4px 8px",
    borderRadius: "4px",
  };

  const addToCartStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: "transparent",
    color: "#FC9916",
    padding: "8px 16px",
    borderRadius: "7px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "2px",
  };


  const bestValueStyle = {
    position: "absolute",
    top: "3px",
    right: "2px",
    backgroundColor: "#1889a7",
    color: "white",
    padding: "4px 8px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };

  const starStyle = {
    color: "#f2b633",
    marginRight: "5px",
  };
  const cashbackStyle = {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    backgroundColor: "#fafbfc",
    color: "#0087BA",
    padding: "8px 16px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "bold",
  };
  const cashbackLogoStyle = {
    marginRight: "5px",
    height: "30px",
    width: "40px",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="top">
        <div className="card-body">
          <button className="btn btn-primary" style={bestValueStyle}>
            <span style={starStyle}>★</span> Best Value
          </button>
          <h5 className="card-title" style={titleStyle}>
            Apollo Full Body Checkup - <br />
            Essential
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" style={subtitleStyle}>
            TOTAL TESTS: 77
          </h6>
          <h6 className="card-subtitle mb-2 text-muted" style={subtitleStyle}>
            GLUCOSE, FASTING
          </h6>
          <h6 className="card-subtitle mb-2 text-muted" style={descriptionStyle}>
            Erythrocyte Sedimentation Rate (Esr)
            <span style={moreStyle}>+75 More</span>
          </h6>
        </div>
        <hr />
        <div className="bottom">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div>
                  <h6 className="card-subtitle mb-2 text-muted" style={mrpStyle}>
                    MRP ₹9639 <button className="btn btn-success rounded-pill" style={buttonStyle}>
                      55% Off
                    </button>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted" style={offerStyle}>
                    <b>MRP ₹4299</b>
                  </h6>
                </div>
              </div>
              <div className="col">
                <button className="btn btn" style={addToCartStyle}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn" style={cashbackStyle}>
                  {/* <img src={p1} alt="p1" style={cashbackLogoStyle} /> */}
                  Extra ₹450 Cashback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HealthCheckupPackage;
