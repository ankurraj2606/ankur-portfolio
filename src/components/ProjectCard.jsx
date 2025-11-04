const ProjectCard = ({ project }) => {
  return (
    <div className="card group cursor-pointer h-full flex flex-col">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex space-x-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline py-2 px-4 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              )}
              {!project.github && !project.demo && project.company && (
                <span className="bg-gray-800/90 text-white text-sm px-4 py-2 rounded-lg">
                  Company Project
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="featured-tag bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-primary-400/20 whitespace-nowrap flex items-center gap-1">
              <span>⭐</span>
              <span>Featured</span>
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.impact && (
          <div className="pt-2 border-t border-gray-300 dark:border-gray-700 mt-auto">
            <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
              Impact: {project.impact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
