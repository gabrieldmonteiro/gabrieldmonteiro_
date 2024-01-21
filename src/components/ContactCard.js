import React from "react";
import '../style/contactCardStyle.css'

const ContactCard = (props) => {
  return (
    <div className="card">
      <img alt="" className="card-image" src={props.image}></img>
      <p><b>{props.name}</b></p>            
      <a href={props.url} target="_blank" rel="noreferrer" className="card-url"><b>Contact me!</b></a>
    </div>
  );
};

export default ContactCard;
