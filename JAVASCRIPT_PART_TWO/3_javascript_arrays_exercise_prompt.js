// FUNCTIONS OF APLICATION

// ADD A NEW STUDENT
function addNew(){
  var studentName = prompt("Podaj imię studenta do dodania do listy:");
  studentsArray.push(studentName);
  studentsArrayLen = studentsArray.length;
  menu();
}

// REMOVE STUDENT
function remove(){
  var studentName = prompt("Podaj imię studenta do usunięcia z listy:\n" + studentsArray);
  for (var i = 0; i < studentsArrayLen; i++) {
    if (studentsArray[i] == studentName) {
      studentsArray.splice(i,1);
      studentsArrayLen = studentsArray.length;
      break;
    }
  }
  menu();
}

// DISPLAY ARRAY
function display(){
  alert(studentsArray);
  menu();
}

// DISPLAY MENU
function menu(){
  var secondDecision = prompt("Wybierz polecenie jakie chcesz wykonać:\nadd - dodaj imię studenta do listy\nremove - usunięcie studenta z listy\ndisplay - wyświetl aktualną liste studentów\nquit - wyjście z aplikacji");
  var sD = secondDecision.toLowerCase();
  while (sD !== "add" && sD !== "remove" && sD !== "display" && sD !== "quit") {
    secondDecision = prompt("Wybrałeś zły wariant, ponów wybór:\nadd - dodaj imię studenta do listy\nremove - usunięcie studenta z listy\ndisplay - wyświetl aktualną liste studentów\nquit - wyjście z aplikacji");
    sD = secondDecision.toLowerCase();
  }
  userChoice(sD);
}

// MENU CHOICE BY USER
function userChoice(choice){
  if (choice === "add") {
    addNew();
  }else if (choice === "remove") {
    remove();
  }else if (choice === "display") {
    display();
  }else if (choice === "quit") {
    alert("Dziękujemy za skorzystanie z naszej aplikacji");
    return;
  }
}

//////////////////////////
// MAIN CODE OF APLICATION
var studentsArray = [];
var studentsArrayLen = studentsArray.length;
var firstDecision = prompt('Witaj w aplikacji "Lista Studentów"\nZa pomocą naszej aplikacji możesz stworzyć listę studentów oraz ją modyfikować\nCzy chcesz włączyć aplikację ?\n(T)ak - przejdź dalej\n(N)ie - wyjdź z aplikacji');
var fD = firstDecision.toLowerCase();
while(fD != "t" && fD != "n"){
  firstDecision = prompt("Wybrałeś zły wariant, ponów wybór\n(T)ak - włącz aplikację\n(N)ie - wyjdź z aplikacji");
  fD = firstDecision.toLowerCase();
}
if (fD === "t"){
  menu();
} else {
  alert("Dziękujemy za skorzystanie z naszej aplikacji");
}
