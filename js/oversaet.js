// -------------- Oversættelse af bestillingsskærm --------------

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const forretterEl = document.querySelectorAll('a');

// -------------- Finder de classes der skal oversættes --------------
link.forEach(el => {
  el.addEventListener('click', () => {
    //langEl.querySelector('.active').classList.remove('active');
    //el.classList.add('active');

    const attr = el.getAttribute('language');

    document.querySelector('.forretter').textContent = data[attr].forretter;
    document.querySelector('.hovedretter').textContent = data[attr].hovedretter;
    document.querySelector('.desserter').textContent = data[attr].desserter;
    document.querySelector('.bestilling').textContent = data[attr].bestilling;
    document.querySelector('.valg').textContent = data[attr].valg;
    document.querySelector('.mforret').textContent = data[attr].mforret;
    document.querySelector('.mhovedret').textContent = data[attr].mhovedret;
    document.querySelector('.mdesserter').textContent = data[attr].mdesserter;
    document.querySelector('.betal').textContent = data[attr].betal;
    document.querySelector('.ryd').textContent = data[attr].ryd;
    document.querySelector('.fret1').textContent = data[attr].fret1;
    document.querySelector('.fret2').textContent = data[attr].fret2;
    document.querySelector('.fret3').textContent = data[attr].fret3;
    document.querySelector('.fret4').textContent = data[attr].fret4;
    document.querySelector('.fret5').textContent = data[attr].fret5;
    document.querySelector('.fret6').textContent = data[attr].fret6;
    document.querySelector('.fret8').textContent = data[attr].fret8;
    document.querySelector('.hret1').textContent = data[attr].hret1;
    document.querySelector('.hret2').textContent = data[attr].hret2;
    document.querySelector('.hret5').textContent = data[attr].hret5;
    document.querySelector('.hret7').textContent = data[attr].hret7;
    document.querySelector('.hret9').textContent = data[attr].hret9;
    document.querySelector('.dret3').textContent = data[attr].dret3;
    document.querySelector('.dret4').textContent = data[attr].dret4;
    document.querySelector('.dret5').textContent = data[attr].dret5;
    document.querySelector('.dret6').textContent = data[attr].dret6;
    document.querySelector('.dret7').textContent = data[attr].dret7;
    document.querySelector('.dret8').textContent = data[attr].dret8;
    document.querySelector('.dret9').textContent = data[attr].dret9;
    document.querySelector('.fpris1').textContent = data[attr].fpris1;
    document.querySelector('.fpris2').textContent = data[attr].fpris2;
    document.querySelector('.fpris3').textContent = data[attr].fpris3;
    document.querySelector('.fpris4').textContent = data[attr].fpris4;
    document.querySelector('.fpris5').textContent = data[attr].fpris5;
    document.querySelector('.fpris6').textContent = data[attr].fpris6;
    document.querySelector('.fpris7').textContent = data[attr].fpris7;
    document.querySelector('.fpris8').textContent = data[attr].fpris8;
    document.querySelector('.fpris9').textContent = data[attr].fpris9;
    document.querySelector('.hpris1').textContent = data[attr].hpris1;
    document.querySelector('.hpris2').textContent = data[attr].hpris2;
    document.querySelector('.hpris3').textContent = data[attr].hpris3;
    document.querySelector('.hpris4').textContent = data[attr].hpris4;
    document.querySelector('.hpris5').textContent = data[attr].hpris5;
    document.querySelector('.hpris6').textContent = data[attr].hpris6;
    document.querySelector('.hpris7').textContent = data[attr].hpris7;
    document.querySelector('.hpris8').textContent = data[attr].hpris8;
    document.querySelector('.hpris9').textContent = data[attr].hpris9;
    document.querySelector('.dpris1').textContent = data[attr].dpris1;
    document.querySelector('.dpris2').textContent = data[attr].dpris2;
    document.querySelector('.dpris3').textContent = data[attr].dpris3;
    document.querySelector('.dpris4').textContent = data[attr].dpris4;
    document.querySelector('.dpris5').textContent = data[attr].dpris5;
    document.querySelector('.dpris6').textContent = data[attr].dpris6;
    document.querySelector('.dpris7').textContent = data[attr].dpris7;
    document.querySelector('.dpris8').textContent = data[attr].dpris8;
    document.querySelector('.dpris9').textContent = data[attr].dpris9;
  });
});

// -------------- Her er oversættelserne --------------

