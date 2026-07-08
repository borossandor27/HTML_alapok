/*
Az elnevezett exportokat kapcsos zárójelek ({}) között kell importálni, és a nevüknek meg kell egyeznie az exportált névvel.
*/

// Importálás az 'osszead' függvény és a 'PI' konstans
import { osszead, PI } from './modul.js';

// Importálás az 'Ember' osztály
import { Ember } from './modul.js';

// Importálás a 'szoroz' függvény és az 'EVEK_SZAMA' konstans
import { szoroz, EVEK_SZAMA } from './modul.js';

console.log(`PI értéke: ${PI}`); // Kimenet: PI értéke: 3.14159
console.log(`Összeg: ${osszead(5, 3)}`); // Kimenet: Összeg: 8

const peti = new Ember('Peti');
console.log(peti.koszon()); // Kimenet: Szervusz, a nevem Peti.

console.log(`Szorzat: ${szoroz(5, 3)}`); // Kimenet: Szorzat: 15
console.log(`Egy év ${EVEK_SZAMA} nap.`); // Kimenet: Egy év 365 nap.