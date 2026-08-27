import portfolioData from '../data/portfolio.json';

const About = () => {
  const { about, projects, experience } = portfolioData;
  const experienceItems = experience.items;

  const parseDate = (str) => {
    if (str.toLowerCase() === 'present') return new Date();
    const [monthStr, year] = str.split(' ');
    const month = new Date(`${monthStr} 1, ${year}`).getMonth();
    return new Date(parseInt(year, 10), month, 1);
  };

  const calculateMonths = (start, end) =>
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  let internshipMonths = 0;
  let fulltimeMonths = 0;

  experienceItems.forEach((exp) => {
    const start = parseDate(exp.startDate);
    const end = parseDate(exp.endDate);
    const months = calculateMonths(start, end);

    if (exp.tag === 'internship') internshipMonths += months;
    else if (exp.tag === 'fulltime') fulltimeMonths += months;
  });

  const internshipText = `${internshipMonths} mo`;
  const fulltimeText = `${(fulltimeMonths / 12).toFixed(1)} yr`;

  const stats = [
    { label: 'Internships', value: internshipText },
    { label: 'Full-time', value: fulltimeText },
    { label: 'Projects', value: String(projects.items.length) },
    { label: 'CGPA', value: about.education.cgpa },
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-5 sm:px-8 lg:px-12 bg-paper text-ink">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 sm:mb-32">
          <div className="lg:col-span-5">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight font-normal mb-8">
              {about.title}
            </h1>
            <p className="text-lg text-muted max-w-sm">{about.description}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-[17px] leading-relaxed lg:pt-4">
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 sm:mb-32 py-10 border-y border-line">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[11px] tracking-[0.18em] uppercase text-muted mb-2">{stat.label}</dt>
              <dd className="font-display text-3xl sm:text-4xl tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 sm:mb-32">
          <h2 className="lg:col-span-4 font-display text-3xl sm:text-4xl tracking-tight">What I do</h2>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {about.skills.map((skill) => (
              <div key={skill.title}>
                <h3 className="text-lg mb-2">{skill.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">School</h2>
            <p className="text-lg mb-1">{about.education.degree}</p>
            <p className="text-muted text-sm mb-4">
              {about.education.institution} · {about.education.location}
            </p>
            <p className="text-sm text-muted">
              {about.education.dates} · CGPA {about.education.cgpa}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">Notes</h2>
            <ul className="space-y-4">
              {about.achievements.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed border-b border-line pb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
