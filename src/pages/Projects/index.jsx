import React from "react";
import { Link } from 'react-router-dom'
import ProjectCard from "../../components/ProjectCard";
import "../../style/projectsPageStyle.css";

function Projects() {
  const projects = require("../../projects.json");
  return (
    <>
      <div className="projects-mainStyle">
        <div className="header-content">
          <span id="back-arrow-span">
            <Link to="/gabrieldmonteiro_/" className='prevent-select' id="back-arrow">&#10229;</Link>
          </span>
          <h1>Projects</h1>
        </div>
        <main>
          <div class="grid">
            {projects.map((project) => (
              <ProjectCard class="project-card"
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Projects;
