import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const emailInfo = contact.info.find((item) => item.label === 'Email');
  const phoneInfo = contact.info.find((item) => item.label === 'Phone');
  const locationInfo = contact.info.find((item) => item.label === 'Location');

  const fieldClass =
    'w-full bg-transparent border-b border-line px-0 py-3 text-ink placeholder-muted/70 focus:outline-none focus:border-ink transition-colors';

  return (
    <section id="contact" className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal mb-6">
              {contact.title}
            </h2>
            <p className="text-muted text-lg mb-12 max-w-sm">{contact.subtitle}</p>

            <div className="space-y-6">
              {emailInfo && (
                <a href={emailInfo.link} className="block group">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Email</p>
                  <p className="text-lg border-b border-transparent group-hover:border-ink w-fit transition-colors">
                    {emailInfo.value}
                  </p>
                </a>
              )}
              {phoneInfo && (
                <a href={phoneInfo.link} className="block group">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Phone</p>
                  <p className="text-lg border-b border-transparent group-hover:border-ink w-fit transition-colors">
                    {phoneInfo.value}
                  </p>
                </a>
              )}
              {locationInfo && (
                <div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-1">Location</p>
                  <p className="text-lg">{locationInfo.value}</p>
                </div>
              )}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-6 lg:col-start-7 space-y-10"
          >
            <div>
              <label htmlFor="name" className="block text-[11px] tracking-[0.18em] uppercase text-muted mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] tracking-[0.18em] uppercase text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] tracking-[0.18em] uppercase text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What are you building?"
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 text-sm font-medium bg-ink text-paper px-6 py-3.5 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send'}
              {!isSubmitting && <ArrowUpRight size={16} strokeWidth={1.75} />}
            </button>

            {submitStatus === 'success' && (
              <Motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted"
              >
                Got it. I’ll reply by email.
              </Motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
