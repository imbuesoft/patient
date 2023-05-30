import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (

    


    <div className="card-container">
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar image={props.image} />
        </div>
        <div className="bottom">
          <Details detailInfo={props.price} />
          <div className="book-now-container">
            <div className="align-right">
              <a href="form.html" className="btn btn-primary book-button">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
  
}

export default Card;
