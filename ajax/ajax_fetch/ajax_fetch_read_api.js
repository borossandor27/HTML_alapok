/*
    https://zipcodebase.com/ 
        Your API key: 01J7Y31PZQ7SEJ1BQ5CNHEHM29
        Try it in your browser: https://api.zipcodestack.com/v1/search?codes=90210&country=us
        https://zipcodestack.com/documentation/
*/
document.addEventListener("DOMContentLoaded", function () {
  var url = new URL("https://api.zipcodestack.com/v1/search?");
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  document.getElementById("fetch").addEventListener("click", async function () {
    let zip_code = document.getElementById("zip_code").value;
    let country = document.getElementById("country").value;
    if (zip_code === "" || country === "") {
      alert("Please fill the form!");
      return;
    }
    const url = `https://community-zippopotamus.p.rapidapi.com/${country}/${zip_code}`;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c9dc83b0cemsh3de750b13d1cc40p122975jsne2d6f7510e0b",
        "x-rapidapi-host": "community-zippopotamus.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      valaszMegjelenitese(JSON.parse(result));
    } catch (error) {
      console.error(error);
    }
  });
});

function valaszMegjelenitese(result) {
    let resultHtml = `
        <h2>Post code: ${result["post code"]}</h2>
        <p>Country: ${result["country"]} (${result["country abbreviation"]})</p>
        <h3>Places:</h3>
        <ul>
            ${result["places"].map(place => `
                <div>
                    <p><strong>Place name:</strong> ${place["place name"]}</p>
                    <p><strong>State:</strong> ${place.state} (${place["state abbreviation"]})</p>
                    <p><strong>Latitude:</strong> ${place.latitude}</p>
                    <p><strong>Longitude:</strong> ${place.longitude}</p>
                </div>
            `).join('')}
        </ul>
    `;
  document.getElementById("result").innerHTML = resultHtml;
}