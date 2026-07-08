addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // Háttérszín változtatása
    document.getElementById('colorChangeBtn')?.addEventListener('click', function () {
        const colors = ['#f4f4f4', '#e6f7ff', '#ffe6e6', '#e6ffe6', '#fff2e6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // Színválasztó
    document.getElementById('colorPicker')?.addEventListener('input', function () {
        const selectedColor = this.value;
        const coloredText = document.getElementById('coloredText');
        if (coloredText) {
            coloredText.style.color = selectedColor;
        }
    });
    // Képváltó funkció
    const filmLista = document.getElementById('filmLista');
    const kedvencKep = document.getElementById('kedvencJelenet');

    // Alapértelmezett kép beállítása
    kedvencKep.src = "images/Placeholder.svg";

    filmLista.querySelectorAll('li').forEach(item => {
        item.addEventListener('mouseover', function () {
            const kepFajl = this.getAttribute('data-kepfajl');
            const img = new Image();
            img.src = kepFajl;

            img.onload = function () {
                kedvencKep.src = kepFajl;
            };

            img.onerror = function () {
                console.error("A kép nem tölthető be: " + kepFajl);
                kedvencKep.src = "images/placeholder.jpg";
            };
        });
    });

    // Dinamikus tartalom generálása
    const dynamicContent = document.getElementById('dynamicContent');
    if (dynamicContent) {
        dynamicContent.textContent = `Az oldal betöltve: ${new Date().toLocaleString()}`;
    }

    // Űrlap eseménykezelés
    document.getElementById('myForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Űrlap elküldve!');
    });

    // Legördülő lista eseménykezelés
    document.getElementById('mySelect')?.addEventListener('change', function () {
        console.log(`Kiválasztott érték: ${this.value}`);
    });
});