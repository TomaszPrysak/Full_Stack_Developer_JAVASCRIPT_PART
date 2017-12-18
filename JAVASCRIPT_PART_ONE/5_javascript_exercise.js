// 1. Exercise
var x = 0;

while (x < 5) {
  console.log("x is currentlu: " + x);
  console.log("x is stile less then 5, add one to x");
  x = x + 1;
}
// ---------------------------------------------------
// 2. Exercise
var x = 0;

while (x < 5) {
  console.log("x is currently: " + x);
  if (x === 3) {
    console.log("X IS EQUAL THERR");
    break;
  }
  console.log("x is stile less then 5, add one to x");
  x = x + 1;
}
// ---------------------------------------------------
// 3. Exercise
var x = 1;

while (x <= 10) {
  if (x%2 === 0) { // sprawdzenie czy liczba jest parzysta za pomocą modulo, czy reszta z dzielenia przez 2 jest równa 0, jeżeli jest to jest to liczba parzysta
    console.log("x is currently: " + x);
  }
  x = x + 1;
}
