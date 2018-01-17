// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
var studentsArray = []

// Create the functions for the tasks

// ADD A NEW STUDENT
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(name){
  studentsArray.push(name);
}

// REMOVE STUDENT
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript


// DISPLAY ROSTER
// Create a function called display that prints out the orster to the console.

function display(){
  alert(studentsArray);
}

// Start by asking if they want to use the web app

var firstDecision = prompt('Witaj w aplikacji "Lista Studentów"\nZa pomocą naszej aplikacji możesz stworzyć listę studentów oraz ją modyfikować\nCzy chcesz włączyć aplikację ?\n(T)ak - przejdź dalej\n(N)ie - wyjdź z aplikacji');
var fD = firstDecision.toLowerCase();
while(fD != "t" && fD != "n"){
  firstDecision = prompt("Wybrałeś zły wariant ponów wybór\nCzy chcesz włączyć aplikację ?\n(T)ak - przejdź dalej\n(N)ie - wyjdź z aplikacji");
  fD = firstDecision.toLowerCase();
}


// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (fD === "t") {
  var secondDecision = prompt("Wybierz polecenie jakie chcesz wykonać:\nadd - dodaj imię studenta do listy\nremove - usunięcie studenta z listy\ndisplay - wyświetl aktualną liste studentów\nquit - wyjście z aplikacji");
  var sD = secondDecision.toLowerCase();
  while (sD === "add" || sD === "remove" || sD === "display") {
    if (sD === "add") {
      var studentName = prompt("Podaj imię studenta do dodania do listy:");
      addNew(studentName);
    }else if (sD === "remove") {
      
    }else if (sD === "display") {
      display();
    }
    secondDecision = prompt("Wybierz polecenie jakie chcesz wykonać:\nadd - dodaj imię studenta do listy\nremove - usunięcie studenta z listy\ndisplay - wyświetl aktualną liste studentów\nquit - wyjście z aplikacji");
    sD = secondDecision.toLowerCase();
  }
} else {
  alert("Dziękujemy za skorzystanie z naszej aplikacji")
}
