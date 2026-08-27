import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/standard")({ component: Standard });

function Standard() {
  return (
    <AppShell>
      <h1>Standard V26-Liga</h1>
      <p>Kroki K0–K18. Zero domysłów.</p>
    </AppShell>
  );
}
