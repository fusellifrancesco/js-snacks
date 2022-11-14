// Dichiaro un array vuoto
let arrayNumeri = [];

// Chiedo l'input all'utente
let numero1 = prompt("Inserisci un numero");
let numero2 = prompt("Inserisci un numero");
let numero3 = prompt("Inserisci un numero");
let numero4 = prompt("Inserisci un numero");
let numero5 = prompt("Inserisci un numero");
let numero6 = prompt("Inserisci un numero");

let RestoNumero1 = numero1 % 2;
let RestoNumero2 = numero2 % 2;
let RestoNumero3 = numero3 % 2;
let RestoNumero4 = numero4 % 2;
let RestoNumero5 = numero5 % 2;
let RestoNumero6 = numero6 % 2;

switch (arrayNumeri){
    case (RestoNumero1 = 0):
        arrayNumeri.push(numero1);
    
    case (RestoNumero2 = 0):
        arrayNumeri.push(numero2);

    case (RestoNumero3 = 0):
        arrayNumeri.push(numero3);
    
    case (RestoNumero4 = 0):
        arrayNumeri.push(numero4);

    case (RestoNumero5 = 0):
        arrayNumeri.push(numero5);

    case (RestoNumero6 = 0):
        arrayNumeri.push(numero6);

}

console.log(
    `
    ------La nuova array è------
    ${arrayNumeri}
    `
)