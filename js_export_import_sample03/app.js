// Importáljuk az alapértelmezett exportot 'defaultSzamolo' néven
import defaultSzamolo from './szamologep.js';

// Importáljuk az elnevezett exportokat is
import { VERZIO, log } from './szamologep.js';

console.log(`Verzió: ${VERZIO}`); // Kimenet: Verzió: 1.0
log('A számolás elkezdődött...'); // Kimenet: [SZÁMOLÓGÉP] A számolás elkezdődött...

console.log(`Eredmény (10, 5): ${defaultSzamolo(10, 5)}`); // Kimenet: Eredmény (10, 5): 5
console.log(`Eredmény (5, 10): ${defaultSzamolo(5, 10)}`); // Kimenet: Eredmény (5, 10): 15

// Ha egy sorban importáljuk az alapértelmezettet és az elnevezetteket:
// import masikNev, { VERZIO, log } from './szamologep.js';