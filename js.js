// Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
// A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
// ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
// assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

// Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
// Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
// In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione

// In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
// Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
// ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
// Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.


const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
const luca = {
    name: "Luca",
    lastName: "Bianchi",
    isAmbassador: false,
  }
const anna = {
    name: "Anna",
    lastName: "Verdi",
    isAmbassador: true,
  }
  
const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

  let totale = 0;
  for (let i = 0; i < prices.length; i++){
    totale += prices [i]
  }    
  console.log(totale)

  if(utenteCheEffettuaLAcquisto.isAmbassador === true){

    totale = totale - ((totale / 100) * 30) 

    console.log('totale scontato is ambassador ' + totale);
  } else {

    console.log('totale NON scontato ' + totale);
  }
  

  // if(totale < 100){
  //   totale += shippingCost
  //   console.log('totale sotto i 100 euro, devi pagare 50 euro di spedizione. Il tuo totale è ' + totale)
  // } else {
  //   console.log('Il tuo totale supera i 100 euro quindi hai la spedizione gratuita. Il costo è :' + totale)
  // }

  ((totale < 100) === true) 
  ? console.log('totale sotto i 100 euro, devi pagare 50 euro di spedizione. Il tuo totale è ' + (totale += shippingCost))
  : console.log('Il tuo totale supera i 100 euro quindi hai la spedizione gratuita. Il costo è :' + totale)

let contenitoreUser = []
contenitoreUser.push(amy, paul, marco, luca, anna)

for (let index = 0; index < contenitoreUser.length; index++) {
  let utente = contenitoreUser[index]

  // !!!!!!!!!!!!!!!!!!!!!!!!!! `${.....}`
  let nomeEcognome = utente.name + ' ' + utente.lastName
  
  // if(utente.isAmbassador === true){
  //   console.log(nomeEcognome + ' -- è un ambassador');
  // } else {
  //   console.log(nomeEcognome + ' ----- NON è un ambassador');
  // }

  utente.isAmbassador === true
  ? console.log(nomeEcognome + ' -- è un ambassador')
  : console.log(nomeEcognome + ' ----- NON è un ambassador')

}

let soloAmbassador = []
for (let index = 0; index < contenitoreUser.length; index++) {

  let user = contenitoreUser[index]
  if (user.isAmbassador === true){
      soloAmbassador.push(user)

  }
}
  console.log(soloAmbassador)

  // user.isAmbassador === true 
  // ? soloAmbassador.push(user)

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log(soloAmbassador)