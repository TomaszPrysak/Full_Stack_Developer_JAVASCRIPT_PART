var temp = prompt("Podaj temperaturę jaka jest dzisiaj");

if (temp > 30) {
  alert("Dzisiaj jest gorąco");
}else if (temp <= 30 && temp > 25) {
  alert ("Dzisiaj jest cieplutko");
}else if (temp <= 25 && temp > 20) {
  alert ("Dzisiaj jest przyjemnie");
}else if (temp <= 20 && temp > 15) {
  alert("Dzisiaj jest chłodnawo");
}else {
  alert("Dzisiaj jest zimno");
}

console.log("Koniec kodu");

var ham = 8;
var cheese = 10;
var report = "blank";

if (ham >= 10 && cheese >= 10){
  report = "Strong sales of both ham and cheese!"
}else if (ham === 0 && cheese === 0) {
  report = "Nothing Sold!"
}else {
  report = "We had some sales of items"
}

console.log(report);
