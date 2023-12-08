const ProjectCard = ({ src, title, description, url }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <a href="www.hypecrates.com" target="_blank">
        <img
          src={src}
          alt={title}
          className="object-contain"
        />
      </a>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white"><a href={url} target="_blank">{title}</a></h1>
        <p className="mt-2 text-gray-300"><a href={url} target="_blank">{description}</a></p>
      </div>
    </div>
  );
};

export default ProjectCard;
