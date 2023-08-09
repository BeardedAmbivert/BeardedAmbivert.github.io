import Project from "../components/Project";

function Projects({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, id) => {
        return <Project project={project} key={id}></Project>;
      })}
    </div>
  );
}

export default Projects;
