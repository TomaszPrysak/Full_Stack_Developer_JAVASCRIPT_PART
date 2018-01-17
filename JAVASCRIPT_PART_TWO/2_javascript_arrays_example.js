var cities = ["Szczekociny", "Myszków", "Zawiercie"];

document.getElementById('a').innerHTML = cities;
document.getElementById('b').innerHTML = cities[0];

var city2 = cities[2];
document.getElementById('c').innerHTML = city2;

cities[1] = "Włoszczowa";
document.getElementById('d').innerHTML = cities;

var citiesLen = cities.length;
document.getElementById('e').innerHTML = citiesLen;

text1 = "<ul>";
for (var i = 0; i < citiesLen; i++) {
  text1 += "<li>" + cities[i] + "</li>";
}
text1 += "</ul>"
document.getElementById('f').innerHTML = text1;

text2 = "<ul>";
for (var y of cities) {
  text2 += "<li>" + y + "</li>";
}
text2 += "</ul>";
document.getElementById('g').innerHTML = text2;

text3 = "<ul>"
function printEach(item){
  text3 += "<li>" + item + "</li>";
}
text3 += "</ul>"
cities.forEach(printEach);
document.getElementById('h').innerHTML = text3;

// cities.push("Jędrzejów"); // dodanie nowego elementu, jednak poniżej dodatkowo, że dodajemy nowy element to jeszcze przypisujemy do zmiennej wynik polecenia, czyli nowa długość talbicy
var citiesLen = cities.push("Jędrzejów");
document.getElementById('i').innerHTML = cities;
document.getElementById('j').innerHTML = citiesLen;

// cities.pop(); // usunięcie z tablicy ostatniego elemenut, jednak poniżej dodatkowo że usuwamy ostatni element to jeszcze przypisujem do zmiennej wynik polecenia, czyli wartość usuwanego elementu
var lastItem = cities.pop();
document.getElementById('k').innerHTML = cities;
document.getElementById('l').innerHTML = lastItem;

document.getElementById('m').innerHTML = cities.toString();
document.getElementById('n').innerHTML = cities.join("_");

// cities.shift(); //
var firstItem = cities.shift();
document.getElementById('o').innerHTML = cities;
document.getElementById('p').innerHTML = firstItem;

// cities.unshift("Żarnowiec"); //
var newFirstItem = cities.unshift("Żarnowiec");
document.getElementById('r').innerHTML = cities;
document.getElementById('s').innerHTML = newFirstItem;

var deletingItem = cities[1];
delete cities[1];
document.getElementById('t').innerHTML = deletingItem;
document.getElementById('u').innerHTML = cities;

cities.splice(1,1,"Kraków","Warszawa");
document.getElementById('w').innerHTML = cities;

cities.splice(2,1);
document.getElementById('x').innerHTML = cities;

var countries = ["Poland", "Germany", "Russia"];
var continents = ["Europe", "Africa", "Asia"];
var mix = cities.concat(countries,continents);
document.getElementById('y').innerHTML = mix;

var sliceCities = cities.slice(1,3);
document.getElementById('z').innerHTML = sliceCities;

document.getElementById('aa').innerHTML = cities;
document.getElementById('ab').innerHTML = cities.sort();
document.getElementById('ac').innerHTML = cities.reverse();

var numericSort = [1,7,4,5,9,11,551,1155,44899];
document.getElementById('ad').innerHTML = numericSort.sort();

document.getElementById('ae').innerHTML = numericSort.sort(function(a,b){return a-b});

document.getElementById('af').innerHTML = numericSort[0];
document.getElementById('ag').innerHTML = numericSort[numericSort.length-1];

var ah = Math.max.apply(null, numericSort);
var ai = Math.min.apply(null, numericSort);
document.getElementById('ah').innerHTML = ah;
document.getElementById('ai').innerHTML = ai;

function myArrayMax(arrayName) {
 var len = arrayName.length
 var max = -Infinity;
 while (len--) {
     if (arrayName[len] > max) {
         max = arrayName[len];
       }
     }
   return max;
 }

function myArrayMin(arrayName) {
 var len = arrayName.length
 var min = Infinity;
 while (len--) {
     if (arrayName[len] < min) {
         min = arrayName[len];
       }
     }
   return min;
 }

document.getElementById('aj').innerHTML = myArrayMax(numericSort);
document.getElementById('ak').innerHTML = myArrayMin(numericSort);
