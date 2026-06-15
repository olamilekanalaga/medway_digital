import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "secondary";
};

export function CtaButton({ href, children, tone = "primary" }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold shadow-sm transition ${
        tone === "primary"
          ? "bg-clay text-white hover:bg-clay/90"
          : "border border-ink/15 bg-white text-ink hover:border-medway/40 hover:text-medway"
      }`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
