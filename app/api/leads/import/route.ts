import { redirect } from "next/navigation";
import Papa from "papaparse";
import { importLeads, type LeadInput } from "@/lib/leads";

export const runtime = "nodejs";

function pick(row: Record<string, string>, keys: string[]) {
  const found = keys.find((key) => row[key] || row[key.toLowerCase()]);
  return found ? row[found] || row[found.toLowerCase()] : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    redirect("/dashboard");
  }

  const text = await file.text();
  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim()
  });

  const rows: Partial<LeadInput>[] = parsed.data.map((row) => ({
    businessName: pick(row, ["Business Name", "businessName", "business_name"]),
    category: pick(row, ["Category", "category"]),
    location: pick(row, ["Location", "location"]),
    websiteStatus: pick(row, ["Website Status", "websiteStatus", "website_status"]),
    rating: pick(row, ["Rating", "rating"]) ? Number(pick(row, ["Rating", "rating"])) : null,
    reviews: pick(row, ["Reviews", "reviews"]) ? Number(pick(row, ["Reviews", "reviews"])) : null,
    leadScore: pick(row, ["Lead Score", "leadScore", "lead_score"]) ? Number(pick(row, ["Lead Score", "leadScore", "lead_score"])) : 50,
    contactedStatus: pick(row, ["Contacted Status", "contactedStatus", "contacted_status"]) as LeadInput["contactedStatus"]
  }));

  importLeads(rows);
  redirect("/dashboard");
}
