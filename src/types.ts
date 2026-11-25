export type Job = {
  id: number;
  name: string;
  company_name: string;
  salary?: string;
  experience?: string;
  city?: string;
  format?: "remote" | "office" | "hybrid";
};

export type JobsResponse = {
  jobs: Job[];
  pagination: { totalPages: number };
};

export type Filters = {
  search: string;
  city: string;
  skills: string[];
  page: number;
};
