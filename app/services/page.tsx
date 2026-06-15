import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { packages, serviceHighlights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Editable website packages for local businesses: Starter Website, Business Website, and Premium Website."
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-chalk py-14 md:py-20">
        <div className="container-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading eyebrow="Services" title="Website packages for local businesses">
            Choose a starting point, then adjust the scope around your business goals, service areas, and lead capture
            needs.
          </SectionHeading>
          <p className="text-base leading-7 text-ink/70">
            Pricing is intentionally left as editable placeholders for the MVP. Each package can be updated later with
            fixed prices, payment plans, or custom quote language.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-shell grid gap-5 lg:grid-cols-3">
          {packages.map((pack) => (
            <article key={pack.name} className="rounded-lg border border-ink/10 bg-chalk p-6 shadow-sm">
              <pack.icon className="h-8 w-8 text-medway" />
              <h2 className="mt-5 text-2xl font-black text-ink">{pack.name}</h2>
              <p className="mt-3 text-3xl font-black text-clay">{pack.price}</p>
              <p className="mt-4 min-h-16 text-sm leading-6 text-ink/68">{pack.description}</p>
              <ul className="mt-6 grid gap-3">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm font-semibold text-ink/76">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-chalk py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading eyebrow="Included Foundations" title="Every build starts with the basics customers expect">
            The MVP package structure is designed around practical outcomes: clearer service pages, mobile contact paths,
            local search structure, and forms that help turn visitors into enquiries.
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="rounded-lg bg-white p-5 shadow-sm">
                <service.icon className="h-7 w-7 text-clay" />
                <h3 className="mt-4 text-lg font-black text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <CtaButton href="/contact">Request a Free Website Concept</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
