import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Resume = () => {
  const { personal } = portfolioData;
  const resumeUrl = personal.resumeLink; // "/files/Dixith_S_Naik_Resume.pdf"

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            Resume
          </h2>
          <p className="text-zinc-400 text-lg">
            View or download my resume directly from here.
          </p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-6"
        >
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3
                       bg-gradient-to-r from-blue-500 to-cyan-500
                       text-white font-semibold rounded-lg
                       hover:shadow-lg hover:shadow-blue-500/25
                       transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3
                       bg-zinc-900 border border-zinc-800
                       rounded-lg hover:bg-zinc-800
                       transition-colors text-zinc-300"
          >
            <ExternalLink size={18} />
            Open in new tab
          </a>
        </motion.div>

        {/* Resume Preview (UI Embedded) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30"
        >
          <div className="p-4 bg-zinc-900 border-b border-zinc-800">
            <h3 className="font-semibold text-white">
              Resume Preview
            </h3>
          </div>

          {/* IMPORTANT: iframe keeps it inside UI */}
          <div className="h-[80vh]">
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              className="w-full h-full border-0 bg-zinc-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
