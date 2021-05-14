import React from "react";
import ProjectCard from "../ProjectCard";
import projects from "../../scripts/projectData.json";

function Portfolio(props) {
  console.log(projects)

    return (
      <div className="container">
        <h1>Project List</h1>
        <p>These will be project cards</p>
        <ProjectCard />
        
      </div>
    );
  }


export default Portfolio;