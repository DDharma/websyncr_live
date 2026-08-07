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
    label: 'Production AI systems — RAG, agents, and Claude-powered automation',
  },
  { value: '90%', label: 'Reduction in time-to-hire on the AI hiring platform we built' },
  { value: '95+', label: 'Lighthouse performance on delivery, this page included' },
];

export const engagementModel = {
  headline: 'One build at a time. Yours, or someone else’s.',
  body: 'Every other quote on your desk comes from someone who will be working on two or five other things while they work on yours, an agency spreading a team across accounts, or a freelancer running parallel clients to make the month add up. Neither will say so on the call. Here you can count it yourself — one build, one slot, and a fixed price that gives nobody a reason to put another client ahead of you. Whoever scopes your system is the same person who architects it, writes it, and hands it over. Care Plans are the one thing that runs alongside a build. Maintaining a system that already shipped is not a project, so it never takes the slot.',
  points: [
    {
      title: 'No parallel work',
      description:
        'Your build is the only build. No second client is competing for the same hours, which is the only reason a three-week sprint really does take three weeks.',
    },
    {
      title: 'No bench, no handoffs',
      description:
        'Nothing is subcontracted. You will not meet an account manager, and nobody more junior quietly picks the work up when something urgent lands on another account.',
    },
    {
      title: 'You hold the code',
      description:
        'Code and deploy access are yours from the first milestone onward. If we stop for any reason you keep everything already paid for, plus a written handover of where the work stands.',
    },
    {
      title: 'A date, or a no',
      description:
        'If I am mid-build when you reach out, you get the real start date on the call, instead of a deposit invoice and a place in a queue. And if that timing does not work for you, I will say so.',
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
      'A fixed quote on a system nobody has opened yet is a guess. One week buys you the architecture, the scope, and a number I will stand behind. Go ahead and the fee comes off the build, walk away and you keep the spec.',
    terms: '50% to start · 50% on delivery · credited in full if you proceed',
  },
  {
    num: '02',
    name: 'Rescue Audit',
    price: '$3,500',
    meta: 'Five days · fixed fee',
    tag: null,
    group: 'start',
    description:
      'A stalled build gets a full read of the codebase, architecture, and deploy path, then a prioritised plan to get it shipped. You will not get a blame narrative or a pitch to rewrite the whole thing. Remediation is quoted separately from whatever the audit turns up.',
    terms: '50% to start · 50% on delivery · remediation quoted separately',
  },
  {
    num: '03',
    name: '3-Week MVP Sprint',
    price: 'From $22,000',
    meta: 'Three weeks · fixed scope',
    tag: null,
    group: 'build',
    description:
      'Idea to deployed product in three weeks. A full-stack build with the scope locked on day one and nothing subcontracted out. Agencies quote $30,000-$55,000 for comparable fixed-price scope. The extra covers their overhead.',
    drivers: [
      'How many third-party integrations and auth flows it has to carry',
      'Compliance obligations like SOC 2, HIPAA, GDPR, and audit logging',
    ],
    terms: '50% to start · balance across agreed milestones',
  },
  {
    num: '04',
    name: 'AI Agent & Automation Build',
    price: 'From $35,000',
    meta: 'Three to six weeks · fixed scope',
    tag: null,
    group: 'build',
    description:
      'Agents that actually do the work instead of answering questions about it. Multi-step workflows that read your systems, take actions in them, and hand back to a human when they should. Claude-powered, with the tool calls, retries, and audit trail a production system needs.',
    drivers: [
      'How many systems the agent reads from and takes actions in',
      'Whether behaviour needs a formal eval harness or spot checks',
      'Compliance obligations like audit logging, data residency, and pen-test support',
    ],
    terms: '50% to start · balance across agreed milestones',
  },
  {
    num: '05',
    name: 'AI / RAG System Build',
    price: 'From $45,000',
    meta: 'Four to eight weeks · fixed scope',
    tag: 'Most popular',
    group: 'build',
    description:
      'Production RAG pipelines, custom knowledge bases, and LLM integrations wired into the tools you already run on. Retrieval that gets measured rather than assumed, and a system your team can operate once I hand it over.',
    drivers: [
      'Document volume, and how many separate systems those documents live in',
      'How many integrations the retrieval layer has to reach into',
      'Whether retrieval needs a labelled eval set or spot checks',
      'Compliance obligations like SOC 2, HIPAA, GDPR, and data residency',
    ],
    terms: '50% to start · balance across agreed milestones',
  },
  {
    num: '06',
    name: 'AI Systems Care Plan',
    price: '$3,500 – $6,000',
    meta: 'Per month · 3-month minimum · two clients maximum',
    tag: 'Ongoing',
    group: 'sustain',
    description:
      'An LLM system needs looking after. Models get deprecated, prompts drift, retrieval quality decays as your corpus grows, and API contracts change under you. This covers monitoring, evaluation, prompt and retrieval tuning, dependency and model upgrades, and a guaranteed response window when something breaks. It runs alongside an active build, because maintenance is not a project and does not take the one slot.',
    terms: 'Monthly · 30 days notice · cancel any time after month three',
  },
];

export const hourlyRate = {
  rate: '$225/hr',
  note: 'Advisory, audits, and scoped fixes too small to run as a sprint. Fixed price is the default everywhere else, this is the exception.',
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
      'Retrieval-augmented generation over your own domain, built from document processing, custom knowledge bases, and LLM integrations that return answers you can trace back to a source. It also covers chat agents that handle real inquiries, know when to stop, and hand off cleanly to a human.',
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
      'Production web apps built for the numbers that matter after launch. Fast, accessible, typed end to end, and shipped with the deploy pipeline already working.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Mobile Applications',
    years: '3+ yrs',
    description:
      'Cross-platform iOS and Android from one codebase, including the parts teams usually discover late — store submission, native permissions, and offline behaviour.',
    stack: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    name: 'Cloud & Infrastructure',
    years: '2+ yrs',
    description:
      'AWS infrastructure sized to what you actually run rather than to a reference architecture. Provisioning, hardening, and cost work on existing accounts as well as new ones.',
    stack: ['EC2', 'S3', 'RDS', 'Route 53', 'Amplify'],
  },
];

