/**
 * All page copy. Verified facts only — no invented client, testimonial, or
 * metric, and no testimonials at all until real attributed quotes exist.
 */

export type Stat = { value: string; label: string };

export const stats: readonly Stat[] = [
  { value: '6+', label: 'Years senior full-stack & AI systems experience' },
  { value: '25+', label: 'Systems and products shipped to production across clients' },
  {
    value: '10+',
    label: 'Production AI systems - RAG, agents, and Claude-powered automation',
  },
  {
    value: '90%',
    label: 'Reduction in time-to-hire, on the AI platform he built for 50+ enterprise clients',
  },
  { value: '95+', label: 'Lighthouse performance on delivery - including this page' },
];

export const engagementModel = {
  headline: 'One build at a time. Yours, or someone else’s.',
  body: 'Every other quote on your desk comes from someone who will be working on two or five other things while they work on yours - an agency spreading a team across accounts, or a freelancer running parallel clients to make the month add up. Neither will say so on the call. Here the arithmetic is public: one build, one slot, one person, and a fixed price that leaves no reason to put a second client ahead of you. The person who scopes your system is the person who architects it, writes it, and hands it over. Care Plans are the one thing that runs alongside - maintaining a system that already shipped is not a project, so it never takes the slot.',
  points: [
    {
      title: 'No parallel work',
      description:
        'Your build is the only build. No second client is competing for the same hours, which is the only reason a three-week sprint takes three weeks and not a quarter.',
    },
    {
      title: 'No bench, no handoffs',
      description:
        'Nothing is subcontracted. No account manager, no project manager, and nobody more junior quietly picking it up when something urgent lands on another account.',
    },
    {
      title: 'You hold the code',
      description:
        'Code and deploy access are yours from the first milestone, not at handover. If we stop for any reason you keep everything already paid for, plus a written handover of where the work stands.',
    },
    {
      title: 'A date, or a no',
      description:
        'If I am mid-build when you reach out, you get the real start date on the call - not a deposit invoice and a place in a queue. If the timing does not work for you, I will say so.',
    },
  ],
} as const;

export type OfferGroupId = 'start' | 'build' | 'sustain';

export type Offer = {
  num: string;
  name: string;
  price: string;
  meta: string;
  tag: string | null;
  group: OfferGroupId;
  description: string;
  drivers?: readonly string[];
  terms: string;
};

export const offerGroups: readonly { id: OfferGroupId; title: string; note: string }[] = [
  { id: 'start', title: 'Start here', note: 'Before anyone quotes a number' },
  { id: 'build', title: 'Build', note: 'Fixed scope, fixed price, one at a time' },
  { id: 'sustain', title: 'Keep it running', note: 'After it ships' },
];

export const offersProof =
  '10+ production AI systems already shipped, including one used across 50+ enterprise clients.';

