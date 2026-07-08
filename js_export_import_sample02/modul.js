// 1. Elnevezett export egy konstanshoz
export const PI = 3.14159;

// 2. Elnevezett export egy függvényhez
export function osszead(a, b) {
  return a + b;
}

// 3. Elnevezett export egy osztályhoz
export class Ember {
  constructor(nev) {
    this.nev = nev;
  }
  koszon() {
    return `Szervusz, a nevem ${this.nev}.`;
  }
}

// Exportálás a fájl végén, egyben (ez egy másik módszer):
const EVEK_SZAMA = 365;
function szoroz(a, b) {
  return a * b;
}

export { EVEK_SZAMA, szoroz };