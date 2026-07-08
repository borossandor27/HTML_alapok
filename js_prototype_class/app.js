class Allat {
  constructor(nev) {
    this.nev = nev;
  }
  
  beszel() {
    return `${this.nev} mondja: ...`;
  }
  
  eszik() {
    return `${this.nev} eszik`;
  }
}

const macska = new Allat("Cirmi");
console.log(macska.beszel()); // "Cirmi mondja: ..."