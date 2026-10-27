export interface ModuleDetail {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  color: string;
  icon: string;
  iconBg: string;
  description: string;
  features: string[];
  devices: string[];
  speech: string;
  waText: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  basePrice: number;
  popular?: boolean;
  highlightBadge?: string;
  features: {
    text: string;
    highlight?: boolean;
  }[];
  btnColor: string;
  borderColor: string;
}

export interface SaasItem {
  id: string;
  tabTitle: string;
  icon: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  demoUrl: string;
  waText: string;
  footerNoteTitle: string;
  footerNoteSub: string;
}

export interface SoftiBotOption {
  text: string;
  key: string;
  icon: string;
}

export interface SoftiBotCategory {
  question: string;
  options: SoftiBotOption[];
}

export interface SoftiBotAnswer {
  answer: string;
  waText: string;
}

export interface SelectedPlanQuote {
  name: string;
  basePrice: number;
  color: string;
}
