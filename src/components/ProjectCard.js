import React from "react";
import '../style/projectCardStyle.css'

const ProjectCard = (props) => {
  return (
    <div className="main-project-div">
    <div className="project-card">
      <div>
        <p><b>{props.name}</b></p>      
      </div>
      <div>
        <img alt="" className="card-project-image" src={props.image}></img>
      </div>
      <div className="project-description">        
        {props.description}
      </div>      
      <div className="card-link-div">
        <a href={props.url} className="card-url"><b>Check it out!</b></a>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
