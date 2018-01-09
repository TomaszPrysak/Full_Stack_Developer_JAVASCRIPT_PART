// Funkcje

// Funkcje to sposób na wydzielenie fragmentu/bloku kodu, aby można było go łatwo wielokrotnie używać bez powtarzania go za każdym razem.
// Dzięki funkcjom ten sam fragmet kodu będzie używany w wielu miejscach programu.
// Bez funkcji musielibyśmy ten fragment kodu powtarzać za każdym razem kiedy chcemy go użyć.
// Za pomocą funkcji zapiszemy go raz. Natomiast w miejscu w którym chcielibyśmy użyć funkcji po prostu ją wywołujemy.
// Wówczas program przechodzi do miejsca gdzie została zdefiniowana funkcja i wykonuje jej kod. Nastepnie wraca do miejsca w którym została funkcja wywołana i wykonuje dalszy kod.

// Funkcje są szczególnie przydatne kiedy nasz program ma dokonać podobnych operacji, np.: dodawanie, jednak za każdym razem chcemy dodać inne liczby.
// Wtedy wywołujemy funkcje przekazując jej argumenty do dodania.
// Kod funkcji zawsze jest ten sam dzięki czemu nie musimy go powtarzać za każdym razem kiedyn chcemy coś dodać, tylko używamy funkcji, ale za każdym razem z innymi liczbami.

// Mamy wiele typów funkcji:

////////////////////////////
// 1. Funkcje bezargumentowe
// Składnia funkcji bezargumentowej:
function nazwaFunkcji(){
  # kod funkcji wykonywany, jeżeli wywołamy funkcje z kodu programu
}
// Wywołanie takiej funkcji w kodzie programu wygląda następująco:
nazwaFunkcji(); // po prostu piszemy jej nazwę z pustym nawiasem

// Przykład:
function witaj(){ // zdefiniowana funkcja
  window.alert("Witaj użytkowniku - informacja wyśweitlona za pomocą funkcji"); // wyświetlenie okienka wyskakującego z informacją
}

witaj(); // wywołanie funkcji

/////////////////////////
// 2. Funkcje argumentowe
// Składnia funkcji argumentowej:
function nazwFunkcji(argument1, argument2, itd){
  # kod wykonywany, jeżeli uruchomimy funkcję z kodu programu
  # w kodzie używamy tych argumentów które przekazaliśmy funkcji
  # np.: console.log("Witaj " + argument1 + argument2 + " na naszej stronie internetowej");
}
// Wywołanie takiej funkcji w kodzie programu wygląda następująco:
nazwaFunkcji(wartość_argumentu1, wartość_argumentu2, itd); // piszemy nazwę funkcji i w nawiasie wartości argumentów przekazywanych do funkcji

// Przykład:
function dodawanie(argument1, argument2);{ // zdefiniowanie funkcji
  console.log(argument1 + argument2); // wyświetlenie w konsoli przeglądarki sumy dwóch argumentów które podaliśmy podczas wywoływania funkcji
}

dodawanie(2,3); // wywołanie funkcji

// UWAGA ! Argumentem może być też zmienna którą wcześniej, poza funkcją zdefiniowaliśmy i nadalismy jej jakąś wartość.

// UWAGA ! Podczas wywoływania funkcji z argumentami musimy podać taką ilość argumentów ile wymaga funkcja, jej budowa.
//         Dodatkowo musimy pamiętać, że kolejność przekazywania argumentów do funkcji ma znaczenie. Zależy ona od budowy funkcji i użycia argumentów z poszczegolnych miejsc do odpowiednich zadań.
//         Jednak jezeli nie podamy jakiegoś wymaganego argumentu (albo wszystkich) wówczas javaScript nada mu wartość "undefined". I taka wartość będzie używana później w funkcji do wykonywania operacji na tym argumencie albo funkcja zwróci wartość "undefined".
//         Dlatego następnym tematem jest nadawanie wartości domyslnych argumentom, jeżeli my nie przekażemy funkcji żadnego argumentu. Dzięki temu uchronimy się od wartości "undefined".

// 2.1. Funkcje z domyślą wartością argumentów
// Funkcje z argumentami pozwalają nam na tworzenie użytecznych funkcji, jednak za każdym razem musimy przekazywać im tyle argumentów ile wymagają ze zwzględu na swoją budowę.
// Możemy jednak stworzyć funkcje które będą wymagały argumentów, jednak jeżeli któregoś z nich nie podamy (bądź wszystkich) to będą one bazować na domyślnych wartościach do nich przypisanych.
// Ilość argumentów które będą posiadły wartości domyślne zależy tylko i wyłącznie od nas. Wszystkie argumenty mogą mieć wartości domyślne, wówczas wywołując taką funkcję nie musimy jej przekazywać żadnego argumentu.
// Mogą być funkcje, gdzie będzie jedn argument miał wartośc domyślną a inne nie będą jej miały i wówczas będą wymagane.

