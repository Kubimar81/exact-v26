import { Card } from "@/components/ui/card";
import type { ConfidenceBreakdown } from "@/lib/v26/types";

const ROWS: { key: keyof Omit<ConfidenceBreakdown, "sum" | "pct" | "band" | "notes">; label: string; max: number }[] = [
  { key: "forma", label: "Forma", max: 20 },
  { key: "xg", label: "xG", max: 15 },
  { key: "h2h", label: "H2H", max: 10 },
  { key: "atakObrona", label: "Atak/Obrona", max: 15 },
  { key: "qoi", label: "QOI", max: 10 },
  { key: "flow", label: "Flow Profile", max: 10 },
  { key: "market", label: "Market", max: 10 },
  { key: "override", label: "Override", max: 10 },
  { key: "leagueGap", label: "League Gap", max: 5 },
];

export function ConfidenceCard({ c }: { c: ConfidenceBreakdown }) {
  return (
    <Card className="p-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-xl">Confidence Score</h3>
          <p className="text-sm text-muted">{c.band} · bez ręcznej korekty po sumie</p>
        </div>
        <div className="text-right">
          <div className="font-mono text-3xl tabular-nums">{c.pct}%</div>
          <div className="mt-1 text-xs text-muted">{c.sum}/105</div>
        </div>
      </div>
    </Card>
  );
}
