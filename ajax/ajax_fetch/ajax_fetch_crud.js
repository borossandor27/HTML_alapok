const url = "https://retoolapi.dev/JFPUQf/data";
function birtdayDefaultValue() {
  const today = new Date();

  // 20 év levonása
  const twentyYearsAgo = new Date(today.setFullYear(today.getFullYear() - 20));

  // Beállítás a dátum input mezőn
  document.getElementById("szul_datum").value = dateFormatter(twentyYearsAgo);
}
function dateFormatter(date) {
  // Dátum formázása: YYYY-MM-DD
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // hónap 0-alapú, ezért +1
  const day = ("0" + date.getDate()).slice(-2); // nap formázása két számjegyre

  return `${year}-${month}-${day}`;
}
function tablazatFrissitese() {
  adatokLekereseVegpontrol();
  frissAdatokTablazatba();
}
async function adatokLekereseVegpontrol() {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Hiba történt a lekérés során: ${response.status}`);
    }

    let data = await response.json();

    // Csak akkor hívjuk meg, ha minden sikeres volt
    frissAdatokTablazatba(data);
  } catch (error) {
    console.error("Hiba történt:", error);
    // hibaüzenetet a felhasználónak is
    alert("Hiba történt az adatok lekérdezése során!");
  }
}

function frissAdatokTablazatba(data) {
  htmlData = `
    <table class="table table-striped">
        <caption>Dolgozók listája</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Név</th>
                <th>Születési dátum</th>
                <th>Részleg</th>
                <th>Fizetés</th>
                <th>Műveletek</th>
            </tr>
        </thead>
        <tbody id="dolgozok">`;
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let element = data[key];
      htmlData += `
            <tr>
                <td>${element.id}</td>
                <td>${element.nev}</td>
                <td>${dateFormatter(new Date(element.szuletett))}</td>
                <td>${element.reszleg}</td>
                <td>${element.bér}</td>
                <td>
                    <button class="btn btn-outline-primary" onclick="editDolgozo(${
                      element.id
                    })"
                        title="Dolgozó tárolt adatainak a módosítása."><i class="fas fa-edit"></i></button>
                    <button class="btn btn-outline-danger" onclick="deleteDolgozo(${
                      element.id
                    })"
                        title="Dolgozó törlése az adatbázisból!"><i class="fas fa-trash"></i></button>
                </td>
            </tr>`;
    }
  }
  htmlData += `
        </tbody>
    </table>`;
  document.getElementById("dolgozok").innerHTML = htmlData;
}
document.addEventListener("DOMContentLoaded", () => {
  birtdayDefaultValue();
  tablazatFrissitese();
});
