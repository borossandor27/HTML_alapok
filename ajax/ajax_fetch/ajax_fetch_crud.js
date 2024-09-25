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

function frissAdatokTablazatba(dataList) {
  htmlData = `
    <table class="table table-striped caption-top">
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
  for (let index in dataList) {
    //console.log(key, dataList.hasOwnProperty(key));
    if (dataList.hasOwnProperty(index)) {
      let element = dataList[index];
      htmlData += `
            <tr>
                <td>${element.id}</td>
                <td>${element.nev}</td>
                <td>${dateFormatter(new Date(element.szuletett))}</td>
                <td>${element.reszleg}</td>
                <td>${new Intl.NumberFormat("hu-HU").format(element.bér)}</td>
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
function editDolgozo(id) {
  console.log("Edit:", id);
  document.getElementById("listazasDiv").style.display = "none";
  document.getElementById("urlapDiv").style.display = "block";
  adatokUrlapba(id);
  modositasokKuldese(id);
 // document.getElementById("listazasDiv").style.display = "block";
  //document.getElementById("urlapDiv").style.display = "none";
}

function deleteDolgozo(id) {
  console.log("Delete:", id);
  document.getElementById("listazasDiv").style.display = "none";
  document.getElementById("urlapDiv").style.display = "block";
  adatokUrlapba(id);
  torlesKuldese(id);
  //document.getElementById("listazasDiv").style.display = "none";
  //document.getElementById("urlapDiv").style.display = "block";
}
async function adatokUrlapba(id) {
  try {
    let response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      throw new Error(`Hiba történt a lekérés során: ${response.status}`);
    }

    let data = await response.json();

    // Csak akkor hívjuk meg, ha minden sikeres volt
    urlapMezokKitoltese(data);
  } catch (error) {
    console.error("Hiba történt:", error);
    // hibaüzenetet a felhasználónak is
    alert("Hiba történt az adatok lekérdezése során!");
  }
}
async function modositasokKuldese(id) {
  const form = document.getElementById("dolgozo_form");
  
    const formData = new FormData(form); // az űrlap adatainak lekérése
    const data = Object.fromEntries(formData); // FormData objektum átalakítása sima objektummá
    console.log("Módosítások küldése:", data);

    try {
      let response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Hiba történt a módosítás során: ${response.status}`);
      }

      let responseData = await response.json();
      console.log("Módosítások eredménye:", responseData);
      tablazatFrissitese();
    } catch (error) {
      console.error("Hiba történt:", error);
      // hibaüzenetet a felhasználónak is
      alert("Hiba történt az adatok módosítása során!");
    }
}
async function torlesKuldese(id) {
  const form = document.getElementById("urlap");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log("Törlés küldése:", data);

    try {
      let response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Hiba történt a törlés során: ${response.status}`);
      }

      let responseData = await response.json();
      console.log("Törlés eredménye:", responseData);
      tablazatFrissitese();
    } catch (error) {
      console.error("Hiba történt:", error);
      // hibaüzenetet a felhasználónak is
      alert("Hiba történt az adatok törlése során!");
    }
  });
}

function urlapMezokKitoltese(data) {
  console.log("Kitöltés:", data);
  document.getElementById("id").value = data.id;
  document.getElementById("nev").value = data.nev;
  document.getElementById("bér").value = data.bér;
  document.getElementById("szul_datum").value = dateFormatter(
    new Date(data.szuletett)
  );
  document.getElementById("reszleg").value = data.reszleg;
}

document.addEventListener("DOMContentLoaded", () => {
  birtdayDefaultValue();
  tablazatFrissitese();
});
