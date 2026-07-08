# HTML és CSS Gyakorló Feladat - Értékelő Lap

## Feladat Áttekintés
**Cél:** Modern blog oldal létrehozása HTML és CSS használatával  
**Időkeret:** 90-120 perc  
**Értékelési skála:** 0-70 (80) pont

---

## Értékelési Kritériumok

### 1. HEADER STÍLUSOK (5 pont)
**Feladat:** Header navigációs sávvá alakítása
- Háttérszín: `#2c3e50` (1 pont)
- Magasság: `80px` (1 pont)
- `display: flex` használata (2 pont)
- Elemek középre igazítása (`align-items: center`, `justify-content: space-between`) (1 pont)

**Helyes megoldás:**
```css
header {
    background-color: #2c3e50;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

### 2. LOGO STÍLUSOK (3 pont)
- Szín: `color: white` (1 pont)
- Betűméret: `font-size: 24px` (1 pont)
- Félkövér: `font-weight: bold` (1 pont)

### 3. NAVIGÁCIÓ STÍLUSOK (4 pont)
- `list-style: none` (1 pont)
- `display: flex` (2 pont)
- Elemek közötti távolság: `gap: 30px` vagy `margin` (1 pont)

### 4. NAVIGÁCIÓS LINKEK (4 pont)
- Szín: `color: white` (1 pont)
- `text-decoration: none` (1 pont)
- Hover szín: `color: #3498db` (2 pont)

### 5. HERO SZEKCIÓ (6 pont)
- Gradiens háttér: `linear-gradient(135deg, #3498db, #2980b9)` (2 pont)
- Magasság: `height: 400px` (1 pont)
- Flexbox középre igazítás (`display: flex`, `align-items: center`, `justify-content: center`) (2 pont)
- Szöveg középre igazítás: `text-align: center` (1 pont)

### 6. HERO SZÖVEG (4 pont)
- H1: fehér szín, 48px méret (2 pont)
- P: fehér szín, 18px méret, 20px felső margó (2 pont)

### 7. CONTAINER (3 pont)
- Max-width: `1200px` (1 pont)
- Középre igazítás: `margin: 0 auto` (1 pont)
- Padding: `20px` (1 pont)

### 8. BLOG GRID (6 pont)
- `display: grid` (2 pont)
- 3 oszlop: `grid-template-columns: repeat(3, 1fr)` (2 pont)
- Gap: `30px` (1 pont)
- Felső margó: `margin-top: 50px` (1 pont)

### 9. BLOG KÁRTYÁK (6 pont)
- Háttér: `background: white` (1 pont)
- Árnyék: `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` (2 pont)
- Lekerekített sarkok: `border-radius: 8px` (1 pont)
- Átmenet: `transition: all 0.3s ease` (2 pont)

### 10. KÁRTYA HOVER EFFEKT (4 pont)
- Transform: `transform: translateY(-5px)` (2 pont)
- Erősebb árnyék: `box-shadow: 0 8px 15px rgba(0,0,0,0.2)` (2 pont)

### 11. KÁRTYA KÉPEK (5 pont)
- Teljes szélesség: `width: 100%` (1 pont)
- Magasság: `height: 200px` (1 pont)
- Object-fit: `object-fit: cover` (2 pont)
- Felső sarkok: `border-radius: 8px 8px 0 0` (1 pont)

### 12. KÁRTYA TARTALOM (2 pont)
- Padding: `20px` (2 pont)

### 13. KÁRTYA CÍMEK (3 pont)
- Szín: `color: #2c3e50` (1 pont)
- Alsó margó: `margin-bottom: 10px` (2 pont)

### 14. FOOTER (5 pont)
- Háttér: `background-color: #34495e` (1 pont)
- Szín: `color: white` (1 pont)
- Szöveg központosítás: `text-align: center` (1 pont)
- Padding: `padding: 30px 0` (1 pont)
- Felső margó: `margin-top: 50px` (1 pont)

### 15. RESZPONZÍV DESIGN - BÓNUSZ (10 pont)
- Média query `@media (max-width: 768px)` (2 pont)
- Grid 1 oszlopra: `grid-template-columns: 1fr` (3 pont)
- Hero h1 mérete: `font-size: 36px` (2 pont)
- Navigáció függőleges: `flex-direction: column` (3 pont)

---

## Értékelési Skála

| Pontszám | Osztályzat | Megjegyzés |
|----------|------------|------------|
| 85-100   | Jeles (5)  | Kiváló munka, minden feladat hibátlanul |
| 70-84    | Jó (4)     | Jó munka, kisebb hibák |
| 55-69    | Közepes (3)| Elfogadható, több hiányosság |
| 40-54    | Elégséges (2)| Alapvető dolgok megvannak |
| 0-39     | Elégtelen (1)| Jelentős hiányosságok |

---

## Gyakori Hibák és Megoldások

### ❌ **Gyakori hiba:** Flexbox használata helyett float vagy inline-block
**Megoldás:** Modern layout technikák (Flexbox, Grid) használata

### ❌ **Gyakori hiba:** Rögzített méretek használata minden elemre
**Megoldás:** Relatív méretek és reszponzív design

### ❌ **Gyakori hiba:** Hover effektek elmaradása
**Megoldás:** Interaktív elemek minden fontos részen

### ❌ **Gyakori hiba:** Szemantikus HTML elemek hiánya
**Megoldás:** `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` használata

---

## Értékelő Táblázat

**Diák neve:** ____________________  
**Dátum:** ____________________

| Feladat | Max pont | Elért pont | Megjegyzés |
|---------|----------|------------|------------|
| 1. Header stílusok | 5 | | |
| 2. Logo stílusok | 3 | | |
| 3. Navigáció stílusok | 4 | | |
| 4. Navigációs linkek | 4 | | |
| 5. Hero szekció | 6 | | |
| 6. Hero szöveg | 4 | | |
| 7. Container | 3 | | |
| 8. Blog grid | 6 | | |
| 9. Blog kártyák | 6 | | |
| 10. Kártya hover | 4 | | |
| 11. Kártya képek | 5 | | |
| 12. Kártya tartalom | 2 | | |
| 13. Kártya címek | 3 | | |
| 14. Footer | 5 | | |
| 15. Reszponzív (bónusz) | 10 | | |

**Összesen:** ___/70 pont (___/80 pont bónusszal)

**Végső osztályzat:** _______________

---

## Tanári Megjegyzések

**Pozitívumok:**
- 
- 
- 

**Fejlesztendő területek:**
- 
- 
- 

**Következő lépések:**
- 
- 
-