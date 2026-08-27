import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { EngineOutput } from "@/lib/v26/types";

export function GatesPanel({ engine }: { engine: EngineOutput }) {
  const g = engine.gates;
  return (
    <Card className="p-5">
      <h3 className="font-display text-xl">Bramki V26 · Zero Domysłów</h3>
      <p className="mt-1 text-sm text-muted">CS faworyta: {g.csFav}</p>
    </Card>
  );
}
