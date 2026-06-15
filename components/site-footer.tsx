import Link from "next/link";
import { footerLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="text-xl font-black">Medway Digital</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
            Modern website design for local UK service businesses, founded by Olamilekan Alaga.
          </p>
        </div>
        <div className="grid gap-3 text-sm md:justify-self-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-semibold text-white/80 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
