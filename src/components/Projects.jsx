import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;
  const allProjects = projects.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-4">
           {projects.title}
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            {projects.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0"
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative w-full max-w-full min-w-0 overflow-hidden
                         rounded-2xl border border-zinc-800/50 bg-zinc-900/30
                         backdrop-blur-sm transition-all duration-500
                         hover:border-zinc-700"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Image (LOCKED — cannot break grid) */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '16 / 9' }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full max-w-full object-cover pointer-events-none"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-zinc-950/80 backdrop-blur-sm rounded-full text-xs font-medium text-zinc-300">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 w-full min-w-0">
                <h3 className="text-xl font-bold mb-2 truncate">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full text-xs font-medium
                                 bg-zinc-800/50 border border-zinc-700/50
                                 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project?.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                  )}

                  {project?.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
