// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo la parola
var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);

// reverse parolaUtente
function reverse(str) {
  return strReverse = str.split("").reverse().join("");
};

// check parolaUtente == reverse parolaUtente
if (parolaUtente == reverse(parolaUtente)) {
  console.log("palindroma");
}else {
  console.log("non è palindroma");
}
