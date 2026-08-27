const HV_LEAGUES = ["chile","iceland","islandia","uzbekistan","ireland","irlandia","romania","rumunia","paraguay","serie b","serie c","botola","morocco","maroko","greece","grecja","turkey","turcja","egypt","egipt","tunisia","tunezja","usl","primera nacional","esiliiga","meistriliiga"];
const HV_EXCLUDE = ["calcutta","kolkata","i-league","ekstraklasa","allsvenskan"];
const UGO_PLUS = ["botola","egypt","egipt","tunisia","tunezja","greece","grecja","turkey","turcja"];

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export function isHighVarianceLeague(league: string): boolean {
  const n = norm(league);
  if (!n) return false;
  if (HV_EXCLUDE.some((k) => n.includes(k))) return false;
  return HV_LEAGUES.some((k) => n.includes(k));
}
export function isMediumVarianceLeague(league: string) {
  const n = norm(league);
  return n.includes("veikkaus") || n.includes("finland");
}
export function isUgoPlusLeague(league: string) {
  const n = norm(league);
  return UGO_PLUS.some((k) => n.includes(k));
}
export function isVeikkausliiga(league: string) {
  const n = norm(league);
  return n.includes("veikkaus") || n.includes("finland");
}
export function isAllsvenskan(league: string) {
  const n = norm(league);
  if (/superettan/.test(n)) return false;
  return n.includes("allsvenskan") || n.includes("sweden") || n.includes("szwecja");
}
export function isSuperettan(league: string) {
  return /superettan/.test(norm(league));
}
export function resolveLeague(home: string, away: string, hinted?: string) {
  return (hinted || "").trim() || "Inna liga";
}
export function matchLeague(s: string) {
  return s.trim();
}
