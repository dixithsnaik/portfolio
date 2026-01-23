import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import { getIcon } from '../utils/data';

const About = () => {
  const { about, projects, experience } = portfolioData;
  const experienceItems = experience.items;

  // Helper: parse "MMM YYYY" format
  const parseDate = (str) => {
    if (str.toLowerCase() === 'present') return new Date(); // current date
    const [monthStr, year] = str.split(' ');
    const month = new Date(`${monthStr} 1, ${year}`).getMonth(); // month index 0-11
    return new Date(parseInt(year), month, 1); // first day of month
  };

  // Helper: calculate months difference
  const calculateMonths = (start, end) =>
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  // Calculate internship and full-time experience
  let internshipMonths = 0;
  let fulltimeMonths = 0;

  experienceItems.forEach((exp) => {
    const start = parseDate(exp.startDate);
    const end = parseDate(exp.endDate);

    const months = calculateMonths(start, end);

    if (exp.tag === 'internship') internshipMonths += months;
    else if (exp.tag === 'fulltime') fulltimeMonths += months;
  });

  // Prepare stats
  const internshipText = `${internshipMonths} month${internshipMonths > 1 ? 's' : ''}`;
  const fulltimeText = `${(fulltimeMonths / 12).toFixed(1)} yrs`;

  const stats = [
    { label: 'Internships', value: internshipText },
    { label: 'Experience', value: fulltimeText },
    { label: 'Projects', value: projects.items.length },
    { label: 'Apps Published', value: projects.items.filter(p => p.link).length },
    { label: 'Technologies', value: about.skills.length },
  ];

  // Map skills with icons
  const skills = about.skills.map((skill) => ({
    ...skill,
    icon: getIcon(skill.icon),
  }));

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-6">
            {about.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {about.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50"
            >
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black tracking-tight mb-12 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
