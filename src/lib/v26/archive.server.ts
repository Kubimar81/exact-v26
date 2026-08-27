import type { SavedAnalysis } from "./types";

const mem = new Map<string, SavedAnalysis>();

export function listAnalyses(): SavedAnalysis[] {
  return [...mem.values()];
}

export function readAnalysis(id: string): SavedAnalysis | null {
  return mem.get(id) ?? null;
}

export function writeAnalysis(a: SavedAnalysis): SavedAnalysis {
  mem.set(a.id, a);
  return a;
}

export function deleteAnalysis(id: string): boolean {
  return mem.delete(id);
}

export function pruneExpired(): number {
  return 0;
}
