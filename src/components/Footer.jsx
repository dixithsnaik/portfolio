import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const { social, footer, personal } = portfolioData;
  const socialLinks = [
    { icon: Github, href: social.github, label: 'GitHub' },
    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-line bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <p className="font-display text-2xl mb-3">{personal.name}</p>
            <p className="text-muted text-sm leading-relaxed">{footer.description}</p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {portfolioData.navigation.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-5">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink transition-colors"
                  aria-label={item.label}
                >
                  <Icon size={18} strokeWidth={1.6} />
                </a>
              );
            })}
          </div>
        </div>

        <p className="text-muted text-xs tracking-wide">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
