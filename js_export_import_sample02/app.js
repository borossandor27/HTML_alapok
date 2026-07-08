/* Az as kulcsszóval a helyi fájlban új nevet adhatunk az importált tagnak, 
ha el akarjuk kerülni az elnevezési konfliktust, 
vagy csak rövidebb nevet szeretnénk használni
*/

import { osszead as szamokatOsszead } from './modul.js';
import { Ember as SzemelyOsztaly } from './modul.js';

console.log(`Összeg: ${szamokatOsszead(10, 2)}`); // Kimenet: Összeg: 12
const anna = new SzemelyOsztaly('Anna');
console.log(anna.koszon()); // Kimenet: Szervusz, a nevem Anna.