// Wartościami domyslnymi mogą być zarówno liczby, ciągni znaków (w cudzysłowie), wartości logiczne.

// Oczywiście jeżeli podczas wywołania funkcji przekażemy jej argumenty wówczas nadpiszą one te które są jako domyślne.

// Składnia funkcji z domyślnymi wartościami argumentów:
function nazwafunkcji(argument1=wartość_domyślna, argument2=wartość_domyślna, itd){
  # kod wykonywany, jeżeli uruchomimy funkcję z kodu programu
  # jeżeli podczas wywoływania funkcji nie przekażemy żadnych argumentów to zostaną użyte ich wartości domyślne, a jak podamy to zostana nadpisane
  # np.: console.log(wartość_domyslna_argumentu1 + wartość_domyslna_argumentu2);
}
// Wywołanie funkcji:
nazwaFunkcji(); // wówczas będą użyte domyślne wartości argumentów, ponieważ nie podajemy, żadnych argumentów
nazwaFunkcji(wartość_argumentu1, wartość_argumentu2); // podalismy wartości argumentów podczas wywoływania funkcji a więc nadpiszą one te które są domyślne
nazwaFunkcji(wartość_argumentu1); // podalismy tylko jeden argument a więc on nadpisze wartość domyslną tego argumentu który jest podany jako pierwszy w konstrukcji funkcji

// 1. przykład:
function witaj(imie="Anonim"){ // definicja funkcji z wartościa domyślną argumentu
  window.alert("Witaj " + imie + " na naszej stronie internetowej"); // wyświetli wyskakujące okienko, a w miejsce argumentu wstawi albo wartość domyślną (jeżeli wywołamy funkcję bez argumentu) albo wstawi wartość z argumentem podczas wywoływania funkcji
}

witaj("Tomek"); // wywołanie funkcji z argumentem który nadpisze wartość domyślną

// 2. przykład:

function dodaj(x, y=2){ // definicja funkcji z wartością domyslną jednego z dwóch argumentów
  console.log(x + y); // w konsoli przeglądarki wyświetli wynik dodawania dwóch argumentów z których jeden jest domyslny
}

dodaj(5); // wywołanie funkcji z jednym koniecznym argumentem, gdyż drugi nie jest koniczny bo ma wartość domyślną

// UWAGA ! Podczas tworzenia funkcji z argumentami które nie wszystkie są wymagana a więc sa jakieś argumenty z wartościami domyślnymi warto pomiętać o tym aby argumenty z wartościami domyślnymi umieszczać na samym końcu podczas budowy funkcji.
//         Wówczas podczas wywoływania funkcji zawsze na początku będziemy podawać te argumenty które są wymagane.
//         Tak czy inaczej, jeżeli utworzymy funkcję z kilkoma argumentami o wartościach domyślnych, wówczas będziemy musieli kombinować aby zmienić tylko jeden argument który znajduje się w środku, a pozostałe zostawić domyślne.

////////////////////////////////////
// 3. Funkcje ze zwracaniem wartości
// Powyższe przykłady funkcji to funkcje bez zwracania wartości.
// Wykonują one polecenia, jak np.: wyskakujące okienko, itp, ale nie zwracają żadnej wartości, którą możnaby później wykorzystać.
// Możemy tworzyć funkcje ze zwracaniem wartości, które później możemy wykorzystać w naszym kodzie, bądź będziemy je przekazać do innej funkcji.
// UWAGA ! Pomimo, że funkcje mogą być wieloargumentowe to mogą zwracać tylko jedną wartość.

// Aby stworzyć funkcję ze zwracaniem wartości to przed drugim nawiasem klamrowym używamy słowa "return" a po nim podajemy wartość (w postaci zmiennj albo działania) którą chcemy zwrócić.
// Wówczas wartość zwracana przez taką funkcję znajduje sie w kodzie programu w miejscu gdzie wywołalismy tą funkcję.
// A dokładniej podając w kodzie nazwę funkcji wraz z argumentami jest to uznawane za wartość jaką zwróci funkcja.

// Składnia funkcji ze zwracaniem wartości:
function nazwaFunkcji(argument1){
  # kod wykonywany, jeżeli uruchomimy funkcję z kodu programu
  return argument + 2;
}
// Wywołanie takiej funkcji jest takie samo jak każdej innej nazwFunkcji
nazwaFunkcji(wartość_argumentu1); // w tym miejscu wywołujemy funkcję, a więc wywołanie to oznaczna jednocześnie wartość jaką ona zwróci

// Przykład:
function podwajaj(argument){ // zdefiniowanie funkcji
  return argument*2; // funkcja zwraca wartość jako argument pomnożony przez 2
}

podwajaj(3); // wywołanie to jednocześnie oznacza wartość równą 6

// Skoro wywołanie funkcji ze zwracaniem wartości to jednocześnie wartość zwracana, a więc możemy na przykład wartość tą przypisać do zmiennej:
var x = podwajaj(6); // co oznacza, że do zmiennej x przypisujemy wartość jaką zwróci funkacja, a więc 12.
// Wywoływanie funkcji możemy używać w róznych innych miejscach.

