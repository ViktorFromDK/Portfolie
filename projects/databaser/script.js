let x;
let listWithLearned = []; // Laver variablen "listWithLearned" til en liste. Markeret med []
let listLearnedNumber = []; // Laver variablen "listLearnedNumber" til en liste. Markeret med []
let data;
var theme = null // Sætter variablen til ingenting
var explanation = "Korrekt svar:" // Sætter variablen til ingenting
var image = null // Sætter variablen til ingenting
let trigger = 1; // Tjekker om svaret er vist

function next() {
  if (trigger == 1) { // Tjekker om svaret er blevet vist
    FindNew() // Finder nyt spørgsmål
    findText(x); // Kalder funktionen "genererTekst" med x som værdi
    document.getElementById('theme').innerHTML = overskrift; // Returnere information til HTML og "variablen" "theme"
    document.getElementById('question').innerHTML = "Forklar "+image; // Retunerere information til HTML og "variablen" "question"
    document.getElementById('explanation').innerHTML = "Korrekt svar:"; // Retunere information til HTML og "variablen" "explanation"
    trigger = 0 // Sætter at svaret ikke er vist for den nye
  } else {
    document.getElementById('explanation').innerHTML = "Korrekt svar: TRYK VIS SVAR FØRST"; // Informere brugeren om at man skal vise svaret før man kan gå videre
  }
}

function learned() {
  if (trigger == 1) { // Tjekker om svaret er blevet vist
    listLearnedNumber.push(x) // Tilføjer variablen x's værdi til variabellisten "listWithLearned"
    listWithLearned.push(" "+image) // Tilføjer overskriften til variabellisten "listLearnedNumber"
    document.getElementById('choose').innerHTML = "Lærte begreber: "+listWithLearned; // Returnere information til HTML og "variablen" "choose"
    next() // Trigger valg af næste spørgsmål
  } else {
    document.getElementById('explanation').innerHTML = "Korrekt svar: TRYK VIS SVAR FØRST"; // Informere brugeren om at man skal vise svaret før man kan gå videre
  }
}

function FindNew() {
  y = Math.floor(Math.random()*26+1); // Vælger tilfældig mellem 1 og 5. Math.random vælger mellem 0 og 1 og derfor ganges med antallet af muligheder og ligger en til for at starte ved 1. Math.floor runder ned til nærmeste hele tal.
  if (listLearnedNumber.includes(y)) { // Tjekker om y's værdi er i listen "listLearnedNumber"
    FindNew() // Hvis y er i listen så starter den sig selv forfra
  } else {
    x = y // Hvis y ikke er i listen sætter den x's værdi til at være y's værdi
  }
}

function reveal(){
  document.getElementById('explanation').innerHTML = "Korrekt svar: "+beskrivelse; // Returnere information til HTML og "variablen" "beskrivelse"
  trigger = 1 // Sætter at svaret er blevet vist
}

function findText(x){
  for (var i = 0; i < data.length; i++) { // Starter med at sætte i til 0 og bliver ved med at køre indtil den bliver afbrudt
    if (data[i]["ID"] == x) { // Tjekker om i er det samme som den angivede x
      overskrift = data[i]['theme']; // Sætter "overskrift" til at være den returnede data fra databasen
      beskrivelse = data[i]['explanation']; // Sætter "beskrivelse" til at være den returnede data fra databasen
      image = data[i]['image']; // Sætter "beskrivelse" til at være den returnede data fra databasen

      break; // exit efter loop
    }
  }
}

window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "flashcards.csv", true); // Vælger data filen
  xhr.responseType = "text";
  xhr.onload = function() {
    data = Papa.parse(xhr.responseText, { // Bruger tidligere indlæst bibliotek
      header: true // set this to true if the first row contains the header names
    }).data;
  };
  xhr.send();
}
