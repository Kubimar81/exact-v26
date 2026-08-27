import type { MatchInput, PhasePayload } from "./types";

export type PhaseCall =
  | { ok: true; payload: PhasePayload; citations: string[] }
  | { ok: false; error: string };

export async function callPhase(
  _phase: 1 | 2,
  _input: MatchInput,
  _priorJson?: string,
): Promise<PhaseCall> {
  return { ok: false, error: "Silnik API w trakcie wgrywania na GitHub." };
}

export async function callEnrich(
  _input: MatchInput,
  _priorJson?: string,
): Promise<PhaseCall> {
  return { ok: false, error: "Dociąganie danych w trakcie wgrywania na GitHub." };
}
