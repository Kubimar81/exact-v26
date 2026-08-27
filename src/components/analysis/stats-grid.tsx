import { Card } from "@/components/ui/card";

export function StatsGrid({ home, away }: { home: string; away: string }) {
  return (
    <Card className="p-5">
      <h3 className="font-display text-xl">Statystyki</h3>
      <p className="text-sm text-muted">{home} vs {away}</p>
    </Card>
  );
}
