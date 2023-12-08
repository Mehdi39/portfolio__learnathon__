import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-50"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          url="https://hypecrates.com"
          src="/hypecrates.png"
          title="Build using React.js and Express.js"
          description="🧑‍💻🧑‍💻 Freelance project [in the endgame now.]🧑‍💻🧑‍💻"
        />
        <ProjectCard
          url="https://shopblissbox.com"
          src="/blissbox.png"
          title="Build using React.js and Express.js"
          description="🧑‍💻🧑‍💻 Freelance project [still grinding on the project.] 🧑‍💻🧑‍💻"
        />
        <ProjectCard
          url="#"
          src="/portfolio.png"
          title="Build using React.js and Vite"
          description="👨🏻‍💻👨🏻‍💻 For Learnathon 2.0 by Vivasoft from group-3! [will grind this project.]👨🏻‍💻👨🏻‍💻"
        />
      </div>
    </div>
  );
};

export default Projects;