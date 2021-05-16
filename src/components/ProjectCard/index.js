import React from "react";
import "./style.css";
//import data from "../../scripts/projectData.json";

function ProjectCard(props) {
  const image = props.image
  return (
    <div className="col-md-4">
      <div className="card my-1" style={{backgroundImage: "url(" + image + ")", height: "205px"}}>
      
        {/* className="img-container"<img alt={props.image} src={props.image} /> */}
          <div className="content opaq-bg m-4"> 
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