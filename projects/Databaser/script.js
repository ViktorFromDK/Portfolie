let x;
let FN;
let listWithLearned = []; // Laver variablen "listeMedValgte" til en liste. Markeret med []
let data;
var theme = null // Sætter variablen til ingenting
var explanation = null // Sætter variablen til ingenting
var progression = null // Sætter variablen til ingenting

function next() {
  var pic;
  x = Math.floor(Math.random()*4+1); // Vælger tilfældig mellem 1 og 5. Math.random vælger mellem 0 og 1 og derfor ganges med antallet af muligheder og ligger en til for at starte ved 1. Math.floor runder ned til nærmeste hele tal.
  findText(x); // Kalder funktionen "genererTekst" med x som værdi
  pic = "https://github.com/mpsteenstrup/GCP4/blob/master/FN_maal/FN"+x+".jpg?raw=true" // Vælger billede baseret på x
  document.getElementById('theme').innerHTML = overskrift; // Returnere information til HTML og "variablen" "overskrift"
  document.getElementById('explanation').innerHTML = beskrivelse; // Returnere information til HTML og "variablen" "beskrivelse"
  document.getElementById('progression').innerHTML = progression; // Returnere information til HTML og "variablen" "progression"
  document.getElementById('question').src = pic; // Returnere information til HTML og "variablen" "myImage"
}

function learned(){
  console.log(x);
  console.log(FN);
  listWithLearned.push(overskrift) // Tilføjer overskriften som det sidste i listen med variable
  document.getElementById('choose').innerHTML = listWithLearned; // Returnere information til HTML og "variablen" "valg"
}

function findText(x){
  for (var i = 0; i < data.length; i++) { // Starter med at sætte i til 0 og bliver ved med at køre indtil den bliver afbrudt
    if (data[i]["ID"] == x) { // Tjekker om i er det samme som den angivede x
      overskrift = data[i]['theme']; // Sætter "overskrift" til at være den returnede data fra databasen
      beskrivelse = data[i]['explanation']; // Sætter "beskrivelse" til at være den returnede data fra databasen
      progression = data[i]['progression']+"%"; // Sætter "progression" til at være den returnede data fra databasen og sætter % efter

      break; // exit efter loop
    }
  }
}

window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "Flashcards.csv", true); // Vælger data filen
  xhr.responseType = "text";
  xhr.onload = function() {
    data = Papa.parse(xhr.responseText, { // Bruger tidligere indlæst bibliotek
      header: true // set this to true if the first row contains the header names
    }).data;
  };
  xhr.send();
}