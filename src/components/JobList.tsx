
import { Alert, Loader, Pagination, Text } from "@mantine/core";
import { useEffect } from "react";
import { setPage } from "../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchJobs } from "../store/jobsSlice";
import { JobCard } from "./JobCard";

export function JobList() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filters);

  const { items, totalPages, loading, error } = useAppSelector(
    state => state.jobs
  );

  useEffect(() => {
    const request = dispatch(fetchJobs(filters));

    return () => request.abort();
  }, [dispatch, filters]);

  if (loading) {
    return (
      <div className="job-status">
        <Loader size="xl" color="blue" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert color="red" title="Ошибка">
        {error}
      </Alert>
    );
  }

  if (items.length === 0) {
    return (
      <Text className="job-empty">
        Ничего не найдено
      </Text>
    );
  }

  return (
    <>
      <div className="job-list">
        {items.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <Pagination
            total={totalPages}
            value={filters.page}
            onChange={page => dispatch(setPage(page))}
            color="blue"
          />
        </div>
      )}
    </>
  );
}
