"use server";

import { revalidatePath } from "next/cache";
import { createLead, leadFromFormData, updateLeadContactedStatus } from "@/lib/leads";

export async function createLeadAction(formData: FormData) {
  const lead = leadFromFormData(formData);

  if (!lead.businessName || !lead.category || !lead.location || !lead.websiteStatus) {
    return;
  }

  createLead(lead);
  revalidatePath("/dashboard");
}

export async function updateLeadStatusAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const status = String(formData.get("contactedStatus") || "Not contacted");

  if (!Number.isFinite(id)) {
    return;
  }

  updateLeadContactedStatus(id, status as never);
  revalidatePath("/dashboard");
}
