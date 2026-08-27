import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: 32 }}>
      <p>Standard V26-Liga</p>
      <h1>EXACT V26</h1>
      <p>Backup 27.08.2026.</p>
    </main>
  );
}
