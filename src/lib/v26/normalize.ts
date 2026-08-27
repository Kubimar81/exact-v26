export function sanitizeFacts(s?: string) {
  return s || "{}";
}
export function mergeFactBlobs(a?: string, b?: string) {
  return b || a || "{}";
}
export function coerceForm(_v: unknown) {
  return [] as unknown[];
}
export function factsQuality(_s: string) {
  return { useful: false };
}