export const offers: readonly Offer[] = [
  {
    num: '01',
    name: 'Discovery & Architecture Sprint',
    price: '$2,500',
    meta: 'One week · fee credited to the build',
    tag: 'Start here',
    group: 'start',
    description:
      'A fixed quote on a system nobody has examined yet is a guess. One week buys the architecture, the scope, and a firm number. Go ahead and the fee comes off the build; walk away and you keep the spec.',
    terms: '100% up front · credited in full if you proceed',
  },
  {
    num: '02',
    name: 'Rescue Audit',
    price: '$3,500',
    meta: 'Five days · fixed fee',
    tag: null,
    group: 'start',
    description:
      'A stalled build gets a full read of the codebase, architecture, and deploy path, then a prioritised plan to ship it. No blame narrative and no rewrite-everything pitch. Remediation is quoted separately from what the audit finds.',
    terms: '100% up front · remediation quoted separately',
  },
  {
    num: '03',
    name: '3-Week MVP Sprint',
    price: 'From $22,000',
    meta: 'Three weeks · fixed scope',
    tag: null,
    group: 'build',
    description:
      'Idea to deployed product in three weeks. Full-stack build, no scope creep, no bench of subcontractors. Agencies quote $30,000-$55,000 for comparable fixed-price scope; the difference is overhead, not engineering.',
    drivers: [
      'How many third-party integrations and auth flows it has to carry',
      'Compliance obligations - SOC 2, HIPAA, GDPR, audit logging',
    ],
    terms: '50% to start · 50% on delivery',
  },
  {
    num: '04',
    name: 'AI Agent & Automation Build',
    price: 'From $35,000',
    meta: 'Three to six weeks · fixed scope',
    tag: null,
    group: 'build',
    description:
      'Agents that do the work, not just answer questions about it. Multi-step workflows that read your systems, take actions in them, and hand back to a human when they should. Claude-powered, with the tool calls, retries, and audit trail a production system actually needs.',
    drivers: [
      'How many systems the agent reads from and takes actions in',
      'Whether behaviour needs a formal eval harness or spot checks',
      'Compliance obligations - audit logging, data residency, pen-test support',
    ],
    terms: '50% to start · 50% on delivery',
  },
  {
    num: '05',
    name: 'AI / RAG System Build',
    price: 'From $45,000',
    meta: 'Four to eight weeks · fixed scope',
    tag: 'Most popular',
    group: 'build',
    description:
      'Production RAG pipelines, custom knowledge bases, and LLM integrations wired into the tools you already run on. Retrieval that is evaluated rather than assumed, and a system your team can operate after handover.',
    drivers: [
      'Document volume, and how many separate systems those documents live in',
      'How many integrations the retrieval layer has to reach into',
      'Whether retrieval needs a labelled eval set or spot checks',
      'Compliance obligations - SOC 2, HIPAA, GDPR, data residency',
    ],
    terms: '50% to start · 50% on delivery',
  },
  {
    num: '06',
    name: 'AI Systems Care Plan',
    price: '$3,500 – $6,000',
    meta: 'Per month · 3-month minimum · two clients maximum',
    tag: 'Ongoing',
    group: 'sustain',
    description:
      'An LLM system is not a set-and-forget asset. Models get deprecated, prompts drift, retrieval quality decays as your corpus grows, and API contracts change under you. This covers monitoring, evaluation, prompt and retrieval tuning, dependency and model upgrades, and a guaranteed response window when something breaks. Runs alongside an active build — maintenance is not a project, so it does not take the one slot.',
    terms: 'Monthly · 30 days notice · cancel any time after month three',
  },
];

export const hourlyRate = {
  rate: '$225/hr',
  note: 'Advisory, audits, and scoped fixes too small to run as a sprint. Fixed price is the default; this is the exception.',
} as const;

export type Capability = {
  name: string;
  years: string;
  description: string;
  stack: readonly string[];
};

