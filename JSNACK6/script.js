// Chiedo l'input all'utente di un numero
let numeroUtente = prompt("Inserisci un numero da 0 a 10");

// Chiedo al computer di generare un numero random tra 0 e 10
let numeroRandomVirgola = Math.random() * 11;
let numeroRandomIntero = Math.floor(numeroRandomVirgola);

// Stampo i numeri del computer e dell'utente e il risultato del gioco
console.log("Il numero scelto dal Computer è: " + numeroRandomIntero);
console.log("Il numero scelto da te è: " + numeroUtente);

if (numeroUtente == numeroRandomIntero){
    console.log("HAI VINTO");
} else {
    console.log("HAI PERSO");
}