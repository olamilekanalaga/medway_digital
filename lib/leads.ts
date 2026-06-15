import Database from "better-sqlite3";
import path from "path";

export type LeadStatus = "Not contacted" | "Contacted" | "Follow up" | "Not a fit";

export type Lead = {
  id: number;
  businessName: string;
  category: string;
  location: string;
  websiteStatus: string;
  rating: number | null;
  reviews: number | null;
  leadScore: number;
  contactedStatus: LeadStatus;
  createdAt: string;
};

export type LeadInput = Omit<Lead, "id" | "createdAt">;

let db: Database.Database | null = null;

const seedLeads: LeadInput[] = [
  {
    businessName: "Medway Rapid Plumbing",
    category: "Plumber",
    location: "Chatham",
    websiteStatus: "No website found",
    rating: 4.5,
    reviews: 38,
    leadScore: 84,
    contactedStatus: "Not contacted"
  },
  {
    businessName: "Town & River Electrics",
    category: "Electrician",
    location: "Rochester",
    websiteStatus: "Outdated website",
    rating: 4.8,
    reviews: 64,
    leadScore: 77,
    contactedStatus: "Follow up"
  },
  {
    businessName: "North Kent Roof Repairs",
    category: "Roofer",
    location: "Gillingham",
    websiteStatus: "Facebook only",
    rating: 4.2,
    reviews: 21,
    leadScore: 72,
    contactedStatus: "Contacted"
  }
];

function normalizeStatus(value: FormDataEntryValue | string | null): LeadStatus {
  const status = String(value ?? "Not contacted");
  if (["Not contacted", "Contacted", "Follow up", "Not a fit"].includes(status)) {
    return status as LeadStatus;
  }
  return "Not contacted";
}

export function getDb() {
  if (db) {
    return db;
  }

  const databasePath = path.join(process.cwd(), "data", "leads.db");
  db = new Database(databasePath);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_name TEXT NOT NULL,
      category TEXT NOT NULL,
      location TEXT NOT NULL,
      website_status TEXT NOT NULL,
      rating REAL,
      reviews INTEGER,
      lead_score INTEGER NOT NULL DEFAULT 50,
      contacted_status TEXT NOT NULL DEFAULT 'Not contacted',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const count = db.prepare("SELECT COUNT(*) as count FROM leads").get() as { count: number };
  if (count.count === 0) {
    const insert = db.prepare(`
      INSERT INTO leads (
        business_name,
        category,
        location,
        website_status,
        rating,
        reviews,
        lead_score,
        contacted_status
      )
      VALUES (@businessName, @category, @location, @websiteStatus, @rating, @reviews, @leadScore, @contactedStatus)
    `);
    const seed = db.transaction((items: LeadInput[]) => {
      for (const item of items) {
        insert.run(item);
      }
    });
    seed(seedLeads);
  }

  return db;
}

function mapLead(row: Record<string, unknown>): Lead {
  return {
    id: Number(row.id),
    businessName: String(row.business_name),
    category: String(row.category),
    location: String(row.location),
    websiteStatus: String(row.website_status),
    rating: row.rating === null ? null : Number(row.rating),
    reviews: row.reviews === null ? null : Number(row.reviews),
    leadScore: Number(row.lead_score),
    contactedStatus: normalizeStatus(String(row.contacted_status)),
    createdAt: String(row.created_at)
  };
}

export function listLeads(filters: { query?: string; category?: string; contactedStatus?: string }) {
  const clauses: string[] = [];
  const params: Record<string, string> = {};

  if (filters.query) {
    clauses.push("(business_name LIKE @query OR location LIKE @query OR category LIKE @query)");
    params.query = `%${filters.query}%`;
  }

  if (filters.category && filters.category !== "All") {
    clauses.push("category = @category");
    params.category = filters.category;
  }

  if (filters.contactedStatus && filters.contactedStatus !== "All") {
    clauses.push("contacted_status = @contactedStatus");
    params.contactedStatus = filters.contactedStatus;
  }

  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const rows = getDb()
    .prepare(
      `
      SELECT * FROM leads
      ${where}
      ORDER BY lead_score DESC, reviews DESC, business_name ASC
    `
    )
    .all(params) as Record<string, unknown>[];

  return rows.map(mapLead);
}

export function getLeadFacets() {
  const categories = getDb()
    .prepare("SELECT DISTINCT category FROM leads ORDER BY category ASC")
    .all() as { category: string }[];
  return {
    categories: categories.map((row) => row.category),
    statuses: ["Not contacted", "Contacted", "Follow up", "Not a fit"] satisfies LeadStatus[]
  };
}

export function createLead(input: LeadInput) {
  getDb()
    .prepare(
      `
      INSERT INTO leads (
        business_name,
        category,
        location,
        website_status,
        rating,
        reviews,
        lead_score,
        contacted_status
      )
      VALUES (@businessName, @category, @location, @websiteStatus, @rating, @reviews, @leadScore, @contactedStatus)
    `
    )
    .run(input);
}

export function updateLeadContactedStatus(id: number, contactedStatus: LeadStatus) {
  getDb()
    .prepare("UPDATE leads SET contacted_status = @contactedStatus WHERE id = @id")
    .run({ id, contactedStatus });
}

export function importLeads(items: Partial<LeadInput>[]) {
  const insert = getDb().prepare(`
    INSERT INTO leads (
      business_name,
      category,
      location,
      website_status,
      rating,
      reviews,
      lead_score,
      contacted_status
    )
    VALUES (@businessName, @category, @location, @websiteStatus, @rating, @reviews, @leadScore, @contactedStatus)
  `);

  const importMany = getDb().transaction((rows: Partial<LeadInput>[]) => {
    for (const row of rows) {
      if (!row.businessName || !row.category || !row.location) {
        continue;
      }
      insert.run({
        businessName: row.businessName,
        category: row.category,
        location: row.location,
        websiteStatus: row.websiteStatus || "Unknown",
        rating: row.rating ?? null,
        reviews: row.reviews ?? null,
        leadScore: row.leadScore ?? 50,
        contactedStatus: normalizeStatus(row.contactedStatus ?? "Not contacted")
      });
    }
  });

  importMany(items);
}

export function leadFromFormData(formData: FormData): LeadInput {
  const score = Number(formData.get("leadScore") || 50);
  return {
    businessName: String(formData.get("businessName") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    location: String(formData.get("location") || "").trim(),
    websiteStatus: String(formData.get("websiteStatus") || "").trim(),
    rating: formData.get("rating") ? Number(formData.get("rating")) : null,
    reviews: formData.get("reviews") ? Number(formData.get("reviews")) : null,
    leadScore: Number.isFinite(score) ? Math.max(0, Math.min(100, score)) : 50,
    contactedStatus: normalizeStatus(formData.get("contactedStatus"))
  };
}

export function toCsv(leads: Lead[]) {
  const headers = [
    "Business Name",
    "Category",
    "Location",
    "Website Status",
    "Rating",
    "Reviews",
    "Lead Score",
    "Contacted Status"
  ];

  const escape = (value: string | number | null) => {
    const text = value === null ? "" : String(value);
    return `"${text.replaceAll('"', '""')}"`;
  };

  const rows = leads.map((lead) =>
    [
      lead.businessName,
      lead.category,
      lead.location,
      lead.websiteStatus,
      lead.rating,
      lead.reviews,
      lead.leadScore,
      lead.contactedStatus
    ]
      .map(escape)
      .join(",")
  );

  return [headers.map(escape).join(","), ...rows].join("\n");
}
