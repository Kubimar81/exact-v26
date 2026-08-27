import { create } from "zustand";
import type { SavedAnalysis } from "./types";

export function loadArchive() {
  return Promise.resolve();
}

type State = { items: SavedAnalysis[] };
export const useAnalyses = create<State>(() => ({ items: [] }));
