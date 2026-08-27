import { ArrowUpRight, Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Resume = () => {
  const { personal } = portfolioData;
  const resumeUrl = personal.resumeLink;

  return (
    <section className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <h1 className="lg:col-span-5 font-display text-5xl sm:text-6xl tracking-tight font-normal">
            Resume
          </h1>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-wrap items-end gap-8">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium bg-ink text-paper px-6 py-3.5 hover:opacity-90 transition-opacity"
            >
              Download
              <Download size={16} strokeWidth={1.75} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
            >
              Open in a new tab
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="border border-line bg-card overflow-hidden">
          <div className="h-[80vh]">
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              className="w-full h-full border-0 bg-paper"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
