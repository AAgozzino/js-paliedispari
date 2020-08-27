// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente pari o dispari
var eoUtente = prompt("Inserisci p per pari, d per dispari");
console.log(eoUtente);
// Chiedo all'utente di inserire un numero da 1 a 5
var numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numUtente);
// FUNZIONE - Genero un numero casuale tra 1 e 5 per pc
function numGenerator(min, max) {
  var generator = Math.floor(Math.random() * (max - min) + min);
  return generator;
}
var numComputer = numGenerator(1, 5);
console.log(numComputer);
// Somma numeroUtente + numeroPc
var somma = numComputer + numUtente;
// FUNZIONE - somma pari o dispari
function isEven(n) {
  if (n % 2 == 0){
    return true;
  } else{
    return false;
  }
};
var evenOdd = isEven(somma);
console.log(evenOdd);
// Vincitore
if (evenOdd == true && eoUtente == "p") {
  console.log("PARI - hai vinto!!!");
} else if (evenOdd == true && eoUtente == "d") {
  console.log("DISPARI - hai perso");
} else if (evenOdd == false && eoUtente == "p") {
  console.log("PARI - hai perso");
} else {
  console.log("DISPARI - hai vinto");
};
