import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/analiza/$id")({ component: Analiza });

function Analiza() {
  const { id } = Route.useParams();
  return (
    <AppShell>
      <h1>Analiza</h1>
      <p>{id}</p>
    </AppShell>
  );
}
