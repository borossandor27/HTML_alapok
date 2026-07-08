# HTML Alapfogalmak - README

## 📌 Alapfogalmak

### Protokoll
A számítógépes kommunikációban a protokollok a beszélt nyelvi szabályoknak megfelelő kódolási szabályokat jelentik. Az internet leggyakrabban használt protokolljai:

- **HTTP** (HyperText Transfer Protocol)
- **HTTPS** (HyperText Transfer Protocol Secure)

### HyperText
A **HyperText** a webdokumentum azon szöveges része, amely más internetes dokumentumokra utal.

### Portok
A kommunikációhoz szükséges "kapuk" (portok) 0 és 65 535 közötti számokkal azonosíthatók:

- HTTP: 80-as port
- HTTPS: 443-as port

### Domain nevek
Az URI (Uniform Resource Identifier) webes erőforrások azonosítására szolgál. Egy URL példája:

```
https://www.example.com:8080/products/item?id=123&lang=hu#reviews
```

| Rész                | Név                          | Leírás                                                                 |
|---------------------|-----------------------------|-----------------------------------------------------------------------|
| `https`             | Protokoll (Scheme)          | A kapcsolat típusa (HTTPS = biztonságos HTTP)                        |
| `www.example.com`   | Host (Domain név)           | A kiszolgáló címe                                                   |
| `:8080`             | Port                        | A kiszolgáló portja (alapértelmezett: 80 HTTP, 443 HTTPS)          |
| `/products/item`    | Elérési út (Path)           | A kiszolgálón belüli elérési út                                     |
| `?id=123&lang=hu`   | Lekérdezési karakterlánc    | Paraméterek kulcs-érték párokkal                                    |
| `#reviews`          | Fragmentum (Anchor)         | Az oldal adott részére való ugrás                                   |

### Böngészők
Népszerű böngészők:
- Google Chrome
- Safari
- Microsoft Edge
- Mozilla Firefox
- Brave
- Vivaldi

### Kliens-szerver modell
- **Kliens**: A dokumentumot olvasó fél
- **Szerver**: A dokumentumot tároló és elérhetővé tevő fél

### Hosting (Tárhelyszolgáltatás)
A hosting szolgáltatók szervereket bérbe adnak, ahol weboldalak és alkalmazások elérhetővé tehetők az interneten.

## 🛠️ Eszközök és fejlesztési környezet
- **Kódszerkesztők**: VS Code, stb.
- **Böngészőfejlesztői eszközök**: DevTools
- **Verziókezelés**: Git és GitHub

## 📄 HTML - a weboldal váza
### Alapstruktúra
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="harrmadik.css">
</head>
<body>
    <p>Közlendő szöveg</p>
</body>
</html>
```

### Tartalmi elemek
- Címek
- Bekezdések
- Listák
- Képek
- Linkek
- Táblázatok
- Űrlapok
- HTML5 szemantikus elemek (`header`, `nav`, `section`, `article`, `footer`)

## 🎨 CSS - a megjelenés kialakítása
### Alap szintaxis

Általánosan:
```css
szelektor {
    tulajdonság1: érték1;
    tulajdonság2: érték2;
}
```

Konkrét példa:
```css
body {
    background-color: rgb(235, 235, 104);
    font-family: Arial, sans-serif;
}
```

### Főbb témák
- Színek
- Betűk
- Box model (margók, padding, border)
- Osztályok és azonosítók
- Pszeudo osztály szelektor
- Pszeudo elem szelektor
- Elemek elhelyezése, egymáshoz viszonyított helyzetük meghatározása: Flexbox és Grid
- Reszponzív design (Media query-k)

## ⚙️ JavaScript - interaktivitás hozzáadása
- Változók, ciklusok, feltételek, függvények
- DOM manipuláció
- Űrlapellenőrzés
- Animációk és események
## [Prototype lánc](./js_prototype/)

A JavaScriptben a `prototype` egy alapvető koncepció, ami az öröklődés megvalósításához szükséges. Lényegében minden JavaScript objektumnak van egy prototípusa, ami egy másik objektum, és amelyből örököl tulajdonságokat és metódusokat.

Amikor egy objektum tulajdonságát vagy metódusát próbáljuk elérni, a JavaScript:
1. Először magán az objektumon keresi
2. Ha nem találja, a prototípusán keresi
3. Ha ott sem találja, a prototípus prototípusán... *és így tovább*

> __NOTE__ `Object.prototype` az egyetlen, amelynek nincs őse

## Modulok kapcsolata

- [elnevezett exportok importja](./js_export_import_sample01/)
- [importok átnevezése](./js_export_import_sample02/)
- [alapértelmezett export importja](./js_export_import_sample03/)
- [összes export importálása](./js_export_import_sample04/)

## Alapvető JSON műveletek

- [deszerializálás](./js_json_deszerializalas_sample/)
- [szerializálás](./js_json_szerializalas_sample/)
- [detrukturálás](./js_json_Object_Destructuring_sample/)
- [spread operátor](./js_json_Spread_Operator_sample/)

## [REST API hívás](./js_axios_sample01/)

## 🚀 Modern front-end technológiák
- CSS preprocesszorok (pl. SCSS)
- JavaScript keretrendszerek (React, Vue)
- Build eszközök (Vite, Webpack)

## 🌍 Weboldal publikálása
- Ingyenes hosting: GitHub Pages, Netlify
- Fájlfeltöltés és tesztelés

## 📚 További tanulási irányok
- Backend fejlesztés (Node.js, PHP, Python)
- Adatbázis-kezelés (SQL, MongoDB)
- API-k (REST, JSON)

