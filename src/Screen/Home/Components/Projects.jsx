import ProjectCard from "./sub/ProjectCard";
import { NavLink } from 'react-router-dom'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/hypecrates.png"
          title="Hypecrates build using React.js and Express.js"
          description="."
          url="www.hypecrates.com"
        />
        <ProjectCard
          src="/blissbox.png"
          title="Hypecrates build using React.js and Express.js"
          description=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Hypecrates build using React.js and Express.js"
          description=""
        />
      </div>
    </div>
  );
};

export default Projects;