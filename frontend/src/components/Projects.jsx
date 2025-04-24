import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="projects__section flex flex-col gap-11">
      <h3 className="text-[2rem] capitalize">projects</h3>
      <div className="projects grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <div className="group cursor-pointer">
            <h4 className="group-hover:text-yellow-200 transition  text-[1.9rem] text-neutral-200  capitalize ">
              {project.title}
            </h4>
            <p className="text-[1.8rem] text-neutral-600">{project.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
