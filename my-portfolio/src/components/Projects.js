import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data here using fetch or API calls
    // Example: fetch('your_project_data_endpoint')
    // .then(response => response.json())
    // .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* Render projects dynamically */}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
