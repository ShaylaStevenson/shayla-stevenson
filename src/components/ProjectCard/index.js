import React from "react";
import "./style.css";
//import data from "../../scripts/projectData.json";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} style={{width="210px"}}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Live Deployment:</strong> {props.liveUrl}
          </li>
          <li>
            <strong>Github Repository:</strong> {props.ghRepoUrl}
          </li>
          <li>
            <strong>Details:</strong> {props.details}
          </li>
          <li>
            <strong>Contributors:</strong> {props.contributors}
          </li>
        </ul>
      </div>
    </div>
   );
}

export default ProjectCard;