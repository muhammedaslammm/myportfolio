import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="projects flex flex-col gap-8">
      <div className="h3 text-[1.7rem] capitalize text-neutral-200">
        projects
      </div>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div className="">
            <h4 className="text-neutral-200 text-[1.7rem]">{project.title}</h4>
            <p className="text-neutral-600 text-[1.6rem]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
