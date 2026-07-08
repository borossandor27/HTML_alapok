
// Alapértelmezett export egy függvényhez
export default function szamolGyakori(a, b) {
  if (a > b) {
    return a - b;
  }
  return a + b;
}

// Emellett lehetnek elnevezett exportok is ugyanabban a fájlban:
export const VERZIO = '1.0';
export function log(uzenet) {
  console.log(`[SZÁMOLÓGÉP] ${uzenet}`);
}