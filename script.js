"use strict";

let totale;
const scontoMinorenni = 20;
const scontoOver = 65;
const kmEuro = 0.21;
let eta = -1;
let i = 0;

let kmPercorso = prompt("Quanti km devi percorrere?");
while ((kmPercorso <= 0) && (i < 3)) {
    kmPercorso = prompt(`Inserisci un numero maggiore di ${kmPercorso} km`);
    i++;
}


if (kmPercorso <= 0) {
    alert("Il prezzo totale del biglietto non è calcolabile senza km validi");
}
else {
    while (eta < 0 || eta > 120) {
        eta = prompt("Inserisci un'età compresa tra 1 e 120 anni");
    }

    if (eta < 18) {
        totale = kmPercorso * kmEuro * (1 - scontoMinorenni / 100);
    } else if (eta >= 65) {50
        totale = kmPercorso * kmEuro * (1 - scontoOver / 100);
    } else {
        totale = kmPercorso * kmEuro;
    }

    alert(`Il prezzo totale del biglietto è ${totale.toFixed(2)} €`);
    console.log(totale);
}
