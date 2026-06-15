const accentMap: Record<string, { bg: string; text: string; soft: string }> = {
  teal: { bg: "bg-medway", text: "text-medway", soft: "bg-medway/10" },
  gold: { bg: "bg-amber-500", text: "text-amber-700", soft: "bg-amber-100" },
  clay: { bg: "bg-clay", text: "text-clay", soft: "bg-clay/10" },
  moss: { bg: "bg-moss", text: "text-moss", soft: "bg-moss/10" },
  blue: { bg: "bg-sky-600", text: "text-sky-700", soft: "bg-sky-100" },
  mint: { bg: "bg-emerald-500", text: "text-emerald-700", soft: "bg-emerald-100" }
};

type WebsiteMockupProps = {
  company: string;
  trade: string;
  accent: string;
  variant?: "home" | "services" | "mobile";
};

export function WebsiteMockup({ company, trade, accent, variant = "home" }: WebsiteMockupProps) {
  const color = accentMap[accent] ?? accentMap.teal;
  const isMobile = variant === "mobile";

  return (
    <div
      className={`overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft ${
        isMobile ? "mx-auto max-w-[230px]" : ""
      }`}
      aria-label={`${company} ${variant} mockup`}
    >
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-ink/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-clay" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-moss" />
        <span className="ml-2 h-4 flex-1 rounded bg-white" />
      </div>
      <div className={`p-4 ${isMobile ? "space-y-3" : "space-y-4"}`}>
        <div className="flex items-center justify-between gap-3">
          <div className={`h-7 w-24 rounded ${color.bg}`} />
          {!isMobile ? <div className="hidden gap-2 sm:flex">{[1, 2, 3].map((n) => <span key={n} className="h-2 w-12 rounded bg-ink/15" />)}</div> : null}
        </div>
        {variant === "services" ? (
          <div className="grid gap-3">
            <div className={`rounded-md ${color.soft} p-4`}>
              <div className="h-4 w-2/3 rounded bg-ink/70" />
              <div className="mt-3 h-2 w-full rounded bg-ink/20" />
              <div className="mt-2 h-2 w-4/5 rounded bg-ink/15" />
            </div>
            <div className={`grid gap-3 ${isMobile ? "" : "grid-cols-3"}`}>
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-md border border-ink/10 p-3">
                  <div className={`h-8 w-8 rounded ${color.bg}`} />
                  <div className="mt-3 h-3 rounded bg-ink/60" />
                  <div className="mt-2 h-2 rounded bg-ink/15" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`grid gap-4 ${isMobile ? "" : "sm:grid-cols-[1.2fr_0.8fr]"}`}>
            <div>
              <div className={`inline-flex rounded ${color.soft} px-2 py-1 text-[10px] font-black uppercase ${color.text}`}>
                {trade}
              </div>
              <div className="mt-3 h-7 w-5/6 rounded bg-ink" />
              <div className="mt-2 h-7 w-2/3 rounded bg-ink" />
              <div className="mt-4 h-2 w-full rounded bg-ink/20" />
              <div className="mt-2 h-2 w-4/5 rounded bg-ink/15" />
              <div className="mt-4 flex gap-2">
                <div className={`h-9 w-24 rounded ${color.bg}`} />
                <div className="h-9 w-20 rounded border border-ink/15" />
              </div>
            </div>
            <div className={`min-h-32 rounded-md ${color.soft} p-3`}>
              <div className="h-20 rounded bg-white/80" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <span className="h-10 rounded bg-white/80" />
                <span className="h-10 rounded bg-white/80" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
