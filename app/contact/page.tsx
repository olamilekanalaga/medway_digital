import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free website concept from Medway Digital."
};

export default function ContactPage() {
  return (
    <section className="bg-chalk py-14 md:py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Contact" title="Request a Free Website Concept">
            Tell us about your business, your services, and what you want your website to help customers do.
          </SectionHeading>
          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
              <MapPin className="h-5 w-5 text-clay" />
              <span className="text-sm font-semibold text-ink/74">Serving local UK businesses from Medway</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
              <Mail className="h-5 w-5 text-medway" />
              <span className="text-sm font-semibold text-ink/74">hello@medwaydigital.co.uk</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
              <Phone className="h-5 w-5 text-moss" />
              <span className="text-sm font-semibold text-ink/74">Add phone number here</span>
            </div>
          </div>
        </div>
        <ContactForm compact />
      </div>
    </section>
  );
}
