Az **Axios** egy népszerű, ígéret-alapú HTTP kliens, amit böngészőben és Node.js környezetben is lehet használni.
Egyre többen kedvelik a `fetch` API-hoz képest nyújtott extra funkciói és egyszerűbb hibakezelése miatt.

Ez egy példa arra, hogyan használható az Axios JSON adatok lekérdezésére az **async/await** szintaxissal.

# 1\. Az Axios telepítése és beállítása

Mielőtt használni kezdené, először telepítenie kell az Axiost a projektjébe.

  * **Node.js/npm projektben:**
    ```bash
    npm install axios
    ```
  * **HTML/böngésző környezetben (CDN-en keresztül):**
    A szkript címke hozzáadásával a HTML fájlban:
    ```html
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    ```


# 2\. JSON lekérdezés Axios és `async/await` használatával

Az Axios automatikusan deszerializálja a JSON választ (nem kell használni a `response.json()` metódust, mint a `fetch` esetében), és a válaszobjektumot (Response Object) a `data` tulajdonságban adja vissza.


#### **Főbb különbségek a `fetch` és az Axios között:**

| Funkció | `fetch` API | **Axios** |
| :--- | :--- | :--- |
| **JSON feldolgozás** | Manuálisan kell hívni: `response.json()` | **Automatikus** a `response.data` tulajdonságban. |
| **Hibakezelés** | Csak hálózati hibák esetén vált a `catch` ágra. HTTP hiba (pl. 404, 500) esetén manuális ellenőrzés szükséges. | **HTTP hiba** (pl. 4xx, 5xx státuszkód) esetén automatikusan a **`catch` ágra vált**, ami sokkal egyszerűbb. |
| **Adatküldés** | Manuálisan kell beállítani a `body` és a `Content-Type` headereket. | Automatikusan szerializálja a JavaScript objektumot JSON-né a `POST` kéréseknél. |
| **Elérhetőség** | Beépített a böngészőkben (polyfill kellhet régi böngészőkhöz és Node.js-ben is használható). | Külső könyvtár (CDN vagy npm csomag) szükséges. |