// UWAGA ! Słowo kluczowe "return" oznacza jednocześnie przerwanie działania funkcji i jej opuszczenie nawet jeżeli za tym słówkiem znajduje się dalszy kod.
//         Jeżeli użyjemy po "return" nie użyjemy żadnej wartści do zwrócenia, wówczas słówko to będzie się zachowywać jak "break" w pętli. Kończy natychmiast działanie funkcji.
//         Dzięki temu mamy możliwość stosowania warunków na początku funkcji ze słówkiem "return" i kontrolowania działania naszej funkcji.
//         W momencie kiedy nasz warunek zostanie spełniony (czyli jest taka sytuacja, że nie chcemy wykonać naszej funkcji) wówczas zostanie wykonywany kod wewnątrz warunku, a tam postawilismy słowo "return" które zakończy działanie. Opuścimy funkcję.
//         Jeżeli warunkek nie zostanie spełniony (czyli jest taka sytuacja, że chcemy wykonać naszą funkcje) wówczas zostanie wykonywany dalszy kod funkcji na końcu którego stoi drugie słówko "return". To które właściwie kończy funkcje.
//         Wilokrotne wykorzystywanie "return" i instrukcji warunkowych we wnętrzu funkcji daje nam możliwość kontrolowania wykonywania funkcji. Jeżeli zachodzi taka możliwość/konieczność.

// Przykład:

function piataLitera(imie){
 if (imie.length < 5) { // dzięki temu warunkowi funkcja zostanie wykonana jeżeli imię przekazywane jako argument ma długość co najmniej 5 znaków
   return;
 }
 return "Piąta litera Twojego imienia to " + imie[4] + ".";
}

piataLitera("Tomek");

///////////////////
// Zasięg zmiennych
// Zmienne które zdefiniujemy wewnątrz funkcji (w kodzie między nawiasami klamrowymi funkcji) są widoczne tylko wewnątrz tej funkcji. Inaczej mówiąc są to zmienne lokalne.
// Nie możemy się odnieść do nich w kodzie poza funkcją. W związku z tym, jeżeli w jednej funkcji użyjemy zmiennej "x" oraz w innej funkcji też użyjemy takiej zmiennej to warości tych zmiennych pozostaną różne dla każdej funkcji. Mimo, że mają taką samą nazwę.
// Do takiej zmiennej mamy dostęp tylko z kodu znajdującego się wewnątrz funkcji.

// Jeżeli z kolei zmienną zdefiniujemy poza funkcją wówczas taka zminna ma zasięg globalny.
// Wówczas w funkcji możemy taką zmienną używać oraz nadawać jej nowej wartości, definiować na nowo.
// Jednak zmiana zmiennej globalnej wewnątrz funkcji oznazca zmianę jej wartości globalnie, a nie tylko, lokalnie, wewnątrz funkcji.
// Oczywiście po opuszczeniu funkcji znowu możemy dokonywać modyfikacji zmiennej globalnej.
// Do takiej zmiennej mamy dostęp z kążdego miejsca kodu programu. A więc każda zmiana jej wartości ma zasięg globalny.

// Uzywając zmiennych wewnątrz funkcji wówczas najpierw jest sprawdzane czy dana zmienna została zdefiniowana wewnątrz funkcji.
// Jeżeli nie wówczas jest sprawdzane czy zmienna została zdefiniowana poza funkcją i jest zmienną globalną.
// I dopiero wówczas jest używana wartość takiej zmiennej.

// Przykład zmienej lokalnej zdefiniowanej wewnątrz funkcji:
function times5(numInput) {
  var result = numInput * 5; // zmienna lokalna "result" jest widoczna/dostępna tylko wewnątrz funkcji ponieważ w niej została zdefiniowana
  return result;
}

times5(5);

// Przykład zmiennych globalnych zdefiniowanych poza funkcją, ale wykorzystywana przez funkcję:
var v = "I'm global V"; // zmienna globalna zdefiniowana w głównym kodzie
var stuff = "I'm global stuff"; // zmienna globalna zdefiniowana w głównym kodzie

function fun(){
    console.log(v); // polecenie pobiera wartość zmiennej globalnej
    stuff = "Reassign stuff inside func"; // wewnątrz funkcji zmieniamy wartość zmiennej globalnej stuff
    console.log(stuff); // polecenie pobiera nową wartość zmiennej globalnej
}

fun();

////////////////
// CIEKAWOSTKA !
// Do tej pory funkcję definiowaliś w następujący sposób:

function nazwaFunkcji(ew. argument1){
  # kod funkcji
  ew. return wartość/zmienna
}

// Powyższy zapis to jest zapis skrócony, inaczej mówiąc deklaracja funkcji.

// Jest jeszcze zapis rozwlekły, inaczej wyrażenie:

var nazwaFunkcji = function(ew.argument1){
  # kod funkcji
  ew. return wartość/zmienna
}
