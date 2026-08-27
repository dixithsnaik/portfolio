import { motion as Motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const { experience } = portfolioData;
  const experiences = experience.items;

  return (
    <section id="experience" className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 sm:mb-28">
          <h2 className="lg:col-span-4 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal">
            {experience.title}
          </h2>
          <p className="lg:col-span-5 lg:col-start-8 text-muted text-lg self-end">
            {experience.subtitle}
          </p>
        </div>

        <ol className="divide-y divide-line border-t border-b border-line">
          {experiences.map((exp, index) => (
            <Motion.li
              key={`${exp.company}-${exp.startDate}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 sm:py-12"
            >
              <p className="md:col-span-3 text-sm text-muted">
                {exp.startDate} – {exp.endDate}
              </p>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl tracking-tight mb-1">{exp.role}</h3>
                <p className="text-sm text-muted">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ''}
                </p>
              </div>
              <p className="md:col-span-5 text-[15px] leading-relaxed text-ink/90">
                {exp.description}
              </p>
            </Motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
