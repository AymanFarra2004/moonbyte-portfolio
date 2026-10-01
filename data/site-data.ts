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
      "Tailored corporate and enterprise platforms that project authority and convert visitors into loyal clients.",
    features: ["Custom Architecture", "High Conversion", "Enterprise Security"],
  },
  {
    id: "portfolio-websites",
    number: "02",
    title: "PORTFOLIOS & STUDIOS",
    description:
      "Immersive, expressive portfolios designed for artists, studios, and pioneers ready to lead their industries.",
    features: ["Bespoke Visuals", "Fluid Motion", "Interactive Showcases"],
  },
  {
    id: "landing-pages",
    number: "03",
    title: "LANDING PAGES",
    description:
      "High-velocity, hyper-focused pages architected to drive exponential growth and maximize conversions.",
    features: ["A/B Ready", "Ultra-fast LCP", "Analytics Integration"],
  },
  {
    id: "custom-experiences",
    number: "04",
    title: "CUSTOM EXPERIENCES",
    description:
      "Bespoke spatial digital experiences, interactive micro-sites, and bleeding-edge web applications.",
    features: ["3D Interactivity", "WebGL / Motion", "Creative Engineering"],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "orol",
    title: "OROL",
    category: "Mobile App & Delivery Platform",
    description:
      "Modern food delivery and lifestyle ordering platform crafted for intuitive UX and streamlined mobile checkout.",
    image: "/images/portfolio-orol.png",
    ctaText: "VIEW CASE",
    ctaLink: "#",
    badge: "Mobile UI/UX",
  },
  {
    id: "centra-plus",
    title: "Centra Plus",
    category: "Automotive Telemetry App",
    description:
      "A luxury automotive companion mobile experience enabling real-time telemetry, vehicle control, and booking.",
    image: "/images/portfolio-centra.png",
    ctaText: "VIEW CASE",
    ctaLink: "#",
    badge: "Automotive",
  },
  {
    id: "bit-one",
    title: "Bit-One",
    category: "Fintech & Web3 Terminal",
    description:
      "Cutting-edge crypto trading intelligence dashboard with real-time streaming analytics and global order flow.",
    image: "/images/portfolio-bitone.png",
    ctaText: "VIEW CASE",
    ctaLink: "#",
    badge: "Fintech Web3",
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
