import React from "react";
import "./style.css";
//import data from "../../scripts/projectData.json";

function ProjectCard(props) {
  return (
    <div className="col-md-6">
    <div className="card">
      <div className="img-container" style={{width: 350, height: 205}}>
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        
          <div className="card-title">
            <strong>{props.title}</strong>
          </div>
          <p className="card-text">
            <strong>{props.details}</strong>
          </p>
          <p className="card-text">
            <a href={props.liveUrl}><strong>Go to Live Deployment</strong></a>
          </p>
          <p className="card-text">
            <a href={props.ghRepoUrl}><strong>Visit Github Repository</strong></a>
          </p>

        
      </div>
    </div>
    </div>
   );
}

export default ProjectCard;