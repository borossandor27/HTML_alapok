// A desztrukturálás egy kényelmes módja annak, hogy egy objektumból vagy tömbből több értéket egyszerre kinyerjünk 
// és változókba helyezzünk. 

// Példa objektum desztrukturálásra:
const jsonAdat = '{"nev": "Béla", "eletkor": 45, "varos": "Pécs"}';
const user = JSON.parse(jsonAdat);

// Desztrukturálás: kinyerjük a 'nev' és 'eletkor' tulajdonságokat
const { nev, eletkor } = user;

console.log(`${nev} ${eletkor} éves.`); // Kimenet: Béla 45 éves.