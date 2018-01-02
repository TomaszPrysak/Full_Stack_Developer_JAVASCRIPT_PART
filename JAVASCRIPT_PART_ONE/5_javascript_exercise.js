var age = parseInt(prompt("Podaj jaki jest dzisiaj dzień tygodnia:\n1-poniedzialek\n2-wtorek\n3-środa\n4-czwartek\n5-piątek\n6-sobota\n7-niedziela")); // użytko dodatkowo zamiany stringu na integer ponieważ w momencie przechwytywania wartości podawanej przez użytkownika jest ona zapisywana jako typ tekstowy danych

var text;

switch (age) {
  case 1:
    text = "Znowu poniedziałek... nieeeeeeee"
    break;
  case 2:
    text = "Już nie płacz. Jest już wtorek."
    break;
  case 3:
    text = "Liga Mistrzów ?!?!?!"
    break;
  case 4:
    text = "Jutro piąteczek :D"
    break;
  case 5:
    text = "PIĄTECZEK !!!"
    break;
  case 6:
    text = "OOOO sobota, można pospać"
    break;
  case 5:
    text = "Jutro poniedziałek !!!! :/"
    break;
  default:
    text = "Nie rób sobie jaj"
}

console.log(text);
