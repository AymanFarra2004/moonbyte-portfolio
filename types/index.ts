export interface NavItem {
  label: string;
  href: string;
}

export interface UniverseStat {
  value: string;
  label: string;
}

export interface UniverseCardData {
  id: string;
  loc: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tag?: string;
  stats?: UniverseStat[];
  iconName?: string;
  colSpan?: number;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  badge?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features?: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}
