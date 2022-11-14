// Chiedo l'input all'utente di due parole 
let parola1 = prompt("Scrivi una parola");
let parola2 = prompt("Scrivi un'altra parola");

// Verifico la lunghezza delle parole e le stampo per ordine di grandezza
if (parola1.length > parola2.length){
    console.log(parola1);
    console.log(parola2);
} else if (parola1.length < parola2.length){
    console.log(parola2);
    console.log(parola1);
}

