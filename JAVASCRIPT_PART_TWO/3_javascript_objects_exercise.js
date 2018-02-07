////////////
// Zadanie 1
// Pierwszy sposób
// Dodanie metody do obiektu poprzez zdefiniowanie jej poza obiektem
var employee1 = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

employee1.nameLength = function(){
	var nameStr = this.name;
	var nameLen = nameStr.length
	document.getElementById('resultExercise1').innerHTML = nameLen;
}

function nameLen(){
	employee1.nameLength(); // uruchomienie metody z obiektu jest w funkcji nameLen ponieważ jest to uruchamiane z przycisku, a do tej funkcji przypisany jest przycisk
}

// Drugi sposób
// Zaimplementowanie metody już w definicji obiektu
// var employee1 = {
//   name: "John Smith",
//   job: "Programmer",
//   age: 31,
// 	nameLength:function(){
// 		var nameStr = this.name;
// 		var nameLen = nameStr.length
// 		document.getElementById('resultExercise1').innerHTML = nameLen;
// 	}
// }
//
// function nameLen(){
// 	employee1.nameLength();  // uruchomienie metody z obiektu jest w funkcji nameLen ponieważ jest to uruchamiane z przycisku, a do tej funkcji przypisany jest przycisk
// }

////////////
// Zadanie 2
var employee2 = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

function loopForInObjectEmployee2(){
	for (var key in employee2){
		var firstCharKey = key[0].toUpperCase();
		var restCharKey = key.slice(1,key.length);
		var keyWithUpperChar = firstCharKey + restCharKey;
		alert(keyWithUpperChar + " is " + employee2[key]);
	}
}

////////////
// Zadanie 3
// Pierwszy sposób
// Dodanie metody do obiektu poprzez zdefiniowanie jej poza obiektem
var employee3 = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

employee3.lastName = function(){
	var nameStr = this.name
	var nameArray = nameStr.split(" ");
	document.getElementById('resultExercise3').innerHTML = nameArray[nameArray.length-1];
}

function lastNameShow(){
	employee3.lastName(); // uruchomienie metody z obiektu jest w funkcji lastNameShow ponieważ jest to uruchamiane z przycisku, a do tej funkcji przypisany jest przycisk
}

// Drugi sposób
// Zaimplementowanie metody już w definicji obiektu
// var employee3 = {
//   name: "John Smith",
//   job: "Programmer",
//   age: 31,
// 	lastName:function(){
// 		var nameStr = this.name
// 		var nameArray = nameStr.split(" ");
// 		document.getElementById('resultExercise3').innerHTML = nameArray[nameArray.length-1];
// 	}
// }
//
// function lastNameShow(){
// 	employee3.lastName(); // uruchomienie metody z obiektu jest w funkcji lastNameShow ponieważ jest to uruchamiane z przycisku, a do tej funkcji przypisany jest przycisk
// }