// -------------- Dansk --------------
var data = {
  "dansk": {
    "forretter": "Forretter",
    "hovedretter": "Hovedretter",
    "desserter": "Desserter",
    "bestilling": "Bestilling",
    "valg": "Klik på en ret for at tilføje den til din bestilling",
    "mforret": "Forretter",
    "mhovedret": "Hovedretter",
    "mdesserter": "Desserter",
    "mdrikkevarer": "Drikkevarer",
    "betal": "Betal",
    "ryd": "Ryd bestilling",
    "fret1": "Grøn salat", "fret2": "Salat m. kylling", "fret3": "Karrysuppe", "fret4": "Hvidløgsbrød", "fret5": "Tomatsuppe", "fret6": "Fladbrød", "fret8": "Smørrebrød",
    "fpris1": "Pris: 49 kr.", "fpris2": "Pris: 59 kr.", "fpris3": "Pris: 59 kr.", "fpris4": "Pris: 49 kr.", "fpris5": "Pris: 59 kr.", "fpris6": "Pris: 49 kr.", "fpris7": "Pris: 79 kr.", "fpris8": "Pris: 69 kr.", "fpris9": "Pris: 49 kr.",
    "hret1": "Laksefilet", "hret2": "Herregårdsbøf", "hret5": "Vegetarburger", "hret7": "Nachos m. kylling", "hret9": "Vegetar pizza",
    "hpris1": "Pris: 149 kr.", "hpris2": "Pris: 159 kr.", "hpris3": "Pris: 159 kr.", "hpris4": "Pris: 149 kr.", "hpris5": "Pris: 159 kr.", "hpris6": "Pris: 149 kr.", "hpris7": "Pris: 179 kr.", "hpris8": "Pris: 169 kr.", "hpris9": "Pris: 149 kr.",
    "dret3": "Flydende chokoladekage", "dret4": "Pandekager", "dret5": "Æblekage", "dret6": "Jordbærdonut", "dret7": "Is-sandwich", "dret8": "Chokoladeis", "dret9": "Sandkage",
    "dpris1": "Pris: 49 kr.", "dpris2": "Pris: 49 kr.", "dpris3": "Pris: 49 kr.", "dpris4": "Pris: 49 kr.", "dpris5": "Pris: 49 kr.", "dpris6": "Pris: 49 kr.", "dpris7": "Pris: 49 kr.", "dpris8": "Pris: 49 kr.", "dpris9": "Pris: 49 kr.",

// -------------- Engelsk --------------
  },
  "english": {
    "forretter": "Starters",
    "hovedretter": "Main courses",
    "desserter": "Desserts",
    "bestilling": "Your order",
    "valg": "Click on a dish to add it to your order",
    "mforret": "Starters",
    "mhovedret": "Main courses",
    "mdesserter": "Desserts",
    "mdrikkevarer": "Drinks",
    "betal": "Pay",
    "ryd": "Cancel order",
    "fret1": "Green salad", "fret2": "Chicken salad", "fret3": "Curry soup", "fret4": "Garlic bread", "fret5": "Tomato soup", "fret6": "Flatbread", "fret8": "Open Sandwiches",
    "fpris1": "Price: DKK 49", "fpris2": "Price: DKK 59", "fpris3": "Price: DKK 59", "fpris4": "Price: DKK 49", "fpris5": "Price: DKK 59", "fpris6": "Price: DKK 49", "fpris7": "Price: DKK 79", "fpris8": "Price: DKK 69", "fpris9": "Price: DKK 49",
    "hret1": "Salmon steak", "hret2": "Steak", "hret5": "Veggie burger", "hret7": "Nachos w. chicken", "hret9": "Veggie pizza",
    "hpris1": "Price: DKK 149", "hpris2": "Price: DKK 159", "hpris3": "Price: DKK 159", "hpris4": "Price: DKK 149", "hpris5": "Price: DKK 159", "hpris6": "Price: DKK 149", "hpris7": "Price: DKK 179", "hpris8": "Price: DKK 169", "hpris9": "Price: DKK 149",
    "dret3": "Lava cake", "dret4": "Pancakes", "dret5": "Apple cake", "dret6": "Strawberry donut", "dret7": "Ice-cream sandwich", "dret8": "Chocolate ice-cream", "dret9": "Sponge cake",
    "dpris1": "Price: DKK 49", "dpris2": "Price: DKK 49", "dpris3": "Price: DKK 49", "dpris4": "Price: DKK 49", "dpris5": "Price: DKK 49", "dpris6": "Price: DKK 49", "dpris7": "Price: DKK 49", "dpris8": "Price: DKK 49", "dpris9": "Price: DKK 49",
  }
};
