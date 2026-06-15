import { CheckCircle2, FileSearch, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CtaButton } from "@/components/cta-button";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { WebsiteMockup } from "@/components/website-mockup";
import { sampleProjects, serviceHighlights, trustSignals, whyChooseUs } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="bg-chalk">
        <div className="container-shell grid min-h-[calc(100vh-73px)] items-center gap-10 py-12 md:grid-cols-[1fr_0.9fr] md:py-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Medway Digital</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-ink md:text-7xl">
              Modern Websites for Local Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              We help plumbers, electricians, roofers, cleaners and local service businesses build a stronger online
              presence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/contact">Get a Free Website Mockup</CtaButton>
              <CtaButton href="/portfolio" tone="secondary">
                View Sample Concepts
              </CtaButton>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-sm font-semibold text-ink/72">
                  <CheckCircle2 className="h-4 w-4 text-moss" />
                  {signal}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <WebsiteMockup company="Kent Flow Plumbing" trade="Plumber" accent="teal" />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <FileSearch className="h-6 w-6 text-clay" />
                <p className="mt-3 text-sm font-bold text-ink">Local SEO foundations</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <PhoneCall className="h-6 w-6 text-medway" />
                <p className="mt-3 text-sm font-bold text-ink">Lead-ready contact paths</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Services" title="Useful website essentials, built properly">
            Medway Digital focuses on the practical features local customers need before they call, enquire, or request a
            quote.
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="rounded-lg border border-ink/10 bg-chalk p-5">
                <service.icon className="h-7 w-7 text-medway" />
                <h3 className="mt-4 text-lg font-black text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Why Choose Us" title="A fresh agency built around honest, practical delivery">
            No fake testimonials, no borrowed client logos, and no inflated claims. Just clear website concepts and
            focused builds for local businesses.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-5 shadow-sm">
                <item.icon className="h-7 w-7 text-clay" />
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Portfolio Preview" title="Sample Website Concepts">
              These are demonstration concepts for local business categories, created to show possible design direction.
            </SectionHeading>
            <CtaButton href="/portfolio" tone="secondary">
              See All Concepts
            </CtaButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sampleProjects.map((project) => (
              <PortfolioCard key={project.company} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="container-shell grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">About</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Built for local businesses that need clearer enquiries</h2>
          </div>
          <p className="text-lg leading-8 text-white/76">
            Founded by Olamilekan Alaga, Medway Digital helps local businesses improve their online presence with modern,
            professional websites designed to convert visitors into customers.
          </p>
        </div>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Contact" title="Get a free website mockup">
              Share your business details and Medway Digital can prepare a practical website concept tailored to your
              services.
            </SectionHeading>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
