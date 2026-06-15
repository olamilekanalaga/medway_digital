import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WebsiteMockup } from "@/components/website-mockup";

type PortfolioCardProps = {
  trade: string;
  company: string;
  accent: string;
  summary: string;
};

export function PortfolioCard({ trade, company, accent, summary }: PortfolioCardProps) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <WebsiteMockup company={company} trade={trade} accent={accent} />
      <div className="mt-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-clay">Sample Website Concept</p>
        <h3 className="mt-2 text-xl font-black text-ink">{company}</h3>
        <p className="mt-2 text-sm font-semibold text-medway">{trade}</p>
        <p className="mt-3 text-sm leading-6 text-ink/68">{summary}</p>
        <Link href="/portfolio" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-medway">
          View concept details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
