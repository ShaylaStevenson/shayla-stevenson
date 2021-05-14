import React from "react";
import "./style.css";
//import data from "../../scripts/projectData.json";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
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