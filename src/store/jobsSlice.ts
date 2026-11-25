import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../api/jobs";
import type { Filters, Job } from "../types";

type JobsState = {
  items: Job[];
  totalPages: number;
  loading: boolean;
  error: string | null;
};

const initialState: JobsState = {
  items: [],
  totalPages: 0,
  loading: true,
  error: null,
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  (filters: Filters, { signal }) => getJobs(filters, signal)
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.jobs;
        state.totalPages = action.payload.pagination.totalPages;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        // Запрос отменён новым запросом — это не ошибка.
        if (action.meta.aborted) return;

        state.loading = false;
        state.error = "Не удалось загрузить вакансии";
      });
  },
});

export default jobsSlice.reducer;
