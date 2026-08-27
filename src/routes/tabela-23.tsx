import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/tabela-23")({ component: Tabela });

function Tabela() {
  return (
    <AppShell>
      <h1>Tabela 23</h1>
    </AppShell>
  );
}
