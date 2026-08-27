export function fmtTtl(createdAt: number) {
  const hours = 24 - (Date.now() - createdAt) / 3600000;
  if (hours <= 0) return "wygasło";
  return `${Math.max(1, Math.round(hours))} h`;
}
