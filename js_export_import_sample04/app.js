// Az összes exportot importáljuk egy 'Konstansok' nevű objektumként
import * as Konstansok from './konstansok.js';

console.log(`Autó sebesség: ${Konstansok.AUTO_SEBESSEG} km/h`); // Kimenet: Autó sebesség: 100 km/h
console.log(`Repülő sebesség: ${Konstansok.REPULO_SEBESSEG} km/h`); // Kimenet: Repülő sebesség: 800 km/h
console.log(`Maximum kor: ${Konstansok.MAX_KOR} év`); // Kimenet: Maximum kor: 120 év

// Figyelem: Az alapértelmezett exportot 'Konstansok.default' néven lehet elérni, ha lenne!