import React from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {}, []);
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
