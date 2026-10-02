import {
  NavItem,
  UniverseCardData,
  CrewMember,
  ServiceItem,
  PortfolioProject,
  ContactInfo,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "WORLD", href: "#about" },
  { label: "CREW", href: "#crew" },
  { label: "BUILD", href: "#services" },
  { label: "PROJECTS", href: "#portfolio" },
  { label: "CONTACT", href: "#contact" },
];

export const UNIVERSE_CARDS: UniverseCardData[] = [
  {
    id: "moonbase",
    loc: "LOC // 01",
    title: "MOONBASE",
    subtitle: "CENTRAL COMMAND & STRATEGY",
    description:
      "Strategic discovery, brand vision mapping, and digital foundation architecture defining every project trajectory.",
    href: "#manifesto",
  },
  {
    id: "byte-district",
    loc: "LOC // 02",
    title: "BYTE DISTRICT",
    subtitle: "HAUTE-COUTURE INTERFACES",
    description:
      "Poetic spatial UI, typography-first art direction, and micro-delight aesthetics that command global recognition.",
    href: "#portfolio",
  },
  {
    id: "crew-station",
    loc: "LOC // 03",
    title: "CREW STATION",
    subtitle: "MULTIDISCIPLINARY COLLECTIVE",
    description:
      "The living laboratory where four hyper-specialized engineers and designers synchronize daily operations.",
    href: "#crew",
  },
  {
    id: "launch-pad",
    loc: "LOC // 04",
    title: "LAUNCH PAD",
    subtitle: "HIGH-PERFORMANCE DEPLOYMENT",
    description:
      "Automated CI/CD pipelines, edge caching, real-time telemetry, and resilient micro-architectures built for scale.",
    href: "#services",
    colSpan: 2,
    stats: [
      { label: "UPTIME METRIC", value: "99.99%" },
      { label: "LATENCY", value: "14ms" },
    ],
  },
  {
    id: "signal-center",
    loc: "LOC // 05",
    title: "SIGNAL CENTER",
    subtitle: "GLOBAL CLIENT HYPERLINK",
    description:
      "Direct telemetry uplink bridging visionary enterprises to our active production studio.",
    href: "#contact",
  },
];

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: "riwaa",
    name: "RIWAA",
    role: "THE GUARDIAN",
    description:
      "Security & Team Manager. Ensuring structural integrity, zero vulnerability vectors, and operational discipline across all digital transmissions.",
    image: "/images/moonbyte - riwaa.svg",
    alt: "Riwaa - The Guardian at Moonbyte",
  },
  {
    id: "yousef",
    name: "YOUSEF",
    role: "THE CREATOR",
    description:
      "UX/UI Designer. Crafting poetic spatial interfaces, atmospheric layouts, and typographic cadence that mesmerize audiences.",
    image: "/images/moonbyte - yousef.svg",
    alt: "Yousef - The Creator at Moonbyte",
  },
  {
    id: "ayman",
    name: "AYMAN",
    role: "THE BUILDER",
    description:
      "Frontend Developer. Translating complex kinetic motion, fluid mechanics, and micro-interactions into lightweight 60fps code.",
    image: "/images/moonbyte - ayman.svg",
    alt: "Ayman - The Builder at Moonbyte",
  },
  {
    id: "areej",
    name: "AREEJ",
    role: "THE ARCHITECT",
    description:
      "Backend Developer. Architecting resilient distributed engines, reactive event buses, and sub-millisecond cloud infrastructures.",
    image: "/images/moonbyte - areej.svg",
    alt: "Areej - The Architect at Moonbyte",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "BUSINESS WEBSITES",
    description:
      "Flagship corporate platforms engineered with mathematical precision, corporate authority, and headless CMS mastery.",
    features: [
      "Custom Architecture",
      "Multi-Region CDN",
      "Enterprise SEO Matrix",
    ],
  },
  {
    id: "portfolio-websites",
    number: "02",
    title: "PORTFOLIO WEBSITES",
    description:
      "Expressive, museum-grade portfolio exhibitions for pioneering architects, luxurydesigners, and world-class visionaries.",
    features: [
      "Kinetic Typography",
      "Fluid Transition Engines",
      "Curated Media Galleries",
    ],
  },
  {
    id: "landing-pages",
    number: "03",
    title: "LANDING PAGES",
    description:
      "High-velocity, narrative-driven conversion vehicles designed for hyper-growth venture launches and category kings.",
    features: [
      "Narrative Scrolltelling",
      "99+ Core Web Vitals",
      "Frictionless Flow Analytics",
    ],
  },
  {
    id: "custom-experiences",
    number: "04",
    title: "CUSTOM EXPERIENCES",
    description:
      "Immersive WebGL simulations, real-time spatial 3D environments, and audio reactive interactive installations.",
    features: [
      "Three.js / GLSL Shaders",
      "Real-time 3D Viewports",
      "Generative Audio Nodes",
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "onos",
    title: "ONOS",
    category: "Food Delivery System",
    description:
      "A seamless food delivery experience connecting customers, drivers, and restaurants.",
    image: "/images/portfolio-orol.png",
    badge: "MOBILE APP",
    ctaText: "VIEW CASE",
    ctaLink: "#",
  },
  {
    id: "carads-plus",
    title: "CarAds Plus",
    category: "Marketplace App",
    description:
      "A modern marketplace experience for buying and renting cars with ease.",
    image: "/images/portfolio-centra.png",
    badge: "MOBILE APP",
    ctaText: "VIEW CASE",
    ctaLink: "#",
  },
  {
    id: "ra-one",
    title: "RA-One",
    category: "Business Website",
    description:
      "A bilingual digital experience designed to bring a modern brand to life.",
    image: "/images/portfolio-bitone.png",
    badge: "WEBSITE",
    ctaText: "VIEW CASE",
    ctaLink: "#",
  },
];

export const CONTACT_INFO_LIST: ContactInfo[] = [
  {
    icon: "Mail",
    title: "Email",
    value: "hello@moonbyte.studio",
    link: "mailto:hello@moonbyte.studio",
  },
  {
    icon: "Phone",
    title: "Phone",
    value: "+970 59 716 3524",
    link: "tel:+970597163524",
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Gaza / Global Remote",
    link: "#",
  },
  {
    icon: "Clock",
    title: "Working Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM (GMT+2)",
  },
];