export type CaseStudy = { title: string; meta: string; description: string; href?: string };

export const independentWork: readonly CaseStudy[] = [
  {
    title: 'Food Delivery Marketplace Platform',
    meta: 'Confidential Client',
    description:
      'Vendor, customer, and delivery-partner apps on one platform, with a full CRM, WhatsApp ordering, and an automated finance dashboard.',
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
      'AI hiring platform used across 50+ enterprise clients. Cut time-to-hire by 90% against their previous process and generated $6.8M+ in enterprise pipeline.',
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
    description: '20 minutes, free. We talk through your problem instead of running a sales script.',
  },
  {
    num: '02',
    title: 'Scope & Fixed Quote',
    description:
      'Small builds get a fixed number in 24-48 hours. Anything with real unknowns starts with the paid discovery sprint, so the quote is based on the system as it really is.',
  },
  {
    num: '03',
    title: '50% Deposit',
    description: 'Work starts once the deposit clears, so both sides know where things stand.',
  },
  {
    num: '04',
    title: 'Milestone Check-ins',
    description:
      'You see the build as it happens, week by week. The balance releases against these milestones rather than sitting in one lump until handover.',
  },
  {
    num: '05',
    title: 'Final Milestone & Handover',
    description: 'The last milestone clears on delivery. You get the code, the docs, and the keys.',
  },
];

export type Faq = { question: string; answer: string };

