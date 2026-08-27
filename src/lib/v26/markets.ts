export type MarketPick = { pick: string; market: string; pct: number; fairOdds: number; why: string };
export function buildMarkets(_engine: unknown) {
  return { surest: [] as MarketPick[], value: [] as MarketPick[] };
}
