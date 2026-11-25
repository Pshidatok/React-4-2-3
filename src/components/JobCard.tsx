
import { Badge, Button, Card, Text } from "@mantine/core";
import type { Job } from "../types";

const FORMATS = {
  remote: { label: "Можно удалённо", color: "green" },
  office: { label: "Офис", color: "gray" },
  hybrid: { label: "Гибрид", color: "yellow" },
};

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  const format = job.format && FORMATS[job.format];

  return (
    <Card className="job-card" padding="lg" radius="md">
      <div className="job-card-content">
        <Text className="job-title">
          {job.name}
        </Text>

        <div className="job-info">
          <Text className="job-salary">
            {job.salary || "з/п не указана"}
          </Text>

          <Text className="job-muted">
            •
          </Text>

          <Text className="job-muted">
            {job.experience || "опыт не указан"}
          </Text>
        </div>

        {format && (
          <Badge color={format.color}>
            {format.label}
          </Badge>
        )}

        <div className="job-info">
          <Text className="job-company">
            {job.company_name}
          </Text>

          <Text className="job-muted">
            •
          </Text>

          <Text className="job-muted">
            {job.city || "город не указан"}
          </Text>
        </div>

        <Button className="job-button" variant="outline">
          Смотреть вакансию
        </Button>
      </div>
    </Card>
  );
}