export const capabilities: readonly Capability[] = [
  {
    name: 'AI & LLM Systems',
    years: '4+ yrs',
    description:
      'Retrieval-augmented generation over your own domain: document processing, custom knowledge bases, and LLM integrations that return answers you can trace back to a source. Includes chat agents that handle real inquiries, know when to stop, and hand off cleanly to a human.',
    stack: [
      'RAG pipelines',
      'Vector databases',
      'Prompt engineering',
      'LLM fine-tuning',
      'Multi-channel bots',
      'Human handoff',
      'Conversation analytics',
      'Continuous learning',
    ],
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
];

export type CaseStudy = { title: string; meta: string; description: string; href?: string };

export const independentWork: readonly CaseStudy[] = [
  {
    title: 'Food Delivery Marketplace Platform',
    meta: 'Confidential Client',
    description:
      'Vendor, customer, and delivery-partner apps on one platform - full CRM, automated WhatsApp ordering, and an automated finance dashboard.',
    href: '/case-studies/food-delivery-marketplace/',
  },
  {
    title: 'Omnichannel Hardware Commerce System',
    meta: 'Confidential Client',
    description:
      'A unified admin platform running in-store POS/kiosk and online ordering, plus a customer-facing mobile app.',
    href: '/case-studies/omnichannel-commerce/',
  },
];

export const enterpriseWork: readonly CaseStudy[] = [
  {
    title: 'EMB Talent Platform',
    meta: 'Technical Lead / Architect',
    description:
      'AI hiring platform used across 50+ enterprise clients. Cut time-to-hire by 90% against their previous process, and generated $6.8M+ in enterprise pipeline.',
    href: '/case-studies/emb-talent-platform/',
  },
  {
    title: 'AI Requirements / BRD Generator',
    meta: 'Technical Lead / Architect',
    description: 'RAG-based spec generation that cut client onboarding time by 60%.',
    href: '/case-studies/brd-generator/',
  },
  {
    title: 'Autonomous AI Dev Agent',
    meta: 'Confidential · In Production',
    description:
      'Agentic pipeline that codes, tests, deploys, and resolves feedback automatically from Jira and Slack.',
    href: '/case-studies/autonomous-dev-agent/',
  },
  {
    title: 'Artha CRM & Project Management Suite',
    meta: 'Technical Lead / Architect',
    description: 'Multi-tenant CRM managing $5M+ in active deals.',
    href: '/case-studies/artha-crm/',
  },
];

export type Testimonial = { quote: string; name: string; title: string; company: string };

export const testimonials: readonly Testimonial[] = [];

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

export type Faq = { question: string; answer: string };

export const faqs: readonly Faq[] = [
  {
    question: 'How much does it cost to build an AI or RAG system?',
    answer:
      'Here, from $45,000 for a production RAG system, and from $22,000 for a three-week full-stack MVP. For comparison, agencies quote $55,000 to $90,000 for a production RAG build and $30,000 to $55,000 for a fixed-price MVP. The gap is overhead rather than engineering: there is no account manager, no project manager, and no bench between you and the person writing the code.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Websyncr works with seed to Series A startups in the US and EU, typically five to fifty people, that have a document, retrieval, or workflow problem worth solving properly. The best fit is a founder or technical lead who wants one senior engineer accountable end to end rather than an agency team. It is a poor fit for pre-idea projects with no budget, for staff augmentation billed by the hour, and for anyone who needs a full delivery team rather than a single architect.',
  },
  {
    question: 'You only take one build at a time. What if you are already building something?',
    answer:
      'Then I tell you the real start date on the call. You go on a short list rather than paying a deposit to sit in a queue behind someone else, and if the timing genuinely does not work for you I will say so instead of stretching to fit. Care Plans are counted separately - maintaining a system that already shipped runs alongside a build, so an active Care Plan never blocks a new one.',
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
    question: 'Where does my data live during an AI build, and what happens to it afterwards?',
    answer:
      'The build runs in my environment while it is being written, then the whole system - application, vector store, embeddings, keys, and deploy pipeline - is migrated into your cloud account at handover, and it runs there from that point on. Your data is never used to train or fine-tune a model, and nothing is shared with any other client. Any working copy on my side is destroyed once handover is signed off, and I will confirm that in writing. If your compliance position requires the build to happen inside your perimeter from day one rather than at handover, that is doable - raise it in the discovery sprint, because it changes the architecture and the number.',
  },
  {
    question: 'What happens after the sprint ends?',
    answer:
      'You get the full handover - code, docs, deploy access. If you want ongoing work, we scope it as its own fixed-price engagement, or you move onto the AI Systems Care Plan for monitoring and maintenance. Neither is automatic and neither is assumed: nothing renews unless you ask for it.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. The Websyncr AI Systems Care Plan runs $3,500 to $6,000 per month and covers monitoring, evaluation, prompt and retrieval tuning, dependency and model upgrades, and a guaranteed response window when something breaks. It exists because an LLM system is not a set-and-forget asset: models get deprecated, prompts drift, and retrieval quality decays as the corpus grows. There is a three-month minimum and thirty days notice to cancel after that, and only two Care Plan clients are taken at a time so the response window stays real.',
  },
  {
    question: 'Where are you based? What about timezone overlap?',
    answer:
      'Gurugram, India. I keep flexible hours to overlap with US, UK, and AU teams, so most clients get real-time collaboration, not async-only.',
  },
];

export const aboutParagraphs: readonly string[] = [
  'I’m Dharmvir Dharmacharya, Founder & Lead Architect at Websyncr, a solo engineering studio based in Gurugram, India. There’s no bench of unnamed contractors - when we talk, you’re talking to the person who architects and builds your system, personally.',
  'Over six years I’ve worked both sides of this. As an independent contractor, shipping production apps for clients who need to stay confidential. As a technical lead and architect, building the platforms and AI systems inside a fast-moving company - including one used by 50+ enterprise clients.',
  'I take one build at a time, at a fixed scope and a fixed price, because ambiguity and divided attention are where projects die. You get a plan, a fixed number, and milestone check-ins until it ships.',
];

export type StudioFact = { label: string; value: string };

export const studioFacts: readonly (readonly StudioFact[])[] = [
  [
    { label: 'Location', value: 'Gurugram, India' },
    { label: 'Overlap', value: 'US / UK / AU' },
  ],
  [{ label: 'Capacity', value: 'One build at a time · up to 2 care plans' }],
  [{ label: 'Terms', value: '50% / 50%, fixed price' }],
];

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
      'AI Systems Care Plan',
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
