// A JSON.stringify() metódussal egy JavaScript objektumot vagy értéket konvertálhat JSON formátumú stringgé. 
// Ezt a műveletet nevezik szerializálásnak is. 
// Ez a JSON string küldhető például szervernek, vagy tárolható helyileg.

const adatok = {
  termek: "Laptop",
  ar: 1200,
  raktaron: 5
};

// JavaScript objektum => JSON string
const jsonTermek = JSON.stringify(adatok);

console.log(jsonTermek); 
// Kimenet: {"termek":"Laptop","ar":1200,"raktaron":5}

console.log(typeof jsonTermek); // Kimenet: string

const formázottJson = JSON.stringify(adatok, null, 2); 
console.log(formázottJson);
/* Kimenet:
{
  "termek": "Laptop",
  "ar": 1200,
  "raktaron": 5
}
*/