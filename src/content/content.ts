/**
 * All page copy. Verified facts only — every figure below is one of the
 * approved stats, and no client name, testimonial, or metric is invented.
 * Confidential engagements are labelled "Confidential Client", never a
 * placeholder brand name.
 *
 * There are deliberately NO testimonials in this file. The predecessor site at
 * websyncr.in carried eight named quotes that could not be verified (one of
 * them credited the work to a different person entirely), so none were carried
 * across. If real, attributed quotes become available they can be added; until
 * then the proof on this page is the stats, the case studies, and the record.
 */

/* -------------------------------------------------------------------------- */
/* Proof bar                                                                  */
/* -------------------------------------------------------------------------- */

export type Stat = { value: string; label: string };

/**
 * The 50+ and $6.8M+ labels carry a mandatory qualifier: both figures come from
 * an AI hiring platform that was architected and built, not from a count of
 * direct freelance clients. That wording is the only thing distinguishing them
 * from a personal client tally, so it must not be trimmed for brevity.
 */
export const stats: readonly Stat[] = [
  { value: '6', label: 'Years senior full-stack & AI systems experience' },
  {
    value: '50+',
    label: 'Enterprise clients architected for, via an AI hiring platform he built',
  },
  { value: '$6.8M+', label: 'Enterprise pipeline generated on that same platform' },
  // "Reduction in delivery / hiring turnaround" left the figure unattached to
  // anything. Same platform as the two figures beside it, so say so.
  { value: '90%', label: 'Faster hiring and delivery turnaround on that platform' },
  // The only claim on this page a visitor can check in thirty seconds, so it
  // points at itself. Worth more than a figure they have to take on faith.
  { value: '95+', label: 'Lighthouse performance on delivery - including this page' },
];

/* -------------------------------------------------------------------------- */
/* Engagement model — the positioning claim the pricing rests on              */
/* -------------------------------------------------------------------------- */

/**
 * Deliberately a policy, not a calendar. A dated "next slot opens March" line
 * is a stronger scarcity signal but is stale the moment it passes, and a stale
 * date on a page selling delivery discipline undoes more than it buys.
 */
