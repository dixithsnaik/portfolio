import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const { hero, social } = portfolioData;

  return (
    <section className="relative bg-hero text-hero-fg overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:pb-8"
          >
            <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-hero-muted mb-8 sm:mb-10">
              {hero.eyebrow}
            </p>

            <h1 className="font-display text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.15rem] leading-[1.12] font-normal tracking-tight mb-8 sm:mb-10 max-w-[18ch]">
              {hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-hero-muted max-w-xl leading-relaxed mb-12 sm:mb-14">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link
                to={hero.cta.primary.link}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide bg-hero-fg text-hero px-6 py-3.5 hover:opacity-90 transition-opacity"
              >
                {hero.cta.primary.text}
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </Link>
              <Link
                to={hero.cta.secondary.link}
                className="text-sm font-medium tracking-wide text-hero-fg border-b border-hero-fg/40 pb-0.5 hover:border-hero-fg transition-colors"
              >
                {hero.cta.secondary.text}
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-16 sm:mt-20">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.18em] uppercase text-hero-muted hover:text-hero-fg transition-colors"
              >
                GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.18em] uppercase text-hero-muted hover:text-hero-fg transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.18em] uppercase text-hero-muted hover:text-hero-fg transition-colors"
              >
                X
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-8 lg:translate-y-10 lg:translate-x-4"
          >
            <figure className="max-w-md ml-auto lg:max-w-none">
              <div className="photo-frame">
                <div className="relative overflow-hidden bg-[#161412]" style={{ aspectRatio: '4 / 5' }}>
                  <img
                    src={hero.image}
                    alt={hero.portraitCaption}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ filter: 'saturate(0.92) contrast(1.03)' }}
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-[11px] tracking-[0.16em] uppercase text-hero-muted text-right pr-1">
                {hero.portraitCaption}
              </figcaption>
            </figure>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
