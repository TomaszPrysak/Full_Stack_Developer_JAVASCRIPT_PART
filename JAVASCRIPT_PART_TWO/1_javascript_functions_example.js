
function witaj(){ // funkcja bez zwracania żadnej wartości, tylko wykonuje polecenie
  window.alert("Witaj ! Tekst powstawł za pomocą funkcji bezargumentowej i bez zwracania wartości");
}

function dodawanie(x, y=10){
  sum = x + y;
  return sum;
}

function akapit(imie="Tomek"){
  var text = "Cześć" + " " + imie + " na naszej stronie internetowej - tekst powstał za pomocą funkcji z dwoma argumentami zwierającymi wartości domyślne oraz ze zwracaniem wartości";
  return text;
}

function smak(co="ser pleśniowy", x=10){
  var text = "Uwielbiasz jeść " + co + " i mógłbys to jeść " + x + " razy dziennie - tekst powstał za pomocą funkcji z dwoma argumentami zawierającymi wartości domyslne oraz ze zwracaniem wartości";
  return text;
}

var imie = "Euzebiusz (argument jako zmienna)";

witaj();

document.getElementById("pierwszy").innerHTML = dodawanie(2,3) + " - suma powstała za pomocą funkcji z dwoma argumentami z których jeden zawiera wartość domyślą oraz ze zwracaniem wartości";

document.getElementById("drugi").innerHTML = akapit(imie); // jako argumentu funkcji użyto zmiennej

document.getElementById("trzeci").innerHTML = smak();