export const engagementModel = {
  headline: 'One project at a time.',
  // Four short sentences instead of two long ones. The original ran a 38-word
  // sentence with three subordinate clauses, which is where a reader skims.
  body: 'I take a single engagement at a time. Not one per team - one, full stop. While your build is running, no second client is competing for the same hours. Nobody more junior quietly picks it up when something urgent lands. The person who scopes your system is the person who architects it, writes it, and hands it over.',
  points: [
    {
      title: 'No parallel work',
      description:
        'Your build is the only build. That is the whole reason a three-week sprint can actually take three weeks.',
    },
    {
      title: 'No bench, no handoffs',
      description:
        'Nothing is subcontracted out. You never get reassigned to someone you have not spoken to.',
    },
    {
      title: 'Honest scheduling',
      description:
        'If I am mid-build when you reach out, I will tell you the real start date rather than take a deposit and queue you.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Engagements — fixed-price, priced against 2026 market rates                */
/* -------------------------------------------------------------------------- */

export type Offer = {
  num: string;
  name: string;
  price: string;
  /** Duration / billing qualifier shown under the price. */
  meta: string;
  tag: string | null;
  description: string;
  terms: string;
};

/**
 * Pricing is anchored to 2026 market data for this segment, not to a cost-plus
 * calculation. Reference points at time of writing: senior LLM/RAG freelance
 * $175-250/hr; boutique consultancies $150-250/hr; agency fixed-price MVPs
 * $30-55k; production RAG builds $55-90k; fixed-price technical audits from
 * ~$4,900. These numbers land ~40-50% under a US boutique, which is what a
 * solo operator with no agency overhead can defend.
 *
 * There are no discounts, no struck-through anchor prices, and no "% OFF"
 * badges anywhere in this file. That is intentional: a permanent markdown
 * argues the real price is fiction, and nobody buying a $35k AI system is
 * shopping for a coupon.
 */
export const offers: readonly Offer[] = [
  {
    num: '01',
    name: 'Discovery & Architecture Sprint',
    price: '$2,500',
    meta: 'One week · fee credited to the build',
    tag: 'Start here',
    description:
      'A fixed quote on a system nobody has examined yet is a guess. One week buys the architecture, the scope, and a firm number. Go ahead and the fee comes off the build; walk away and you keep the spec.',
    terms: '100% up front · credited in full if you proceed',
  },
  {
    num: '02',
    name: '3-Week MVP Sprint',
    price: '$15,000 – $22,000',
    meta: 'Three weeks · fixed scope',
    tag: null,
    // "Roughly half what an agency charges" was an unverifiable comparative.
    // The market range is a fact the buyer can check against their own quotes,
    // which is more persuasive than a claim about me.
    description:
      'Idea to deployed product in three weeks. Full-stack build, no scope creep, no bench of subcontractors. Agencies quote $30,000-$55,000 for comparable fixed-price scope; the difference is overhead, not engineering.',
    terms: '50% to start · 50% on delivery',
  },
  {
    num: '03',
    name: 'AI / RAG System Build',
    price: '$18,000 – $35,000',
    meta: 'Four to eight weeks · fixed scope',
    tag: null,
    description:
      'Production RAG pipelines, custom knowledge bases, and LLM integrations wired into the tools you already run on. Retrieval that is evaluated rather than assumed, and a system your team can operate after handover.',
    terms: '50% to start · 50% on delivery',
  },
  {
    num: '04',
    name: 'Rescue Audit',
    price: '$3,500',
    meta: 'Five days · fixed fee',
    tag: 'Expedited',
    description:
      'A stalled build gets a full read of the codebase, architecture, and deploy path, then a prioritised plan to ship it. No blame narrative and no rewrite-everything pitch. Remediation is quoted separately from what the audit finds.',
    terms: '100% up front · remediation quoted separately',
  },
];

/** Advisory and small scoped fixes, where a fixed number would just be padding. */
export const hourlyRate = {
  rate: '$125/hr',
  note: 'Advisory, audits, and scoped fixes too small to run as a sprint. Fixed price is the default; this is the exception.',
} as const;

/* -------------------------------------------------------------------------- */
/* Capabilities — what gets built, carried across from websyncr.in            */
/* -------------------------------------------------------------------------- */

export type Capability = {
  name: string;
  years: string;
  description: string;
  stack: readonly string[];
};

/**
 * These are capabilities, not engagement models — they describe what the
 * systems above are made of. Kept deliberately below the priced engagements so
 * that commodity work (WordPress, standalone cloud management) does not sit at
 * the same visual weight as a $35k AI build, while still being findable by the
 * clients who arrive looking for exactly that.
 */
export const capabilities: readonly Capability[] = [
  {
    name: 'AI & LLM Systems',
    years: '2+ yrs',
    description:
      'Retrieval-augmented generation over your own domain: document processing, custom knowledge bases, and LLM integrations that return answers you can trace back to a source.',
    stack: ['RAG pipelines', 'Vector databases', 'Prompt engineering', 'LLM fine-tuning'],
  },
  {
    name: 'Conversational AI',
    years: '4+ yrs',
    description:
      'Chat agents that handle real inquiries and know when to stop. Clean human handoff, analytics on what they get wrong, and retraining from your own transcripts.',
    stack: ['Multi-channel bots', 'Human handoff', 'Conversation analytics', 'Continuous learning'],
  },
  {
    name: 'Web Applications',
    years: '5+ yrs',
    description:
      'Production web apps built for the numbers that matter after launch: fast, accessible, typed end to end, and shipped with the deploy pipeline already working.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Mobile Applications',
    years: '3+ yrs',
    description:
      'Cross-platform iOS and Android from one codebase, including the parts teams usually discover late - store submission, native permissions, and offline behaviour.',
    stack: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    name: 'Cloud & Infrastructure',
    years: '2+ yrs',
    description:
      'AWS infrastructure sized to what you actually run, not to a reference architecture. Provisioning, hardening, and cost work on existing accounts as well as new ones.',
    stack: ['EC2', 'S3', 'RDS', 'Route 53', 'Amplify'],
  },
  {
    name: 'WordPress & WooCommerce',
    years: '4+ yrs',
    description:
      'Custom themes and stores built to be maintained rather than fought with - no page-builder sprawl, and a checkout that survives its first real traffic.',
    stack: ['Custom themes', 'WooCommerce', 'Elementor', 'Plugin development'],
  },
];

/* -------------------------------------------------------------------------- */
/* Work — two clearly separated categories                                    */
/* -------------------------------------------------------------------------- */

export type CaseStudy = { title: string; meta: string; description: string };

/** Independent client delivery. Every client is under NDA. */
export const independentWork: readonly CaseStudy[] = [
  {
    title: 'Food Delivery Marketplace Platform',
    meta: 'Confidential Client',
    description:
      'Vendor, customer, and delivery-partner apps on one platform - full CRM, automated WhatsApp ordering, and an automated finance dashboard.',
  },
  {
    title: 'Omnichannel Hardware Commerce System',
    meta: 'Confidential Client',
    description:
      'A unified admin platform running in-store POS/kiosk and online ordering, plus a customer-facing mobile app.',
  },
];

/** Enterprise architecture and technical leadership. */
export const enterpriseWork: readonly CaseStudy[] = [
  {
    title: 'EMB Talent Platform',
    meta: 'Technical Lead / Architect',
    description:
      'AI hiring platform used across 50+ enterprise clients - 90% faster hiring, $6.8M+ in enterprise pipeline generated.',
  },
  {
    title: 'AI Requirements / BRD Generator',
    meta: 'Technical Lead / Architect',
    description: 'RAG-based spec generation that cut client onboarding time by 60%.',
  },
  {
    title: 'Autonomous AI Dev Agent',
    meta: 'Confidential · In Production',
    description:
      'Agentic pipeline that codes, tests, deploys, and resolves feedback automatically from Jira and Slack.',
  },
  {
    title: 'Artha CRM & Project Management Suite',
    meta: 'Technical Lead / Architect',
    description: 'Multi-tenant CRM managing $5M+ in active deals.',
  },
];

export type AdditionalSystem = { title: string; description: string };

export const additionalSystems: readonly AdditionalSystem[] = [
  {
    title: 'KAM Dashboard',
    description: 'Key-account management dashboard for enterprise sales teams.',
  },
  {
    title: 'XDR Security Monitoring Dashboard',
    description:
      'Extended detection & response monitoring interface for a security operations team.',
  },
  {
    title: 'SNABBCOM',
    description: 'A platform for launching a fully operational merchant store in 24 hours.',
  },
  {
    title: 'CCTV Facial Recognition Attendance System',
    description: 'Attendance tracking from live CCTV feeds using facial recognition.',
  },
];

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

export type ProcessStep = { num: string; title: string; description: string };

export const processSteps: readonly ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery Call',
    description: '20 minutes, free. We talk through the problem, not a sales script.',
  },
  {
    num: '02',
    title: 'Scope & Fixed Quote',
    description:
      'Small builds get a fixed number in 24-48 hours. Anything with real unknowns starts with the paid discovery sprint, so the quote is based on the system rather than a guess.',
  },
  {
    num: '03',
    title: '50% Deposit',
    description: 'Work starts once the deposit clears - no ambiguity on either side.',
  },
  {
    num: '04',
    title: 'Milestone Check-ins',
    description: 'You see the build as it happens, not just at the end.',
  },
  {
    num: '05',
    title: 'Final 50% & Handover',
    description: 'Balance on delivery. You get the code, the docs, and the keys.',
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export type Faq = { question: string; answer: string };

/**
 * Ordered by buyer intent, not by topic. Cost is the first thing a serious
 * visitor wants confirmed and the most-searched question in this category, so
 * it leads; risk questions sit in the middle; logistics close.
 *
 * Questions are phrased the way someone would actually type them. This block
 * is emitted as FAQPage structured data, and both search engines and LLM
 * retrieval lift question/answer pairs verbatim — so each answer is written to
 * stand on its own without the surrounding page.
 */
export const faqs: readonly Faq[] = [
  {
    question: 'How much does it cost to build an AI or RAG system?',
    answer:
      'Here, $18,000 to $35,000 for a production RAG system, and $15,000 to $22,000 for a three-week full-stack MVP. For comparison, agencies quote $55,000 to $90,000 for a production RAG build and $30,000 to $55,000 for a fixed-price MVP. The gap is overhead rather than engineering: there is no account manager, no project manager, and no bench between you and the person writing the code.',
  },
  {
    question: 'You only take one project at a time. What if you are already building something?',
    answer:
      'Then I tell you the real start date on the call. You go on a short list rather than paying a deposit to sit in a queue behind someone else, and if the timing genuinely does not work for you I will say so instead of stretching to fit.',
  },
  {
    question: 'Why does discovery cost money?',
    answer:
      'Because a fixed quote on a system nobody has examined yet is a guess, and a guess gets corrected later out of your budget. One week of paid discovery buys the architecture, the scope, and a firm number - and the fee comes off the build if you go ahead. If you do not, the spec is yours to take anywhere.',
  },
  {
    question: 'Why fixed price instead of hourly?',
    answer:
      'Hourly billing rewards slow work. A fixed price means the scope is already thought through, and the incentive lines up: ship it well, ship it once. Hourly exists only for advisory and small scoped fixes, where a fixed number would just be padding.',
  },
  {
    question: 'What if scope changes mid-project?',
    answer:
      'It happens. Any change that expands the original scope gets a short, explicit add-on quote before I touch it - never a surprise on the final invoice.',
  },
  {
    // POLICY COMMITMENT — this promises specific behaviour if an engagement
    // ends early. It is the strongest trust signal on the page precisely
    // because it is concrete, so it must stay true to how you actually work.
    question: 'What if the build goes wrong?',
    answer:
      'You hold the code and the deploy access from the first milestone, not at handover, so you are never carrying an invoice with nothing to show for it. If we stop mid-build for any reason, you keep everything already paid for, plus a written handover of exactly where the work stands and what comes next. I would rather pass on a clean state than defend a balance.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, always, before any project details change hands. Most of my independent client work is confidential for exactly this reason.',
  },
  {
    question: 'What happens after the sprint ends?',
    answer:
      'You get the full handover - code, docs, deploy access. If you want ongoing work, we scope it as its own fixed-price engagement. No auto-renewing retainer.',
  },
  {
    question: 'Where are you based? What about timezone overlap?',
    answer:
      'Gurugram, India. I keep flexible hours to overlap with US, UK, and AU teams, so most clients get real-time collaboration, not async-only.',
  },
];

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Opens with a self-contained "X is Y" sentence naming the person, the role,
 * the studio, and the location. That is the sentence a search engine or an LLM
 * lifts to answer "who is Websyncr", so it should not need surrounding context
 * to make sense.
 */
export const aboutParagraphs: readonly string[] = [
  'I’m Dharmvir Dharmacharya, Founder & Lead Architect at Websyncr, a solo engineering studio based in Gurugram, India. There’s no bench of unnamed contractors - when we talk, you’re talking to the person who architects and builds your system, personally.',
  // Was a single 47-word sentence. Split at the natural pivot between the two
  // halves of the career, which is also the point the reader needs to pause.
  'Over six years I’ve worked both sides of this. As an independent contractor, shipping production apps for clients who need to stay confidential. As a technical lead and architect, building the platforms and AI systems inside a fast-moving company - including one used by 50+ enterprise clients.',
  'I take one engagement at a time, at a fixed scope and a fixed price, because ambiguity and divided attention are where projects die. You get a plan, a fixed number, and milestone check-ins until it ships.',
];

/** At-a-glance facts table on the About card. */
export const titleBlock: readonly [string, string][] = [
  ['Name', 'Dharmvir Dharmacharya'],
  ['Role', 'Founder & Lead Architect'],
  ['Studio', 'Websyncr'],
  ['Location', 'Gurugram, India'],
  ['Overlap', 'US / UK / AU hours'],
  ['Capacity', 'One project at a time'],
  ['Terms', '50% / 50%, fixed price'],
];

/* -------------------------------------------------------------------------- */
/* Contact — static, outbound-only                                            */
/* -------------------------------------------------------------------------- */

/** Fields collected by the on-page brief builder (composes a mailto). */
export const briefFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text' as const,
    placeholder: 'Your name',
    required: true,
    autoComplete: 'name',
  },
  {
    id: 'company',
    label: 'Company',
    type: 'text' as const,
    placeholder: 'Company or product name',
    required: false,
    autoComplete: 'organization',
  },
  {
    id: 'engagement',
    label: 'Engagement',
    type: 'select' as const,
    options: [
      'Discovery & Architecture Sprint',
      '3-Week MVP Sprint',
      'AI / RAG System Build',
      'Rescue Audit',
      'Not sure yet',
    ],
    required: true,
  },
  {
    id: 'brief',
    label: 'What needs building?',
    type: 'textarea' as const,
    placeholder:
      'Two or three sentences on the problem, the deadline that matters, and anything already built.',
    required: true,
  },
] as const;
