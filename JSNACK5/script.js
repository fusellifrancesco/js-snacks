// Dichiaro un array vuoto
let arrayNumeri = [];

// Chiedo 6 input all'utente
for (i = 0; i < 6; i++){
    let numero = parseInt(prompt("Inserisci un numero"));
    
    // Controllo quando un numero è dispari 
    let restoNumero = numero % 2;
    
    if (restoNumero != 0){
        
        // quando il numero è dispari lo aggiungo all'array
        arrayNumeri.push(numero);
    }
}


// stampo l'array
console.log(arrayNumeri);


/*
// Chiedo l'input all'utente
let numero1 = prompt("Inserisci un numero");
let numero2 = prompt("Inserisci un numero");
let numero3 = prompt("Inserisci un numero");
let numero4 = prompt("Inserisci un numero");
let numero5 = prompt("Inserisci un numero");
let numero6 = prompt("Inserisci un numero");

let restoNumero1 = numero1 % 2;
let restoNumero2 = numero2 % 2;
let restoNumero3 = numero3 % 2;
let restoNumero4 = numero4 % 2;
let restoNumero5 = numero5 % 2;
let restoNumero6 = numero6 % 2;

if (restoNumero1 == 0){
    arrayNumeri.push(numero1);
} else if (restoNumero2 == 0){
    arrayNumeri.push(numero2);
} else if (restoNumero3 == 0){
    arrayNumeri.push(numero3);
} else if (restoNumero4 == 0){
    arrayNumeri.push(numero4);
} else if (restoNumero)


console.log(
    `
    ------La nuova array è------
    ${arrayNumeri}
    `
)

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
*/