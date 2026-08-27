import portfolioData from '../data/portfolio.json';
import { getIcon } from '../utils/data';

const TechStack = () => {
  const { techStack } = portfolioData;
  const technologies = techStack.items.map((tech) => ({
    ...tech,
    icon: getIcon(tech.icon),
  }));

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <h2 className="md:col-span-4 font-display text-4xl sm:text-5xl tracking-tight font-normal">
            {techStack.title}
          </h2>
          <p className="md:col-span-6 md:col-start-7 text-muted text-lg self-end">
            {techStack.subtitle}
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <li key={tech.name} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-muted" strokeWidth={1.6} />
                <span className="text-sm tracking-wide">{tech.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
