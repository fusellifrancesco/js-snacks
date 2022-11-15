/*
// Chiedo l'input all'utente di 10 numeri
let numero1 = prompt("Inserisci un numero casuale");
let numero2 = prompt("Inserisci un numero casuale");
let numero3 = prompt("Inserisci un numero casuale");
let numero4 = prompt("Inserisci un numero casuale");
let numero5 = prompt("Inserisci un numero casuale");
let numero6 = prompt("Inserisci un numero casuale");
let numero7 = prompt("Inserisci un numero casuale");
let numero8 = prompt("Inserisci un numero casuale");
let numero9 = prompt("Inserisci un numero casuale");
let numero10 = prompt("Inserisci un numero casuale");

// Converto le stringhe in numeri, le sommo e stampo il risultato
let somma = Number(numero1)+Number(numero2)+Number(numero3)+Number(numero4)+Number(numero5)+
            Number(numero6)+Number(numero7)+Number(numero8)+Number(numero9)+Number(numero10);
*/

let numeroUtente;
let arrayNumeri = [];

for (i = 0; i < 10; i++){

    // Chiedo 10 numeri all'utente
    numeroUtente = parseInt(prompt("Inserisci un numero"));
    
    // Inserisco numero digitato nell'array
    arrayNumeri.push(numeroUtente);
}

// Stampo elementi array
console.log(arrayNumeri);

// Creo variabile somma
let somma = 0;
for (i = 0; i < arrayNumeri.length; i++){

    // Stampo elementi array
    numeroUtente = arrayNumeri[i];
    console.log(i + ". " + numeroUtente);
    
    // Somma elementi
    somma += numeroUtente;
}

console.log("La somma è: " + somma);

