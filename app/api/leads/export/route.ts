import { NextResponse } from "next/server";
import { listLeads, toCsv } from "@/lib/leads";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const leads = listLeads({
    query: searchParams.get("q") || undefined,
    category: searchParams.get("category") || undefined,
    contactedStatus: searchParams.get("status") || undefined
  });
  const csv = toCsv(leads);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=\"medway-digital-leads.csv\""
    }
  });
}
