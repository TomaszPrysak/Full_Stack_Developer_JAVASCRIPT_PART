// Deklaracja i inicjalizacja zmiennych z informacjami podawanymi od użytkownika

var fname = prompt("Hi ! Please enter your first name:");

var lname = prompt("Now, please enter your last name:");

var age = prompt("And now, enter your age:");

var height = prompt("Hmmm... I am interesting, how toll are you:");

var pet = prompt("Do you have a pet ? What is it name ?")

alert("Thank you so much for the information.");

// Zmienne pomocnicze

var lowerLastname = lname[0].toLowerCase(); // pierwsza litera imienia, aby zabezpieczyć się przed tym co wprowadzi użytkownik zamieniono ją na małą literę

var lowerFirstname = fname[0].toLowerCase(); // pierwsza litera nazwiska, aby zabezpieczyć się przed tym co wprowadzi użytkownik zamieniono ją na małą literę

var lastPet = pet[pet.length-1].toLowerCase(); // ostatnia litera imienia zwierzaka, aby zabezpieczyć się przed tym co wprowadzi użytkownik zmienieniono ją na małą literę

// 1. Sposób rozwiązania - wszystkie warunki sprawdzone zostały w jedym momencie.
// Główny warunek projektu

if ( (lowerFirstname === lowerLastname) && (20 < age <30) && (height >= 175) && (lastPet === "y")) {
  console.log("YOU ARE SPY!");
} else {
  console.log("Nothing to see here. Good Bye !");
}

// 2. Sposób rozwiązania - wprowadzono dodatkowe zmienne oznaczające spełnienie poszczególnych warunków.
//    Nastepnie sprawdzono osobno poszczególne warunki. Jeżeli jakiś warunek został spełniony to odpowiednia zmienna przybierała wartość true. Jeżeli nie to false.
//    Na końcu w głónycm warunku sprawdzono czy wszystkie zmienne są true. Wówczas w konsoli wyświetla się odpowiedni komunikat.
//    Dłuższy sposób ale bardziej przejrzysty.

// // Warunki pomocnicze
//
// var nameCond = null;
// var ageCond = null;
// var heightCond = null;
// var petCond = null;
//
// // Warunek imienia i nazwiska
//
// if (lowerLastname === lowerFirstname) {
//   nameCond = true;
// } else {
//   nameCond = false;
// }
//
// // Warunek wieku
//
// if (20 < age < 30) {
//   ageCond = true;
// } else {
//   ageCond = false;
// }
//
// // Warunek wzrostu
//
// if (height >= 175) {
//   heightCond = true;
// } else {
//   heightCond = false;
// }
//
// // Warunek zwierzaka
//
// if (lastPet === "y") {
//   petCond = true;
// } else {
//   petCond = false;
// }
//
// // Warunek główny projektu
//
// if (nameCond && ageCond && heightCond && petCond) {
//   console.log("YOU ARE SPY!");
// } else {
//   console.log("Nothing to see here. Good Bye !");
// }
