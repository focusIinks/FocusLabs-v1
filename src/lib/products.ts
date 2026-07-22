export type ProductStatus =
  | "available"
  | "upcoming"
  | "maintenance"
  | "beta";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  rating: number;
  reviewCount: number;
  features: string[];
  techStack: string[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  gradient: string;
  accentColor: string;
  icon: string;
}

export const products: Product[] = [
  {
    slug: "focuslinks",
    name: "Focuslinks",
    tagline: "The Global Platform for Optometrists",
    description:
      "Focuslinks is a free, global platform designed exclusively for optometrists to connect, collaborate, and grow. Build your professional network, share clinical insights, discover career opportunities, and stay at the forefront of optometric practice — all in one powerful hub. Whether you're a student, practitioner, or researcher, Focuslinks brings the entire optometry community together.",
    status: "available",
    statusLabel: "Free & Available",
    rating: 4.8,
    reviewCount: 2840,
    features: [
      "Professional profile with clinical specializations",
      "Global directory of optometrists & clinics",
      "Real-time messaging & case discussions",
      "Job board & career opportunities",
      "Clinical case sharing with peer review",
      "Events & conference listings",
      "Continuing education tracker",
      "Community forums by sub-specialty",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "WebSocket"],
    ctaText: "Join Focuslinks Free",
    ctaHref: "https://focuslinks.net",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
    icon: "Link",
  },
  {
    slug: "focus-meet",
    name: "Focus Meet",
    tagline: "Optometrist Conference Tool",
    description:
      "Focus Meet is a purpose-built conferencing tool designed for optometrists. Host virtual case presentations, multi-doctor consultations, clinical webinars, and continuing education sessions with crystal-clear video, real-time screen sharing for retinal scans and OCT images, and integrated recording. Built by eye care professionals, for eye care professionals.",
    status: "upcoming",
    statusLabel: "Coming Soon",
    rating: 4.5,
    reviewCount: 320,
    features: [
      "HD video conferencing up to 50 participants",
      "Screen sharing optimized for medical imaging",
      "Real-time annotation on shared images",
      "Session recording & cloud storage",
      "Breakout rooms for group discussions",
      "Waiting room & host controls",
      "Calendar integration & scheduling",
      "End-to-end encryption",
    ],
    techStack: ["WebRTC", "Mediasoup", "Socket.IO", "React", "Node.js"],
    ctaText: "Get Early Access",
    ctaHref: "#",
    secondaryCtaText: "View Roadmap",
    secondaryCtaHref: "#",
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
    icon: "Video",
  },
  {
    slug: "focus-cast",
    name: "Focus Cast",
    tagline: "Optometry Podcasts & Live Streams",
    description:
      "Focus Cast is your go-to platform for optometry-focused audio and video content. Tune into expert interviews, clinical discussions, research breakdowns, and live Q&A sessions with leading optometrists and researchers worldwide. Whether you're commuting, studying, or relaxing, Focus Cast keeps you informed and inspired.",
    status: "maintenance",
    statusLabel: "Available After Aug 15",
    rating: 4.3,
    reviewCount: 580,
    features: [
      "Live streaming with real-time chat",
      "On-demand podcast library",
      "Expert interviews & panel discussions",
      "Clinical case study breakdowns",
      "Research paper reviews",
      "Subscriber notifications",
      "Downloadable episodes for offline listening",
      "Cross-platform accessibility",
    ],
    techStack: ["WebRTC", "FFmpeg", "React", "Node.js", "CDN"],
    ctaText: "Get Notified on Launch",
    ctaHref: "#",
    gradient: "from-orange-500 to-red-500",
    accentColor: "orange",
    icon: "Radio",
  },
  {
    slug: "rapd-simulator",
    name: "RAPD Simulator",
    tagline: "Relative Afferent Pupillary Defect Training",
    description:
      "Master the art of detecting Relative Afferent Pupillary Defects with our interactive simulator. Practice the swinging flashlight test in a realistic virtual environment, learn to identify subtle pupillary responses, and build clinical confidence before examining real patients. Used by optometry schools and students worldwide.",
    status: "maintenance",
    statusLabel: "Under Maintenance",
    rating: 4.6,
    reviewCount: 1200,
    features: [
      "Realistic swinging flashlight test simulation",
      "Multiple patient scenarios & difficulty levels",
      "Step-by-step guided tutorials",
      "Pupil response visualization in slow motion",
      "Clinical decision support & feedback",
      "Score tracking & progress analytics",
      "Mobile-friendly responsive design",
      "Academic institution licensing available",
    ],
    techStack: ["React", "Three.js", "WebGL", "TypeScript"],
    ctaText: "Join Waitlist",
    ctaHref: "#",
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "cyan",
    icon: "Eye",
  },
  {
    slug: "jcc-simulator",
    name: "JCC Simulator",
    tagline: "Jackson Cross Cylinder Technique Trainer",
    description:
      "Perfect your Jackson Cross Cylinder technique with our precision training simulator. Practice axis and power refinement in a controlled virtual environment, receive real-time feedback on your methodology, and track your improvement over time. An essential tool for every optometry student mastering refraction.",
    status: "maintenance",
    statusLabel: "Under Maintenance",
    rating: 4.7,
    reviewCount: 980,
    features: [
      "Interactive JCC lens flipping simulation",
      "Axis refinement training module",
      "Power refinement training module",
      "Real-time methodology feedback",
      "Multiple prescription scenarios",
      "Visual acuity chart simulation",
      "Detailed performance analytics",
      "Curriculum integration tools",
    ],
    techStack: ["React", "Canvas API", "TypeScript", "WebGL"],
    ctaText: "Join Waitlist",
    ctaHref: "#",
    gradient: "from-pink-500 to-rose-600",
    accentColor: "pink",
    icon: "Glasses",
  },
  {
    slug: "optoscholar",
    name: "Optoscholar",
    tagline: "AI-Powered Optometry Learning Platform",
    description:
      "Optoscholar is an AI-powered learning platform tailored for optometry students and professionals. Access curated study materials, practice questions, mock exams, and personalized learning paths. Our AI adapts to your knowledge level and learning pace, ensuring you focus on areas that need the most attention. Currently in beta — join the waitlist to be among the first to experience the future of optometry education.",
    status: "beta",
    statusLabel: "Join Beta Waitlist",
    rating: 4.4,
    reviewCount: 450,
    features: [
      "AI-adaptive learning paths",
      "Comprehensive question bank (10,000+ questions)",
      "Mock exams with detailed explanations",
      "Spaced repetition for long-term retention",
      "Performance analytics & weak area detection",
      "Peer study groups & discussion forums",
      "Flashcard system with images & diagrams",
      "Progress certificates & achievements",
    ],
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "React", "Node.js"],
    ctaText: "Join Beta Waitlist",
    ctaHref: "#",
    gradient: "from-amber-500 to-yellow-500",
    accentColor: "amber",
    icon: "GraduationCap",
  },
  {
    slug: "optolib",
    name: "OptoLib",
    tagline: "Complete Resources for Students & Learners",
    description:
      "OptoLib is your comprehensive digital library for optometry education. Access textbooks, research papers, clinical guidelines, lecture notes, and curated study resources — all organized, searchable, and available anytime, anywhere. From anatomy to clinical optics, OptoLib has everything you need to excel in your optometry journey.",
    status: "available",
    statusLabel: "Free & Available",
    rating: 4.9,
    reviewCount: 3200,
    features: [
      "Digital textbook library (500+ titles)",
      "Research paper database with summaries",
      "Clinical practice guidelines",
      "Organized by subject & topic",
      "Full-text search with smart filters",
      "Bookmarking & highlighting tools",
      "Offline reading mode",
      "Community-contributed notes & explanations",
    ],
    techStack: ["Next.js", "Elasticsearch", "PostgreSQL", "React", "S3"],
    ctaText: "Start Reading Free",
    ctaHref: "#",
    gradient: "from-teal-500 to-emerald-600",
    accentColor: "teal",
    icon: "BookOpen",
  },
  {
    slug: "focus-magazine",
    name: "Focus Magazine",
    tagline: "Stay Updated Every Single Day",
    description:
      "Focus Magazine delivers the latest in optometry and eye care news, research breakthroughs, clinical updates, industry trends, and expert opinions — updated daily. From new treatment modalities to practice management tips, Focus Magazine keeps you informed and ahead of the curve. Your daily dose of optometry, delivered fresh every morning.",
    status: "available",
    statusLabel: "Free & Available",
    rating: 4.6,
    reviewCount: 5100,
    features: [
      "Daily news updates & editorial content",
      "Research breakthrough summaries",
      "Clinical case of the week",
      "Industry trend analysis",
      "Expert opinion columns",
      "Product & equipment reviews",
      "Event coverage & reports",
      "Newsletter with personalized digest",
    ],
    techStack: ["Next.js", "React", "PostgreSQL", "RSS", "CDN"],
    ctaText: "Read Today's Issue",
    ctaHref: "#",
    gradient: "from-red-500 to-orange-500",
    accentColor: "red",
    icon: "Newspaper",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
