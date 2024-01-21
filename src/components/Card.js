import React from "react";
import '../style/cardsStyle.css'

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <p><b>{props.name}</b></p>      
      </div>
      <div>
        <img alt="" className="card-image" src={props.image}></img>
      </div>
      <div>        
        <p>{props.description}</p>
      </div>      
      <div className="card-link-div">
        <a href={props.url} className="card-url"><b>Check it out!</b></a>
      </div>
    </div>
  );
};

export default Card;
