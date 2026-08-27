import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <header style={{ padding: "16px 32px", borderBottom: "1px solid #2a2d2a" }}>
        <Link to="/">EXACT V26</Link>
      </header>
      <div style={{ padding: 32 }}>{children}</div>
    </div>
  );
}
