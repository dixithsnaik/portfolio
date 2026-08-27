import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import Still from './Still';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section className="bg-paper text-ink px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 sm:mb-28">
          <h2 className="lg:col-span-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal">
            {projects.title}
          </h2>
          <p className="lg:col-span-6 lg:col-start-7 text-muted text-lg leading-relaxed self-end lg:pb-1">
            {projects.subtitle}
          </p>
        </div>

        <div className="space-y-28 sm:space-y-36">
          {projects.items.map((project, index) => {
            const imageOnRight = index % 2 === 0;

            return (
              <Motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <div
                  className={`lg:col-span-6 ${
                    imageOnRight ? 'lg:col-start-7 lg:row-start-1' : 'lg:col-start-1'
                  } ${index === 1 ? 'lg:translate-y-8' : ''} ${index === 2 ? 'lg:-translate-y-4' : ''}`}
                >
                  <figure className={imageOnRight ? 'lg:pl-6' : 'lg:pr-6'}>
                    <div className="bg-card border border-line p-2.5 pb-10 sm:p-3 sm:pb-12 shadow-[0_20px_50px_rgba(20,18,16,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                      <Still project={project} ratio="16 / 10" />
                    </div>
                    <figcaption className="mt-3 text-[11px] tracking-[0.16em] uppercase text-muted">
                      {project.context}
                    </figcaption>
                  </figure>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    imageOnRight ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'
                  }`}
                >
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
                    {String(index + 1).padStart(2, '0')} / {project.category}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">
                    {project.title}
                  </h3>

                  <dl className="space-y-6 mb-10">
                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1.5">Problem</dt>
                      <dd className="text-[15px] leading-relaxed">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1.5">Build</dt>
                      <dd className="text-[15px] leading-relaxed">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1.5">Result</dt>
                      <dd className="text-[15px] leading-relaxed">{project.outcome}</dd>
                    </div>
                  </dl>

                  <p className="text-sm text-muted mb-8">
                    {project.technologies.join(' · ')}
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
                    >
                      Open
                      <ArrowUpRight size={14} strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
