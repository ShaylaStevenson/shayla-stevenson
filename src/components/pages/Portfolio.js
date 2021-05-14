import React from "react";
import ProjectCard from "../ProjectCard";
import data from "../../scripts/projectData.json";

function Portfolio(props) {
  console.log(data)
    return (
      <div className="container">
        <h1>Project List</h1>
        <p>These will be project cards</p>
        {/* render cards for each project in json file */}
        {data.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            details={project.details}
            contributors={project.contributors}
          />
        ))}
      </div>
    );
  }

export default Portfolio;