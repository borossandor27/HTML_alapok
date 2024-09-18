document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("register")
    .addEventListener("click", async function () {
        alert("Form data has been sent to the server!");
      let form = document.getElementById("regisztracio");
      let formData = new FormData(form);
      const output = document.getElementById("output");

      for (const [key, value] of formData) {
        output.textContent += `${key}: ${value}\n`;
        console.log(`${key}: ${value}`);
      }
    });
});
