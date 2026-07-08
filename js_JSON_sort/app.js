var places = [];

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Document loaded');

    try {
        const module = await import('./places.json', { with: { type: 'json' } });
        places = module.default;
    } catch (error) {
        console.error('❌ Hiba a JSON betöltésekor:', error.message);
        // esetleg alapértelmezett adat
        places = [{ name: 'Alapértelmezett hely' }];
        // kilepés hiba esetén
        throw new Error('Hiba a JSON betöltésekor');
    }

    console.log(places);

    const list_forras = document.getElementById('forras');
    list_forras.innerHTML = ''; // Clear existing content
    places.forEach(place => {
        const item = document.createElement('li');
        item.textContent = `${place.city}, ${place.country}`;
        list_forras.appendChild(item);
    });

    // Sort places by city name
    places.sort((a, b) => {
        if (a.city < b.city) {
            return -1;
        }
        if (a.city > b.city) {
            return 1;
        }
        return 0;
    });

    const list_places = document.getElementById('places');
    list_places.innerHTML = ''; // Clear existing content
    places.forEach(place => {
        const item = document.createElement('li');
        item.textContent = `${place.city}, ${place.country}`;
        list_places.appendChild(item);
    });


    // Output sorted places to the console
    console.log('Sorted Places:');
    places.forEach(place => {
        console.log(`${place.city}, ${place.country}`);
    });
});

