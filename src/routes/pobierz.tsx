import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pobierz")({ component: Pobierz });

function Pobierz() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Pobierz program</h1>
      <p>Backup EXACT V26 27.08.2026.</p>
      <Link to="/">Wróć</Link>
    </main>
  );
}
