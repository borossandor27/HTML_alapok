// A JSON.parse() metódussal egy JSON formátumú stringet alakíthat át használható JavaScript objektummá. 
// Ezt a műveletet nevezik deszerializálásnak is.

const jsonString = '{"nev": "Peti", "kor": 30, "aktiv": true}';

// JSON string => JavaScript objektum
const userObject = JSON.parse(jsonString);

console.log(userObject.nev); // Kimenet: Peti
console.log(userObject.kor); // Kimenet: 30
console.log(userObject.aktiv); // Kimenet: true

console.log(typeof userObject); // Kimenet: object