export const faqs: readonly Faq[] = [
  {
    question: 'How much does it cost to build an AI or RAG system?',
    answer:
      'From $45,000 for a production RAG system, and from $22,000 for a three-week full-stack MVP. Agencies quote $55,000 to $90,000 for a comparable RAG build and $30,000 to $55,000 for a fixed-price MVP. The difference is overhead rather than engineering. There is no account manager and no bench sitting between you and the person writing the code.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Websyncr works with seed to Series A startups in the US and EU, usually five to fifty people, sitting on a document, retrieval, or workflow problem that deserves a proper build. The best fit is a founder or technical lead who wants one senior engineer accountable from end to end. It is a poor fit for pre-idea projects with no budget, for staff augmentation billed by the hour, and for anyone who needs a full delivery team behind them.',
  },
  {
    question: 'You only take one build at a time. What if you are already building something?',
    answer:
      'Then I tell you the real start date on the call. You go on a short list, and nobody asks you for a deposit to sit in a queue behind someone else. If the timing genuinely does not work for you, I will tell you straight. Care Plans are counted separately, because maintaining a system that already shipped runs alongside a build and never blocks a new one.',
  },
  {
    question: 'Why does discovery cost money?',
    answer:
      'Because nobody can put a firm number on a system they have not opened yet, and a wrong number gets corrected later out of your budget. One week of paid discovery buys the architecture, the scope, and a figure I will hold to, and the fee comes off the build if you go ahead. If you do not, the spec is yours to take anywhere.',
  },
  {
    question: 'Why fixed price instead of hourly?',
    answer:
      'Hourly billing rewards slow work. A fixed price means the scope is already thought through and we both want the same thing, which is to ship it well and ship it once. Hourly exists only for advisory and small scoped fixes, where a fixed number would just be padding.',
  },
  {
    question: 'What if scope changes mid-project?',
    answer:
      'It happens. Any change that expands the original scope gets a short add-on quote before I touch it, so nothing surprising turns up on the final invoice.',
  },
  {
    question: 'What if the build goes wrong?',
    answer:
      'You hold the code and the deploy access from the first milestone, not at handover, so you are never carrying an invoice with nothing to show for it. If we stop mid-build for any reason, you keep everything already paid for, plus a written note of exactly where the work stands and what comes next. I would rather pass on a clean state than defend a balance.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, always, before any project details change hands. Most of my independent client work is confidential for exactly this reason.',
  },
  {
    question: 'Where does my data live during an AI build, and what happens to it afterwards?',
    answer:
      'The build runs in my environment while it is being written. At handover the whole system — application, vector store, embeddings, keys, and deploy pipeline — moves into your cloud account and runs there from that point on. Your data is never used to train or fine-tune a model, and nothing is shared with any other client. Any working copy on my side is destroyed once handover is signed off, and I will confirm that in writing. If your compliance position needs the build to sit inside your perimeter from day one, that is doable. Raise it in the discovery sprint, because it changes the architecture and the number.',
  },
  {
    question: 'What happens after the sprint ends?',
    answer:
      'You get the full handover, including deploy access. If you want ongoing work, we scope it as its own fixed-price engagement, or you move onto the AI Systems Care Plan for monitoring and maintenance. Nothing renews on its own, you have to ask for it.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. The Websyncr AI Systems Care Plan runs $3,500 to $6,000 per month and covers monitoring, evaluation, prompt and retrieval tuning, dependency and model upgrades, and a guaranteed response window when something breaks. It exists because models get deprecated, prompts drift, and retrieval quality decays as the corpus grows. There is a three-month minimum and thirty days notice to cancel after that, and I only take two Care Plan clients at a time so the response window stays real.',
  },
  {
    question: 'Where are you based? What about timezone overlap?',
    answer:
      'Gurugram, India. I keep flexible hours to overlap with US, UK, and AU teams, so most clients get real-time collaboration instead of an async-only relationship.',
  },
];

export const aboutParagraphs: readonly string[] = [
  'I’m Dharmvir Dharmacharya, Founder & Lead Architect at Websyncr, a solo engineering studio based in Gurugram, India. When we talk, you are talking to the person who will architect and build your system, personally.',
  'Over six years I’ve worked both sides of this. As an independent contractor I shipped production apps for clients who needed to stay confidential. As a technical lead and architect I built the platforms and AI systems inside a fast-moving company, one of which is now used by 50+ enterprise clients.',
  'I take one build at a time, at a fixed scope and a fixed price, because ambiguity and divided attention are where projects die. You get a plan, a number, and milestone check-ins until it ships.',
];

export type StudioFact = { label: string; value: string };

export const studioFacts: readonly (readonly StudioFact[])[] = [
  [
    { label: 'Location', value: 'Gurugram, India' },
    { label: 'Overlap', value: 'US / UK / AU' },
  ],
  [{ label: 'Capacity', value: 'One build at a time · up to 2 care plans' }],
  [{ label: 'Terms', value: 'Milestone-based, fixed price' }],
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
