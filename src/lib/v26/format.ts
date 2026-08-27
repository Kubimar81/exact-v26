export function fmtPct(n: number | undefined, digits = 1) {
  if (n == null || Number.isNaN(n)) return "—";
  return `${n.toFixed(digits)}%`;
}

export function fmtKickoff(iso?: string) {
  if (!iso) return "Termin nieustalony";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("pl-PL");
}

export function decisionTone(d: string) {
  if (d === "EXECUTION") return "ok" as const;
  if (d === "NO EXECUTION") return "warn" as const;
  return "default" as const;
}
