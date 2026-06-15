import {
  BarChart3,
  CheckCircle2,
  Clock3,
  FileSearch,
  FormInput,
  Gem,
  Globe2,
  MapPinned,
  Paintbrush,
  PhoneCall,
  Search,
  Smartphone,
  Sparkles,
  WalletCards
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" }
];

export const serviceHighlights = [
  {
    title: "Website Design",
    description: "Clean, conversion-focused layouts for local trades and service firms.",
    icon: Paintbrush
  },
  {
    title: "Mobile Optimization",
    description: "Responsive pages that make it easy to call, enquire, and book from a phone.",
    icon: Smartphone
  },
  {
    title: "Contact Forms",
    description: "Simple enquiry forms with the right fields for service-based leads.",
    icon: FormInput
  },
  {
    title: "Google Business Integration",
    description: "Prominent map, call, and review pathways to support local discovery.",
    icon: MapPinned
  },
  {
    title: "Basic SEO Setup",
    description: "Page structure, metadata, headings, and local service keywords prepared properly.",
    icon: Search
  }
];

export const whyChooseUs = [
  { title: "Fast Delivery", description: "Clear scope and lightweight builds keep projects moving.", icon: Clock3 },
  { title: "Mobile Friendly", description: "Designed around how local customers actually browse.", icon: Smartphone },
  { title: "Modern Design", description: "Professional visuals that feel current without being overdone.", icon: Sparkles },
  { title: "Affordable Pricing", description: "Packages sized for small businesses and early growth.", icon: WalletCards }
];

export const sampleProjects = [
  {
    trade: "Plumber",
    company: "Kent Flow Plumbing",
    accent: "teal",
    summary: "Emergency-led layout with strong call buttons and service-area messaging."
  },
  {
    trade: "Electrician",
    company: "BrightLine Electrics",
    accent: "gold",
    summary: "Trust-first design for domestic and commercial electrical enquiries."
  },
  {
    trade: "Roofer",
    company: "Medway Roofcare",
    accent: "clay",
    summary: "Project-focused homepage with repair, inspection, and quote pathways."
  },
  {
    trade: "Accountant",
    company: "Harbour Books",
    accent: "moss",
    summary: "Calm professional design for tax, payroll, and small business support."
  },
  {
    trade: "Dentist",
    company: "River Dental Studio",
    accent: "blue",
    summary: "Patient-friendly design with clear treatment categories and appointment CTA."
  },
  {
    trade: "Cleaning Company",
    company: "FreshStart Cleaning",
    accent: "mint",
    summary: "Bright service-led concept for domestic, office, and end-of-tenancy cleaning."
  }
];

export const portfolioDetails = [
  {
    trade: "Plumbing company",
    company: "Kent Flow Plumbing",
    accent: "teal",
    decisions:
      "The concept prioritises urgent calls, leak repair, boiler servicing, and location coverage. The homepage makes contact options visible above the fold, while the services page groups jobs by customer intent."
  },
  {
    trade: "Roofing company",
    company: "Medway Roofcare",
    accent: "clay",
    decisions:
      "The design uses strong project imagery blocks, roof inspection messaging, and quote prompts. Service cards are arranged for scanning so homeowners can quickly identify repairs, flat roofing, guttering, or replacement work."
  },
  {
    trade: "Electrician company",
    company: "BrightLine Electrics",
    accent: "gold",
    decisions:
      "The layout builds confidence through certification-style trust cues, domestic and commercial pathways, and clear safety language. Mobile screens place phone and quote actions close to the top."
  },
  {
    trade: "Cleaning company",
    company: "FreshStart Cleaning",
    accent: "mint",
    decisions:
      "The concept feels clean and practical, with service categories for homes, offices, and move-out cleans. The mobile view simplifies booking details to reduce friction for quick enquiries."
  }
];

export const packages = [
  {
    name: "Starter Website",
    price: "From £___",
    description: "A focused online presence for new or very small local businesses.",
    icon: Globe2,
    features: ["1-3 core pages", "Mobile responsive layout", "Contact form", "Basic SEO setup"]
  },
  {
    name: "Business Website",
    price: "From £___",
    description: "A fuller site for businesses that need service pages and stronger lead capture.",
    icon: BarChart3,
    features: ["5-8 pages", "Service-area structure", "Google Business links", "Conversion-focused CTAs"]
  },
  {
    name: "Premium Website",
    price: "From £___",
    description: "A more complete build for businesses ready to look sharper and scale enquiries.",
    icon: Gem,
    features: ["Custom page sections", "Portfolio or case-study areas", "Enhanced SEO foundations", "Launch support"]
  }
];

export const trustSignals = [
  "Sample concepts shown transparently",
  "Built for UK local service businesses",
  "Clear packages with editable pricing",
  "No fake testimonials or client logos"
];

export const footerLinks = [
  { href: "/services", label: "Website packages" },
  { href: "/portfolio", label: "Sample concepts" },
  { href: "/contact", label: "Request a mockup" }
];

export const checklistIcon = CheckCircle2;
export const auditIcon = FileSearch;
export const phoneIcon = PhoneCall;
