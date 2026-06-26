// Site configuration - reads from environment variables
// Set values in .env file locally, and in Vercel dashboard for production

export const site = {
  name: import.meta.env.PUBLIC_SITE_NAME || "Your Company",
  tagline: import.meta.env.PUBLIC_SITE_TAGLINE || "Your tagline here",
  description:
    import.meta.env.PUBLIC_SITE_DESCRIPTION ||
    "Your site description for SEO and meta tags",
  email: import.meta.env.PUBLIC_SITE_EMAIL || "hello@example.com",
  tallyFormId: import.meta.env.PUBLIC_TALLY_FORM_ID || "YOUR_FORM_ID",
  calcomLink:
    import.meta.env.PUBLIC_CALCOM_LINK || "your-username/meeting-type",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Book a Call" },
] as const;

export const services = [
  {
    title: "Business Websites",
    description:
      "Fast, modern, mobile-ready websites with lead forms, booking flows, and premium design — deployed and live in days.",
    icon: "globe" as const,
    details: [
      "Custom Astro + Tailwind sites (fast & SEO-friendly)",
      "Lead capture forms and calendar booking integration",
      "Dark mode, animations, and mobile-first layouts",
      "GitHub + Vercel deployment with zero server costs",
    ],
  },
  {
    title: "AI Chatbot Integration",
    description:
      "Intelligent chatbots for your website — answer customer questions, capture leads, and support visitors 24/7.",
    icon: "message-circle" as const,
    details: [
      "Website chat widgets with branded UI",
      "Preset FAQ flows and lead qualification",
      "RAG-powered answers from your company docs",
      "Handoff to human or booking when needed",
    ],
  },
  {
    title: "Data Extraction & Pipelines",
    description:
      "Turn PDFs, receipts, and unstructured documents into clean, validated JSON ready for your warehouse.",
    icon: "file-json" as const,
    details: [
      "OCR and document parsing pipelines",
      "Schema validation and data quality checks",
      "Warehouse-ready ETL outputs",
    ],
  },
  {
    title: "Enterprise Knowledge Search",
    description:
      "RAG-powered search across your internal docs — policies, SOPs, and institutional knowledge.",
    icon: "search" as const,
    details: [
      "RAG architecture design and deployment",
      "Vector search across internal documents",
      "Secure, permission-aware retrieval",
    ],
  },
  {
    title: "GenAI Strategy & Implementation",
    description:
      "From proof-of-concept to production: LLM integrations, agents, and prompt systems that ship.",
    icon: "sparkles" as const,
    details: [
      "LLM integration strategy and roadmaps",
      "Agent workflows and tool orchestration",
      "Production monitoring and cost optimization",
    ],
  },
] as const;

export const clientLogos = [
  { name: "CloudPulse", abbr: "CP" },
  { name: "Acme Advisory", abbr: "AA" },
  { name: "Urban Style Co.", abbr: "US" },
  { name: "NexaFin", abbr: "NF" },
  { name: "Bella Vista", abbr: "BV" },
  { name: "DataForge", abbr: "DF" },
] as const;

export const testimonials = [
  {
    quote:
      "They delivered our entire website in under a week. The design looks premium, loads instantly, and we booked our first client call within 48 hours of going live.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Acme Advisory Group",
    initials: "SC",
    service: "Business Website",
    rating: 5,
  },
  {
    quote:
      "The AI chatbot they built handles 40% of our support questions automatically. Our team finally has time to focus on complex customer issues instead of repeating FAQs.",
    name: "Marcus Rivera",
    role: "Head of Operations",
    company: "Urban Style Co.",
    initials: "MR",
    service: "AI Chatbot",
    rating: 5,
  },
  {
    quote:
      "We went from manually processing thousands of invoices to a fully automated pipeline. The ROI was visible within the first month — this paid for itself fast.",
    name: "Priya Sharma",
    role: "CTO",
    company: "CloudPulse",
    initials: "PS",
    service: "Data Pipeline",
    rating: 5,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your goals, audience, and technical needs in a free 30-minute strategy session.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Build & Demo",
    description:
      "Working prototype in days — website, chatbot, or data pipeline you can see and test before committing.",
    icon: "hammer",
  },
  {
    step: "03",
    title: "Launch & Support",
    description:
      "Deployed to production with documentation, handoff, and optional ongoing support.",
    icon: "rocket",
  },
] as const;

export const techStack = [
  "Astro",
  "TailwindCSS",
  "Vercel",
  "Python",
  "OpenAI",
  "RAG",
  "PostgreSQL",
  "GitHub",
] as const;

export const caseStudies = [
  {
    title: "Consulting Firm Website Launch",
    client: "Boutique advisory startup",
    result:
      "Delivered a full lead-gen website with booking flow and live demos in 5 days — first client call booked within 48 hours of launch.",
    tags: ["Websites", "Lead Gen", "Vercel"],
  },
  {
    title: "AI Support Chatbot for E-commerce",
    client: "Online retail brand",
    result:
      "Deployed a grounded website chatbot that deflects 40% of tier-1 support tickets with accurate product and shipping answers.",
    tags: ["Chatbots", "GenAI", "Support"],
  },
  {
    title: "Invoice Processing Automation",
    client: "Mid-size SaaS company",
    result:
      "Reduced manual data entry by 85% with an extraction pipeline handling 12K invoices/month.",
    tags: ["Data Engineering", "OCR", "ETL"],
  },
  {
    title: "Internal Knowledge Base Search",
    client: "Professional services firm",
    result:
      "Employees find HR and policy answers in seconds instead of searching 200+ PDF documents.",
    tags: ["RAG", "GenAI", "Search"],
  },
] as const;
