import React from "react";
import '../style/cardsStyle.css'

const Card = (props) => {
  return (
    <div className="card">
      <p><b>{props.name}</b></p>
      <img alt="" className="card-image" src={props.image}></img>
      <p>{props.description}</p>
      <a href={props.url} className="card-url"><b>Check it out!</b></a>
    </div>
  );
};

export default Card;
