"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-chalk/95 backdrop-blur">
      <div className="container-shell flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Medway Digital home">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-medway text-lg font-black text-white">
            M
          </span>
          <span>
            <span className="block text-lg font-black leading-none tracking-normal text-ink">Medway Digital</span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
              Local website agency
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-white text-medway shadow-sm" : "text-ink/70 hover:bg-white/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-white md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav className="container-shell grid gap-2 pb-4 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
