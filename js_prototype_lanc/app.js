// Egy teljes prototype lánc elemzése
function Kutya(nev) {
  this.nev = nev;
}

Kutya.prototype.ugat = function() {
  return "Vau!";
};

const bodri = new Kutya("Bodri");

function getPrototypeChain(obj) {
  const chain = [];
  let current = obj;
  
  while (current) {
    chain.push({
      object: current,
      constructor: current.constructor ? current.constructor.name : 'N/A'
    });
    current = Object.getPrototypeOf(current);
  }
  
  return chain;
}

const chain = getPrototypeChain(bodri);
chain.forEach((item, index) => {
  console.log(`${index}. ${item.constructor}`);
});
// 0. Kutya
// 1. Object
// 2. N/A (itt a null)