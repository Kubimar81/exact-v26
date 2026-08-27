export type CSLean = "Strong" | "Medium" | "Weak";
export type Decision = "GREEN LIGHT" | "WATCH" | "WAIT" | "NO EXECUTION";
export type FavoriteSide = "home" | "away" | "none";
export type ExactRole = "CORE" | "VALUE" | "BALANCED" | "CHAOS" | "Rezerwa" | "Protection";
export type OpponentQuality = "TOP" | "SREDNI" | "SLABY";
export type AnalysisStatus = "draft" | "running-p1" | "awaiting-k11" | "running-p2" | "complete" | "error";

export interface MatchInput {
  home: string;
  away: string;
  league: string;
  kickoff: string;
  oddsHome?: number;
  oddsDraw?: number;
  oddsAway?: number;
}

export type SavedAnalysis = {
  id: string;
  input: MatchInput;
  status: AnalysisStatus;
  createdAt: number;
  demo?: boolean;
  engine?: { decision: Decision; direction?: string; confidence?: { pct: number }; epl?: { score?: string; epl?: { pct: number } }[] };
};

export type PhasePayload = Record<string, unknown>;
