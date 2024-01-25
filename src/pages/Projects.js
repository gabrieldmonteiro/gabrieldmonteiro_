import React from "react";
import { Link } from 'react-router-dom'
import ProjectCard from "../components/ProjectCard";
import "../style/projectsPageStyle.css";

function Projects() {
  const projects = require("../projects.json");
  return (
    <>    
      <div className="projects-mainStyle">
        <div className="header-content">
          <span>
            <Link to="/gabrieldmonteiro_/" className='prevent-select' id="back-arrow">&#10229;</Link>            
          </span>
          <h1>Projects</h1>
        </div>
        <main>
          <section class="grid">
            {projects.map((project) => (
               <ProjectCard
               key={project.id}
               name={project.name}
               description={project.description}
               image={project.image}
               url={project.url}
             />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default Projects;
