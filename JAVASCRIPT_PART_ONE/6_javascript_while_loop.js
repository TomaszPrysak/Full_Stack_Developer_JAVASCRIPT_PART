// Pętla while
// Pozwala ona na wykonywanie kodu, pomiędzy nawiasami klamrowymi, do momentu, aż spełniony będzie warunek w nawiasie po słowie while.
// Kod znajdujący się wewnątrz pętli jest wykonywany od góry do dołu. W  momencie dotarcia do dołu znowu jest sprawdzany warunek pętli.
// Jeżeli znowu jego wartość logiczna równa jest true to kod znowu jest wykonywany. I znowu jest wykonywany od gory do dołu. I znowu jest sprawdzany warunek pętli.
// I w momencie kiedy warunek już nie jest spełniany więc kod jest pomijany i wykonywany zostaje kod poza pętlą, tzn. nawiasem klamrowym.

// Składnia pętli:
while (warunek){
    # kod wykonywany, jeżeli warunek == true
}

// W związaku z tym, że kod wewnątrz pętli jest wykonywany powtarzalnie, pod warunkiem spełnienia warunku, musimy uważać aby pętla nie była wykonywana w nieskończoność.
// Możemy to zrealizowac za pomoca dwóch sposobów:
// 1. W tym celu stosujemy inkrementacje/dekrementację zmiennej. Najprościej to wykonać w postaci zwiększania/zmniejszenia zmiennej o pewną wartość na samym końcu pętli.
// np.: x = x + 1;/x = x - 1;
// skrócona wersja powyższego zapisu: ++x;/--x; (znaczy to mniej więcej tyle, że najpierw zwiększ/zmniejsz zmienną o jeden a następnie zapiszą nową wartość w tej zmiennej)
// Oczywiście powyższa inkrementacja/dekrementacja posiada taki zapis jeżeli zmieniamy zmienną o jeden.
// Skrócony zpis zmieniający zmienną o inną wartość niż jeden ma postać np.: x += 7; (x = x + 7;)/x -= 5 (x = x - 5;).
// Podsumowując mamy 3 rodzaje zapisu inkrementacji/dekrementacji:
// a) x = x + 1;/ x = x - 1;
// b) x += 1;/ x -= 1;
// c) ++x;/ --x (w przypadku jeżeli zmienną zmieniamy o wartość inną niż jeden wówczas tego posobu nie możemy wykorzystać)
// 2. Przerwanie działania pętli słówkiem "break".
// Aby to zrealizowac musimy wewnątrz pętli while użyć instrukcę if ze sprawdzeniem czy warunek jest spełniony przy danym przebiegu pętli. Jeżeli tak to wchodzimy do instrukcji warunkowej i wstawiamy "break" co powoduje opuszczenie pętli while.
// Po prostu kod będzie wykonywany z góry na dół. Jeżeli napotka po dordze słówko "break" od razu wychodzi z pętli. Nie jest wykonywany kod w tej pętli za tym słówkiem. Dlatego należy go umieszczać wewnątrz intrukcji warunkowej. Bo tak to będziemy za każdym razem przy pierwszym przebiegu pętli opuszczali ją. A my chcemy ją opóścić tylko pod pewnym warunkiem.
// np.: if (x === 3){
//   break;
// }

// Przykłady pętli:
// 1. Inkrementacja zmiennej której wartość jest warunkiem działania pętli
var x = 0;

while (x < 5) {
  console.log("x is currentlu: " + x);
  console.log("x is stile less then 5, add one to x");
  x = x + 1;
}

// 2. Przerwanie pętli za pomocą "break"
var x = 0;

while (x < 5) {
  console.log("x is currently: " + x);
  if (x === 3) {
    console.log("X IS EQUAL THREE");
    break;
  }
  console.log("x is still less then 5, add one to x");
  x = x + 1;
}
