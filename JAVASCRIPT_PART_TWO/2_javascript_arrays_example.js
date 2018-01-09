var cities = ["Szczekociny", "Myszków", "Zawiercie"];

document.getElementById('a').innerHTML = cities;

document.getElementById('b').innerHTML = cities[0];

var city2 = cities[2];

document.getElementById('c').innerHTML = city2;

cities[1] = "Włoszczowa";

document.getElementById('d').innerHTML = cities;

var citiesLen = cities.length;

document.getElementById('e').innerHTML = citiesLen;
