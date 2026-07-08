
# Feladat leírás 
    Cél Készíts egy önálló profilkártyát (profile card) HTML és CSS használatával. A kártya legyen nominálisan egy kisborítékos “útlevél-szerű” megjelenésben, és legyen reszponzív: mobileszközön egy oszlopos, asztali méretben pedig két rész (bal oldal: avatar + név; jobb oldal: bio, készségek és gomb).

# Elvárások

   - **Strukturálás**: használj szemantikusan HTML5 elemeket (article/section, header, ul, etc.).
   - **Profil elemei**: avatar (címsorban a kapszula/öntanúság: Zsuzsa Horváth példatárc) illetve felhasználói név, professzió, rövid bio, készségek listája, és egy “Kapcsolat” gomb.
   - **Avatar**: kör alakú, színátmenetes, belsejében 2 betűs inicials. Használj ARIA-t/alt szöveget a hozzáférhetőség érdekében (role="img" és aria-label).
   - **Stílus**: legyenek CSS változók (színek, radiusz) és tiszta, olvasható kód. Ne legyen inline stílus.
   - **Responszívitás**: 600px körüli határnál állíts át két oszlopról egy oszlopra.
   - **Kontraszt**: válassz jó kontrasztot a szövegekhez és gombokhoz.



# Javítókulcs (értékelési szempontok) Összesen: 20 pont

## Strukturális helyesség és semantik (4 pont)
    - megfelelő HTML5 elemek használata (article/section, header, ul/li, h2 stb.)
    - az avatar valid ARIA-labelt kap, és a kép szerepét/alternatív leírást megfelelően kezeli

## Tartalom és vizuális megjelenés (4 pont)
    - látványos, érthető elrendezés: név, title, bio, készségek, CTA
    - megfelelő tipográfia és kontraszt

## Reszponzívitás és elrendezés (4 pont)
    - kétoszlopos megjelenítés és mobileszközre történő átállás
    - média lekérdezések helyes használata

## Szín- és kódminőség (4 pont)
    - CSS változók használata
    - tiszta, laza szintaxis, ismétlés csökkentése
    - inline stílus hiánya, elkülönített CSS

## hozzáférhetőség és minőségbiztosítás (2 pont)
    - ARIA címkék, alt/aria-label használata
    - gomb és interaktív elem érthető fókuszstílussal

## Megoldás mintakódjának ellenőrzése (2 pont)
    - a példaminta megfelel a kiírt követelményeknek és könnyen értelmezhető

