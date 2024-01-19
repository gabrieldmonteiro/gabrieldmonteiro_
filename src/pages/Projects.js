import React from "react";
import Card from "../components/Card";
import "../style/projectsStyle.css";

function Projects() {
  const projects = require("../projects.json");
  return (
    <>
      <div className="projects-mainStyle">
        <div>
          <h1>Projects</h1>
        </div>
        <main>
          <section class="grid">
            {projects.map((project) => (
               <Card
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
