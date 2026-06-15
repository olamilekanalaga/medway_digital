import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { WebsiteMockup } from "@/components/website-mockup";
import { portfolioDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sample website concepts for local UK service businesses by Medway Digital."
};

export default function PortfolioPage() {
  return (
    <section className="bg-chalk py-14 md:py-20">
      <div className="container-shell">
        <SectionHeading eyebrow="Portfolio" title="Detailed Sample Website Concepts">
          These mockups are not client projects. They are sample website concepts designed to show how Medway Digital can
          approach local service business websites.
        </SectionHeading>
        <div className="mt-12 grid gap-8">
          {portfolioDetails.map((item) => (
            <article key={item.company} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft md:p-7">
              <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-clay">Sample Website Concept</p>
                  <h2 className="mt-2 text-3xl font-black text-ink">{item.company}</h2>
                  <p className="mt-2 font-semibold text-medway">{item.trade}</p>
                  <p className="mt-5 text-base leading-7 text-ink/70">{item.decisions}</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.58fr]">
                  <div>
                    <p className="mb-2 text-sm font-black text-ink">Homepage screenshot</p>
                    <WebsiteMockup company={item.company} trade={item.trade} accent={item.accent} />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-black text-ink">Services page screenshot</p>
                    <WebsiteMockup company={item.company} trade={item.trade} accent={item.accent} variant="services" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-black text-ink">Mobile view screenshot</p>
                    <WebsiteMockup company={item.company} trade={item.trade} accent={item.accent} variant="mobile" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
