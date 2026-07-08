// Az Axios automatikusan deszerializálja a JSON választ (nem kell használni a response.json() metódust, mint a fetch esetében), 
// és a válaszobjektumot (Response Object) a data tulajdonságban adja vissza.

// Node.js környezetben először telepíteni kell az Axios csomagot a következő paranccsal:
// npm install axios
// Ha már telepítve van és a package-lock.json fájlban szerepel a függőség, akkor ellenőrízze, hogy a node_modules mappa létezik-e.
// Ha nem létezik a node_modules mappa, futtassa újra a fenti parancsot.
// import axios from 'axios'; 
// Böngésző környezetben az Axios CDN-ről való betöltése után az axios globális változóként érhető el.
// pl.: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Az ES6 modul rendszer használatához a package.json fájlban a "type": "module" beállítást kell megadni.

import axios from 'axios';

// Adatlekérdező aszinkron függvény
async function adatokLekerdezese() {
    const URL = 'https://jsonplaceholder.typicode.com/users/1';

    try {
        // 1. HTTP GET kérés küldése az Axios használatával
        // Az Axios automatikusan deszerializálja a JSON-t a .data tulajdonságba.
        const valasz = await axios.get(URL);

        // 2. A deszerializált JavaScript objektum (JSON tartalom)
        const userAdatok = valasz.data;

        console.log("Sikeresen lekérdezett adatok:");
        console.log(userAdatok);

        // 3. Adatkezelés ES6 desztrukturálással
        const { name, email, phone } = userAdatok;

        console.log(`\nFelhasználó neve: ${name}`);
        console.log(`Email címe: ${email}`);
        console.log(`Telefonszáma: ${phone}`);

    } catch (hiba) {
        // A hibaobjektum tartalmazza a státuszkódot és egyéb információkat.
        console.error("Hiba történt a lekérdezés során:", hiba.message);
        if (hiba.response) {
            console.error("HTTP Státuszkód:", hiba.response.status);
        }
    }
}

adatokLekerdezese();