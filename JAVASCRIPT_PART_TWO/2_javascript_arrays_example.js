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
