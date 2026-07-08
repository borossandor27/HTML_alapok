// Konstruktor függvény
function Allat(nev) {
  this.nev = nev;
}

// Metódus hozzáadása a prototípushoz
Allat.prototype.beszél = function() {
  return `${this.nev} mondja: ...`;
};

Allat.prototype.eszik = function() {
  return `${this.nev} eszik`;
};

const kutya = new Allat("Bodri");
console.log(kutya.beszél()); // "Bodri mondja: ..."
console.log(kutya.eszik()); // "Bodri eszik"