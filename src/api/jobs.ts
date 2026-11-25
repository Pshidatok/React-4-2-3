import { ALL_CITIES } from "../constants";
import type { Filters, JobsResponse } from "../types";

const JOBS_URL = "https://kata-jobs.onrender.com/api/jobs";
const PAGE_SIZE = 10;

export async function getJobs(
  { search, city, skills, page }: Filters,
  signal: AbortSignal
): Promise<JobsResponse> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(PAGE_SIZE),
  });

  if (search) params.set("search", search);
  if (city !== ALL_CITIES) params.set("city", city);
  if (skills.length > 0) params.set("skills", skills.join(","));

  const response = await fetch(`${JOBS_URL}?${params}`, { signal });
  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}
