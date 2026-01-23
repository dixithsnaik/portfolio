import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";

const Experience = () => {
  const { experience } = portfolioData;
  const experiences = experience.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-right"
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            {experience.title}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto md:ml-auto md:mr-0">
            {experience.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 pl-10 md:pl-0"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-zinc-950 z-10" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-zinc-700 transition-colors">
                    <span className="text-blue-400 text-sm font-semibold mb-2 block">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-zinc-500 text-sm mb-4">
                        {exp.location}
                      </p>
                    )}
                    <p className="text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
