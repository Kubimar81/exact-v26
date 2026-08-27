import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/nowa")({ component: Nowa });

function Nowa() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Nowa analiza</h1>
      <p>EXACT V26 — formularz w kolejnym kroku.</p>
      <Link to="/">Wróć</Link>
    </main>
  );
}
