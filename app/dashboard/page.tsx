import type { Metadata } from "next";
import { Download, Filter, Plus, Search, Upload } from "lucide-react";
import { createLeadAction, updateLeadStatusAction } from "@/app/dashboard/actions";
import { getLeadFacets, listLeads } from "@/lib/leads";

export const metadata: Metadata = {
  title: "Lead Dashboard",
  description: "Internal local business lead dashboard for Medway Digital outreach."
};

type DashboardPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getParam(params: Record<string, string | string[] | undefined>, key: string) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const params = (await searchParams) ?? {};
  const q = getParam(params, "q") ?? "";
  const category = getParam(params, "category") ?? "All";
  const status = getParam(params, "status") ?? "All";
  const leads = listLeads({ query: q, category, contactedStatus: status });
  const facets = getLeadFacets();
  const exportHref = `/api/leads/export?${new URLSearchParams({ q, category, status }).toString()}`;

  return (
    <section className="bg-chalk py-8 md:py-12">
      <div className="container-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Internal Tool</p>
            <h1 className="mt-2 text-4xl font-black text-ink md:text-5xl">Local Business Lead Dashboard</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-ink/70">
              Track outreach opportunities for plumbers, electricians, roofers, cleaners and other local businesses.
            </p>
          </div>
          <a
            href={exportHref}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-bold text-white"
          >
            <Download size={17} />
            Export CSV
          </a>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
          <div className="grid gap-5">
            <form action={createLeadAction} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-medway" />
                <h2 className="text-xl font-black text-ink">Add Business Lead</h2>
              </div>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-bold text-ink">
                  Business Name
                  <input name="businessName" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" required />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    Category
                    <input name="category" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" placeholder="Plumber" required />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    Location
                    <input name="location" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" placeholder="Medway" required />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-bold text-ink">
                  Website Status
                  <select name="websiteStatus" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" required>
                    <option>No website found</option>
                    <option>Outdated website</option>
                    <option>Facebook only</option>
                    <option>Has modern website</option>
                    <option>Unknown</option>
                  </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    Rating
                    <input name="rating" type="number" min="0" max="5" step="0.1" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    Reviews
                    <input name="reviews" type="number" min="0" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-ink">
                    Lead Score
                    <input name="leadScore" type="number" min="0" max="100" defaultValue="50" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal" />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-bold text-ink">
                  Contacted Status
                  <select name="contactedStatus" className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal">
                    {facets.statuses.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <button className="focus-ring min-h-11 rounded-md bg-medway px-4 py-3 text-sm font-bold text-white">
                  Save Lead
                </button>
              </div>
            </form>

            <form
              action="/api/leads/import"
              method="post"
              encType="multipart/form-data"
              className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-clay" />
                <h2 className="text-xl font-black text-ink">Import CSV</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/66">
                Accepts columns such as Business Name, Category, Location, Website Status, Rating, Reviews, Lead Score,
                and Contacted Status.
              </p>
              <input
                type="file"
                name="file"
                accept=".csv,text/csv"
                className="mt-5 block w-full rounded-md border border-ink/15 bg-white px-3 py-2 text-sm"
                required
              />
              <button className="focus-ring mt-4 min-h-11 rounded-md bg-clay px-4 py-3 text-sm font-bold text-white">
                Import Leads
              </button>
            </form>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white shadow-sm">
            <form className="grid gap-4 border-b border-ink/10 p-5 lg:grid-cols-[1fr_180px_180px_auto] lg:items-end">
              <label className="grid gap-2 text-sm font-bold text-ink">
                Search
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                  <input
                    name="q"
                    defaultValue={q}
                    className="focus-ring w-full rounded-md border border-ink/15 py-2 pl-9 pr-3 font-normal"
                    placeholder="Business, category, location"
                  />
                </div>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Category
                <select name="category" defaultValue={category} className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal">
                  <option>All</option>
                  {facets.categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Contacted
                <select name="status" defaultValue={status} className="focus-ring rounded-md border border-ink/15 px-3 py-2 font-normal">
                  <option>All</option>
                  {facets.statuses.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <button className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-bold text-white">
                <Filter size={16} />
                Filter
              </button>
            </form>

            <div className="overflow-x-auto">
              <table className="min-w-[980px] w-full border-collapse text-left text-sm">
                <thead className="bg-ink text-white">
                  <tr>
                    {["Business", "Category", "Location", "Website", "Rating", "Reviews", "Score", "Contacted"].map(
                      (heading) => (
                        <th key={heading} className="px-4 py-3 font-black">
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-ink/10 align-top last:border-0">
                      <td className="px-4 py-4 font-black text-ink">{lead.businessName}</td>
                      <td className="px-4 py-4 text-ink/72">{lead.category}</td>
                      <td className="px-4 py-4 text-ink/72">{lead.location}</td>
                      <td className="px-4 py-4 text-ink/72">{lead.websiteStatus}</td>
                      <td className="px-4 py-4 text-ink/72">{lead.rating ?? "-"}</td>
                      <td className="px-4 py-4 text-ink/72">{lead.reviews ?? "-"}</td>
                      <td className="px-4 py-4">
                        <span className="rounded bg-medway/10 px-2 py-1 font-black text-medway">{lead.leadScore}</span>
                      </td>
                      <td className="px-4 py-4">
                        <form action={updateLeadStatusAction} className="flex items-center gap-2">
                          <input type="hidden" name="id" value={lead.id} />
                          <select
                            name="contactedStatus"
                            defaultValue={lead.contactedStatus}
                            className="focus-ring rounded-md border border-ink/15 px-2 py-2 text-sm"
                          >
                            {facets.statuses.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                          <button className="focus-ring rounded-md bg-chalk px-3 py-2 text-xs font-black text-ink">
                            Save
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {leads.length === 0 ? (
              <div className="p-8 text-center text-sm font-semibold text-ink/60">No leads match the current filters.</div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
