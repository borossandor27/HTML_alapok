document.addEventListener("DOMContentLoaded", async function() {
    const main = document.querySelector("main");
    main.textContent = "";

    let telepulesek = [];
    
    try {
        // Axios használata a GET kéréshez. 
        // Az Axios automatikusan JSON-ná alakítja a választ.
        const response = await axios.get("./megyeijoguvarosok.json");
        
        // Az Axios a sikeres adatokat a .data property-ben tárolja
        telepulesek = response.data; 
        
    } catch (error) {
        // Axios széleskörűen kezeli a hálózati és HTTP státuszhibákat
        console.error("Hiba a JSON fájl betöltésekor Axios-szal:", error.message);
        main.textContent = "Hiba történt az adatok betöltése során: " + (error.response?.statusText || "Ismeretlen hiba");
        return;
    }

    // JSON adatok feldolgozása
    if (telepulesek && Array.isArray(telepulesek)) {
        telepulesek.forEach((telepules, index) => {
            const section = document.createElement("section");
            
            // Váltakozó elrendezés beállítása
            const alignmentClass = index % 2 === 0 ? "telepules-kep-left" : "telepules-kep-right";
            section.classList.add("telepules-grid-container", alignmentClass);
            section.appendChild(leiras(telepules));
            section.appendChild(kep(telepules));
            // Hozzáadjuk a szekciót a fő konténerhez
            main.appendChild(section);
        });
    } else {
        console.error("A betöltött adat nem tömb vagy üres.");
    }
    function leiras(telepules) {
        const leirasDiv = document.createElement("div");
        leirasDiv.classList.add("grid-item", "leiras");
        leirasDiv.innerHTML = `
            <h2>${telepules.nev}</h2>
            <p>Megye: ${telepules.megye}</p>
            <p>Népesség: ${telepules.nepesseg.toLocaleString()}</p>
            <p>Terület: ${telepules.terulet} km²</p>
        `;
        return leirasDiv;
    }

    function kep(telepules) {
        const kepDiv = document.createElement("div");
        kepDiv.classList.add("grid-item", "kep");
        kepDiv.innerHTML = `
            <img src="${telepules.kep}" alt="${telepules.nev} képe">
        `;
        return kepDiv;
    }
    });