// Instrukcje warunkowe:
// if, else if, else
// Pozwalają one nam na sterowanie wykonywaniem poszczególnych części kodu.
// Może istnieć potrzeba wykonania pewnych cześci kodu tylko w określonej styacji. Inaczej mówiąc pod pewnym warunkiem.
// Do tego właśnie służą powyższe instrukcjie.

// IF

// Składnia instrukcji:
// if (warunek){
//     //wykonywany kod, jeżeli warunek = true
// }

// Konstrukcja ta służy do wykonywania kodu który znajduje się pomiędzy nawiasami klamrowymi.
// Kod ten będzie wykonywany tylko jeżeli zostanie spełniony warunek znajdujący się w nawiasie po if.
// Warunkami są operacje logiczne. A więc spełnienie warunku oznacza, że wynikiem takiej operacji jest wartość logiczna true (prawda).
// W przeciwnym wypadku kod nie zostanie wykonany. Po prostu będzie pominięty. I przeglądarka przejdzie do wykonywania dalszego kodu.

// Dla przykładu. Mamy dwie zmienne. Jedna oznaczona jako hot = false. Druga oznaczona jako temp = 60
// Następnie mamy instrukcję warunkową if w której jest warunek, że jeżeli zmienna temp > 80 to zmienna hot zmienaina jest na true.

var hot = false
var temp = 60

if (temp > 80){ // warunek nie spełniony więc kod nie będzie wykonany
    hot = true
}

console.log(hot) // wyświetlona w konsoli przeglądarki będzie wartość false

// Ustawienie wartości temp powyżej 80
var temp = 100

if (temp > 80){ // warunek spełniony więc kod zostanie wykonany
    hot = true  // nadpisana wartość zmiennej hot na true
}

console.log(hot) // wyśweitlona w konsoli przeglądarki będzie wartość true

// ELSE

// Jest to rozwinięcie instrukcji warunkowej if.
// Dzięki rozwinięciu instrukcji o część else mamy możliwość wykonania kodu jeżeli nie zostanie spełniony warunek po if.
// W zwykłej instrukcji if, jeżeli warunek nie zostanie spełniony to kod z tej instrukcji jest pomijany.
// W tym przypadku będzie wykonany kod po else.

// Składnia instrukcji:
// if (warunek) {
//   // wykonywany kod jeżeli warunek = true
// } else {
//   // wykonywany kod jeżeli warunek = false
// }

temp = 30 // nadajemy zmiennej wartość 30

if (temp > 90){ // sprawdzamy czy temp jest większe od 90
    console.log("Hot outside!") // nie jest więc ten kod jest pomijany
} else{
    console.log("Its not too hot today!") // ten kod będzie wykonany ponieważ warunek nie został spełniony
}

// ELSE IF

// Warunek ten jest kolejnym rozwinięciem instrukcji if.
// Dzięki else if dostajemy możliwość sprawdzania kilku warunków i wykonywania kodu w zależności od spełnienia jednego z nich.
// Możemy również tutaj użyć na smaym końcu zwykłego else którego kod będzie wykonywany że jeżeli żaden z warunków nie zostanie spełniony.
// Oczywiście możemy użyć else, ale nie musimy.
// Dzięki temu dostajemy szerowkie narzędzie do kontrolowania kodu i sprwawdzania kilku warunków.

// Składnia instrukcji:
// if (warunek1) {
//   // wykonywany kod, jeżeli warunek1 = true
// } else if (warunek2) {
//   // wykonywany kod, jeżeli warunek2 = true
// } else if (warunek3) {
//   // wykonywany kod, jeżeli warunek3 = treue
// } else if (warunek4) {
//   // wykonywany kod, jeżeli warunek4 = treue
// } else {
//   // wykonywany kod, jeżeli każdy z powyższych warunków = false
// }

temp = 75 // nadajemy zmiennej wartość 30
// temp = 30

if (temp > 80){ // sprawdzamy 1 warunek, czy temp jest większe od 80
    console.log("Hot outside!")
} else if(temp <= 80 && temp >= 50){ // sprawdzamy 2 warunek, czy temp jest pomiędzy 50 a 80
    console.log('Nice outside!')
} else if(temp <= 50 && temp >= 32){ // sprawdzamy 3 warunek, czy temp jest pomiędzy 32 a 80
    console.log("Its cooler outside!")
} else{
    console.log("Its really cold outside!") // kod wykonywany, jeżeli żaden z warunków nie będzie spełniony
}

//////////////////////////////////////////////
// Final Example with Comparison Operators //
////////////////////////////////////////////


// Items sold that day
var ham = 10
var cheese = 10

// Report to HQ
var report = 'blank'

if(ham >= 10 && cheese >= 10){
    report = "Strong sales of both items"

}else if(ham === 0 && cheese === 0){
    report = "Nothing sold!"
}else{
    report = 'We had some sales'
}
console.log(report)
