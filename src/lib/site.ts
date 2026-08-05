/**
 * Site-wide config — one place to swap every outbound destination.
 * PRE-LAUNCH: `links.calendly` and `links.projectForm` are still placeholders.
 */

export const site = {
  name: 'Websyncr',
  url: 'https://websyncr.in',
  title: 'Fixed-Price AI Systems & MVP Development - Websyncr',
  tagline: 'Full-stack engineering & AI systems architecture',
  description:
    'Production AI and RAG systems, fixed-price MVP sprints, and rescue audits - architected and built by one senior engineer, one build at a time. From $2,500.',
  alternateNames: ['Web Syncr', 'Web Syncer', 'WebSyncr'],
  locale: 'en_US',
  email: 'websyncr.info@gmail.com',
  location: 'Gurugram, India',
  timezoneNote: 'remote · overlaps US / UK / AU hours',
  countryCode: 'IN',
} as const;

export const founder = {
  name: 'Dharmvir Dharmacharya',
  role: 'Founder & Lead Architect',
  linkedin: 'https://www.linkedin.com/in/dharmvir-dharmacharya/',
  github: 'https://github.com/ddharmacharya',
  website: 'https://ddharmacharya.in',
} as const;

export const links = {
  calendly: 'https://calendly.com/websyncr-info/30min',
  projectForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc-websyncr-placeholder/viewform',
  rescue: '/rescue',
  mailto: `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry - fixed-scope engagement')}`,
} as const;

export const primaryCta = {
  label: 'Book a Fixed-Scope Discovery Call',
  href: links.calendly,
} as const;

export const nav = [
  { label: 'Pricing', href: '#offers' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
