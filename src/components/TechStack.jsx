import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import { getIcon } from '../utils/data';

const TechStack = () => {
  const { techStack } = portfolioData;
  const technologies = techStack.items.map((tech) => ({
    ...tech,
    icon: getIcon(tech.icon),
  }));

  // Duplicate for seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            {techStack.title}
          </h2>
          <p className="text-zinc-400 text-lg">
            {techStack.subtitle}
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedTech.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-4 min-w-[120px] group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                      <Icon className={`w-8 h-8 ${tech.color}`} />
                    </div>
                    <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
