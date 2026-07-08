// Új objektumok létrehozására vagy objektumok egyesítésére használható, ami gyakori művelet JSON adatok kezelésekor.

const alapAdatai = { id: 101, allapot: 'aktív' };
const cimAdatai = { utca: 'Fő utca', hazszam: 12 };

// Két objektum egyesítése
const teljesProfil = { ...alapAdatai, ...cimAdatai, email: 'user@example.com' };

console.log(teljesProfil);
/* Kimenet:
{
  id: 101,
  allapot: 'aktív',
  utca: 'Fő utca',
  hazszam: 12,
  email: 'user@example.com'
}
*/