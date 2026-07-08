# pszeudo szelektor 

A **pszeudo szelektor (pseudo-selector)** a CSS-ben egy olyan speciális kifejezés, amely lehetővé teszi, hogy egy elem egy adott állapotára vagy az elemnek egy nem explicit módon megcímkézett részére alkalmazz stílusokat. Olyan elemeket céloz meg, amelyeket a HTML-ben nem tudsz külön azonosítani attribútummal vagy osztálynévvel.

## Két fő típusuk van:



### 1. **Pszeudo-osztályok (pseudo-classes)**

Ezek egy elem **állapotát** vagy **pozícióját** írják le.

**Példák:**

* `:hover` – amikor az egér az elem fölé megy
* `:active` – amikor az elem aktív (pl. kattintás közben)
* `:focus` – amikor az elem fókuszban van (pl. beviteli mező)
* `:first-child` – ha az elem az első gyereke a szülőjének
* `:nth-child(2)` – ha az elem a második gyereke a szülőjének
* `:checked` – amikor egy checkbox vagy radio be van pipálva

**Példa:**

```css
button:hover {
  background-color: blue;
}
```

---

### 2. **Pszeudo-elemek (pseudo-elements)**

Ezek egy elem **részét** célozzák meg, például a szöveg első betűjét vagy egy virtuálisan beszúrt tartalmat.

**Példák:**

* `::before` – egy elem elé beszúrt tartalom
* `::after` – egy elem mögé beszúrt tartalom
* `::first-line` – egy szövegrész első sora
* `::first-letter` – egy szövegrész első betűje

**Példa:**

```css
p::first-letter {
  font-size: 200%;
  color: red;
}
```

---

### Összefoglalás:

| Típus           | Szintaxis            | Mit csinál?                                   |
| --------------- | -------------------- | --------------------------------------------- |
| Pszeudo-osztály | `:`                  | Elem állapotát, helyzetét célozza             |
| Pszeudo-elem    | `::` (újabb CSS-ben) | Elem egy részét vagy virtuális részét célozza |

> Régebbi CSS verziókban a pszeudo-elemeket is `:` jellel írták (pl. `:before`), de az újabb szintaxis szerint `::` használatos, hogy elkülönüljön a pszeudo-osztályoktól.

