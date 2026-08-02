/**
 * Site-wide configuration. Every outbound destination lives here so there is
 * exactly one place to swap a placeholder for a live URL before launch.
 *
 * PRE-LAUNCH CHECKLIST — replace the three values marked PLACEHOLDER:
 *   1. links.calendly   — real Calendly event URL
 *   2. links.projectForm — real Google Form URL
 *   3. verification.google — Search Console token (or delete the block)
 */

export const site = {
  name: 'Websyncr',
  /** Production origin. No staging or preview host may ship here. */
  url: 'https://websyncr.in',
  /**
   * Service-first, brand-last. The brand has no search volume yet, so leading
   * with it would spend the most valuable 50 characters on a term nobody types.
   * "AI systems" and "MVP development" are what buyers actually search.
   */
  title: 'Fixed-Price AI Systems & MVP Development - Websyncr',
  tagline: 'Full-stack engineering & AI systems architecture',
  /**
   * 156 characters. Google truncates around 160, so this is written to survive
   * intact rather than trail off mid-clause.
   */
  description:
    'Production AI and RAG systems, fixed-price MVP sprints, and rescue audits - architected and built by one senior engineer, one project at a time. From $2,500.',
  /**
   * The mark is read aloud as "web syncer" and typed several ways. Declared so
   * both search engines and LLM retrieval resolve the spellings to one entity.
   */
  alternateNames: ['Web Syncr', 'Web Syncer', 'WebSyncr'],
  locale: 'en_US',
  email: 'websyncr.info@gmail.com',
  location: 'Gurugram, India',
  timezoneNote: 'remote · overlaps US / UK / AU hours',
  /** Structured-data country code for the founder's base. */
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
  /** PLACEHOLDER — swap for the live Calendly event link. */
  calendly: 'https://calendly.com/websyncr/discovery-call',
  /** PLACEHOLDER — swap for the live Google Form link. */
  projectForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc-websyncr-placeholder/viewform',
  mailto: `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry - fixed-scope engagement')}`,
} as const;

/** Primary conversion action. One CTA, used verbatim site-wide. */
export const primaryCta = {
  label: 'Book a Fixed-Scope Discovery Call',
  href: links.calendly,
} as const;

export const nav = [
  { label: 'Pricing', href: '#offers' },
  { label: 'Services', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
] as const;

/** Shared attributes for every outbound link. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
