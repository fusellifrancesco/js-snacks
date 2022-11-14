// Dichiaro un array e chiedo all'utente il suo nome
let arrayNomiInvitati = ["Marco", "Alessio", "Giorgia", "Andrea", "Luigi"];
let nomeUtente = prompt("Inserisci il tuo nome");
let nomeUtentePresenteInLista = false

// Controllo se il nome dell'utente è presente nella lista
for (let i = 0; i < arrayNomiInvitati.length; i++) {
    
    if(nomeUtente == arrayNomiInvitati[i]){
        console.log("BENVENUTO ALLA FESTA " + nomeUtente + " !!!");
        nomeUtentePresenteInLista = true;
        break;
    }
}

if (!nomeUtentePresenteInLista){
    console.log("Mi Dispiace ma il tuo nome non è presente sulla lista");
}

