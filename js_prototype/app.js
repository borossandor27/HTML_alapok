const szemely = {
  nev: "János",
  koszont: function() {
    return `Szia, a nevem ${this.nev}`;
  }
};

const diak = Object.create(szemely);
diak.osztaly = "10.A";

console.log(diak.nev); // "János" - a prototípusból örökölve
console.log(diak.koszont()); // "Szia, a nevem János" - prototípusból
console.log(diak.osztaly); // "10.A" - saját tulajdonság