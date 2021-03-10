// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.

var student = {
 "nome": 'Laura',
 "cognome": 'Dionisi',
 "eta": '29'
}

// Stampare a schermo attraverso il for in tutte le proprietà.

for (var key in student) {
 console.log(student[key]);
}



// Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome

var classeStudenti = 
  [
   {
    "nome": 'Sebastiano',
    "cognome": 'Pasca',
    "eta": '23'
   },
   {
    "nome": 'Laura',
    "cognome": 'Caldaronello',
    "eta": '25'
   },
   {
    "nome": 'Emilio',
    "cognome": 'Colombo',
    "eta": '26'
   },

  ]

  // ???
  
  // for (var i = 0; i < classeStudenti.length; i++) {
  //  console.log(classeStudenti[i]);
  // }




// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

var studentName = prompt('Inserisci il tuo nome');
var surname = prompt('Inserisci il tuo cognome');
var age = prompt('Inserisci a tua età'),

newStudent = {
   "nome" : studentName,
   "cognome": surname,
   "eta": age,
};

classeStudenti.push(newStudent);

for (var key in classeStudenti) {
 console.log(classeStudenti[key]);
}