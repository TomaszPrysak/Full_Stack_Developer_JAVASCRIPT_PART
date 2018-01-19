 // Tablice

 // Do tej pory mając wiele wartości i chcąć ich używac w kodzie programu nadawaliśmy tyle zmiennych ile mieliśmy wartości.

 // Natomiast tablice służą do przechowywania wielu wartości pod jedną zmieną.
 // Mówiąc inaczej, tablice to nic innego jak lista wielu przechowywanych wartości.

 // Aby przypisać wartości do zmiennych nie używając tablicy musielisbyśmy to zrobić następująco:

var city1 = "Szczekociny";
var city2 = "Myszków";
var city3 = "Zawiercie";

 // Jednak, co jeżeli mielibyśmy zapisac zamiast trzech, wszystkie miasta Polski ?
 // Najlepszym rozwiązaniem jest użycie tablicy.
 // Możemy w ten sposób przechowac wiele wartości pod jedną nazwą i jednocześnie mieć dostęp do każdej wartości poprzez numeru indeksu danej danej wartości w tabeli.

 // 1. Definiowanie tablicy.
 // Jest bardzo podobne do tworzenia zmiennej:

var arrayName = [item1, item2, ...];

 // bądź zapis bardziej przejrzysty, ale znaczacy to samo:

var arrayName = [
  item1,
  item2,
  ...
];

 // Jako ciekawostka: ponieważ tablica to obiekt w JavaScript, a więc tworząc możemy to zapisać jak tworzenie nowego obiektu, ze słówkiem new i nazwą obiektu:

var arrayName = new Array(item1, item2, ...);

 // Jednak najlepiej jest tworzyć tablicę sposobem jak tworzenie zmiennej.
 // Możemy oczywiście stworzyć pustą tablicę, do której póżniej za pomocą metod będziemy dopisywać elementy.

var arraName = [];

 // Przykład z miastami zapisany jako tablica, będziemy go używać jako przykład przez cały ten plik:

var cities = ["Szczekociny", "Myszków", "Zawiercie"];

 // Jako wartości zapisywane w tabeli mogą być zarówno wartości liczbowe, ciągki znaków (oczywiście między cudzysłowem), logiczne, mogą być to również wstawione nazwy innch zmiennych.
 // Moga być również tablice. Tak możemy do tablicy wstawić inną tablicę.

 // Możemy stworzyć tablice z mieszanymi wartościami elementów.

var mixed = [20,"Tomek",true];

 // Elementami tablicy moga być równocześnie inne obiekty JavaScript różnych typów. Na przykład nasze własne stworzone funkcje albo metody JavaScript:

var myArray = [
  Date.now, // metoda pozyskująca datę z systemu
  myFunction, // nasza własna funkcja zdefiniowana w kodzie programu
  arrayName // nazwa innej tablicy
];

 // 2. Dostep do tablicy oraz każdego z jej elementów z osobna.

 // Dostęp do tablicy nastepuje poprzez podanie jej nazwy.
 // Aby wywołać zawartość całej tablicy po prostu podajemy jej nazwę.
 // Wówczas w jednym wierszu uzyskujemy tą zawartość:

cities;
console.log(cities); // Oczywiście jeżeli chcemy wyśweitlenia zawartości tą nazwę musimy użyć z jakimś poleceniem które tan pozwoli to wyświeltić, w przeciwnym wypadku nic nie dostaniem

 // Natomiast do każdego elementu z osobna w tablicy mamy dostęp poprzez powołanie się na jego numer indeksu.
 // Każda pozyca w tablicy ma swój numer indeksu, zaczynając od 0 dla pozycji pierwszej i rosnąco dla każdej następnej pozycji:

cities[0]; // w ten sposób wywołujemy zawartość pierwszego elementu tablicy
document.getElementById('id').innerHTML = cities[0]; // podobnie jak w przypadku całej tablicy aby wyśweitlić tą wartość musimy użyc jakiegos polecenia do tego calu

 // Każdą pozycje z tablicy możemy przypisać do osobnej zmiennej:

var city1 = cities[1]; // drugie element z tabeli przypisany do zmiennej city1

 // Póżniej tą zmienną oczywiście możemy wykorzystać do wszelkiego rodzaju operacji w naszym kodzie.

 // 3. Zmiana poszczególnych pozycji tablicy.
 // Aby zmienić element zapisany na konkretnej pozycji dokonujemy tego poprzez odwołanie się do konkretnej pozycjia a następnie zapisanie w nim nowej wartości tak jak zmieniamy wartość zmiennej.

cities[1] = "Włoszczowa"; // wówczas w tablicy na pozycji 2 nie będzie już Myszków tylko Włoszczowa

 // UWAGA ! Możemy zmienić wartość konkretnego elementu tablicy jednak nie możemy zmienić jednego znaku tego elementu tablicy, oczywiście jeżeli elementem jest ciąg znaków.

 // Oczywiście wykorzystując przypisaną zmienną do elementu drugiego tablicy możemy ją modyfikować, a jednoczęsnie będzie modyfikowany przypisany do niej elementu tablicy.

city1 = "Gdańsk"; // jest to równoznaczne z: cities[1] = "Gdańsk";

 // 4. Długość tablicy za pomocą metody "lenght".
 // Długość tablicy to nic innego jak ilość elementów wchodzących w skład tablicy.
 // Jeżeli jakaś pozycja tablcy nie zaweira wartości to jest wliczana do sumy elementów tablicy, do jej długości.

 // Polecenie do zwracania długości tablicy to length.
 // Używamy go tak jak każdego innego polecenia dotyczącego obiektów.
 // Po nazwie talbicy dajemy kropkę i polecenie length:

cities.length; // wynikiem jest długość tablicy
var citiesLen = cities.length; // ponieważ length zwraca wartość więc częściej będziemy wykorzystywać tą wartość do różnego rodzaju operacji w naszym skrypcie

 // UWAGA ! Długość tablicy jest o jeden większa od numeru indeksu ostatniego elementu tablicy.
 //         Innymi słowy długość tablicy liczy sie od 1. Pusta tablica ma długość równą 0.

 // 5. Iterowanie po elementach tablicy.
 // Wypisując nazwę tablicy wywołamy całą zawartość tablicy w jednym wierszu.
 // Z kolei jak wypiszemy nazwę i numer indeksu to wywołujemy pojedynczy element tablicy.

 // Jeżeli chcielibyśmy za jednym razem mieć dostęp do każdego z elementów tablicy z osobna posiłkujemy się interowaniem przez tablicę za pomocą pętli for.
 // I tutaj pojawia się kolejna wersja pętli for tak zwana pętla for/of.

 // Jednak zaczniemy od pierwszej pętli for:

for (var i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
 // Pętla jest powtarzana taką ilość razy ile wynosi długość pętli pnieważ w miejscu warunku pętli for jest wstawione sprawdzanie czy zmienna pomocnicza i jest mniejsza od długości tablicy.
 // Użycie znaku "mniejsze" jest ważne ponieważ długość tablicy jest o jeden większa od ostatniego indeksu tablicy.
 // W każdym przebiegu pętli w nawias kwadratowy odwołujący się do elementu talbicy podstawiana jest pomocnicza zmienna i o wartości będącej z przedziału od 0 do wartośći równej ostatniemu indeksowi tablicy.
 // Dzięki temu pętla for przeiteruje i będzie miała dostęp do każdego elementu tablicy z osobna.

 // Druga pętla jest specjalnie dedykowana dla pętli for/of.
 // Jej składnia jest następująca:
for(var currentValue of arrayName){
  currentValue // jako wartość pojedynczego elementu tablicy, przy pierwszym przebiegu jest równy wartości elemetu tablicy arrayName[0] itd.
}
 // Pętla ta jest dedykowana specjalnie dla tablic. Widać po jej konstrkcji.
 // Nie musimy w tej pętli deklarować zmiennej startowej, warunku jaki ma być spełniony przy każdym przebiegu pętli oraz inkrementacji, dekrementacji zmiennej startowej jak w normalnej pętli for.
 // To wszystko powyższe jest jakby robione za nas, ponieważ jest to pętla dla tablic więc z góry wiadomo, że będzie wykonywana tyle razy ile wynosi długość talblicy oraz iteracja jest dokonywana przez elementy tablicy.
 // Najważniejszą różnicą jest to, że posługujemy się zmienną pomocniczą "currentValue" (może być nazwana jak chcemy) która w każdym przebiegu pęlti jest równa wartości elementu tablicy. Możnaby to zapisac jako currentValue == arrayName[i].
 // W związaku z tym do wykonywania działań na elementach tablicy używamy tej zmiennej pomocniczej "currentValue".

 // Dla naszego przykładu:
for(var item of cities){
  console.log(item); // gdzie item == cities[i]
}

 // No i trzecia forma iterowania po każdym elemencie tablicy to specjalna metoda forEach wywoływana jak każda metoda dla obiektu, tj nazwa tablicy i po kropce forEach.
 // Składnia wygląda tak:
arrayName.forEach(nazwaPoleceniaJavaScritp); // jeżeli chcemy aby przy wywoływaniu każdego elementu tablicy było wykonywane jakieś polecenie JavaScript, np alert, wówczas każdy element tablicy będzie wyśweitlony w wyskakującym okienku przeglądarki.

 // Przykład:
cities.forEach(alert);

 // Z wykorzystaniem własnych funkcji, składnia polecenia:
arrayName.forEach(nazwaFunkcji(aktualnyElement, indexElementu, tablicaElementu), taWartość);
 // Jak widać ta metoda wymaga aby była stworzona funkcja i posiadała co najmniej jeden argument:
 // aktualnyElement - ten argument JEST WYMAGANY, będzie on zwracać wartość aktualnego elementu tablicy, coś jak zmiena pomocniczan "currentValue" w pętli for/of
 // indexElementu - ten argument NIE JEST wymagany, po prostu zwraca indeks aktualnego elementu tablicy,
 // tablicaElementu - ten argument NIE JEST wymagany, po prostu zwraca nazwę aktualnego elementu tablicy.
 // taWartość - argument poza funkcją, również NIE JEST wymagany
 // UWAGA ! ta metoda nie działa w starszych przeglądarkach

 // Metoda ta działa w ten sposób, że przy każdym elemencie tablicy wywoływana jest funkcja którą wczśniej zdeklarowaliśmy.
 // Argumentem tej funkcji, który jest wymagany, jest wartość aktualnego przy każdym przebiegu funkcji elementu tablicy.
 // Jednak przy wywoływaniu tej funkcji w konstrukcji forEach nie musimy podawać w nawiasie argumentu.
 // Następnie jest wykonywany kod z wnętrza funkcji. Będzie on wykonywany za każdym razem dla następnego elementu tablicy.

 // Przykład:
function printEach(item){
  console.log(item);
}
cities.forEach(printEach);

 // 6. Metody działania na tablicach
 // Tablica jest obiektem w JavaScript dlatego też metody na tablicach wywłujemy za pomocą nastepującego schematu:

 arrayName.method(); // Najpierw podajemy nazwę tabicy a następnie po kropce metodę i w nawiasie ewentualnie jakiś argmentu jeżeli wymaga tego metdoa.

 // Przykład:
 cities.toString(); // wynikiem tej metody jest ciąg znaków złożony ze wszystkich elementów tablicy rozdzielonych przecinkiem

 // a) Dodawanie nowego elementu na końcu tablicy za pomocą puch():
 //    Metoda ta dodaje nowy element na końcu tablicy.
 //    Nazwę tego nowego elementu wpisujemy w nawiasie metody.
 //    Składnia polecenia:
    arrayName.push("newItem");

    // Dodatkowo metoda ta oprócz dopisania na końcu tablicy nowego elementu zwraca też nową długość tablicy (długosć po dodaniu nowego elementu).
    // Aby tak się stało musmy umieścić całe to polecenie push() w jakims poleceniu do wyśweitlania informacji lub na przykład przypisać całe polecenie do jakiejś zmiennej:

    var x = arrayName.push("newItem"); // w zmiennej x przehcowywana jest wartość długości tablicy
    console.log(x);

    // UWAGA ! Powyższa konstrukcja powoduje jednoczesne dodanie nowego elementu do tablicy oraz przypisanie nowej długości do zmiennej.
    //         Dlatego nie należy powtarzać polecenia push() ponieważ najpeirw dopisujemy nowy elementu do tablicy.
    //         A później myśląc, że użyjemy tego samego polecenia z przypisaniem go do zmiennej, aby pozyskać nową długość tablicy.
    //         Takie działanie spowoduje, że dwa razy dodamy ten sam element do tablicy i jednocześnie jej długość będzie większa niż zakładaliśmy.

    // Przykład:
    cities.push("Jędrzejów");
    var citiLen = cities.push("Jędrzejów");

    // Wynikiem tego będzie następująca tablica (po wywołaniu jej za pomocą jej nazwy): Szczekociny,Włoszczowa,Zawiercie, Jędrzejów.
    // Natomiast zmienna citiLen będzie będzie równa 4 bo tyle wynosi długość tablicu po dodani nowego elemetu.

    // UWAGA ! Możemy również dodać element wykorzystując length:

       cities[cities.length] = "Gdańsk"; // element do tablicy dodamy pod indeksem który jest poza tablicą (ponieważ to nam zwróci length)

 // b) Usuwanie ostatniego elementu z tablicy za pomocą pop():
 //    Metoda ta usuwa ostatni element tablicy.
 //    W tej metodzie nie podajemy argumentu w nawiasie.
 //    Składnia polecenia:
    arrayName.pop();

    // Dodatkowo metoda ta oprócz usunięcia ostatniego elementu tablicy również zwraca wartość usuwanego elementu.
    // Aby tak się stało musimy umieścić całe to polecenie pop() w jakims poleceniu do wyśweitlania informacji lub na przykład przypisać całe polecenie do jakiejś zmiennej:

    var x = arrayName.pop(); // w zmiennej x przehcowywana jest wartość ostatniego usuwanego elementu tablicy
    console.log(x);

    // UWAGA ! Powyższa konstrukcja tak jak ta z pop() powoduje jednocznesne usunięcie ostatniego elementu z tablicy oraz przypisanie do zmiennej wartości usuwanego elementu.
    //         Uważajmy zatem aby nie powtarzać tego polecenia, najpierw do usunięcia a później do przypisania wartości ostatniego elementu.
    //         Poniważ dwa razy coś usuniemy a wartościa w zmiennej będzie wartość elementu usuwanego za drugim razem.

    // Przykład:
    cities.pop();
    var lastItem = cities.pop();

 // c) Konwertowanie tablicy do ciągu znaków za pomocą toString() lub join():
 //    Metoda toString() konwertuje całą zawartośc tablicy do ciągu znaków.
 //    Otrzymuje ciąg znaków w którym wartości elementów tabilcy są oddzielone przecinkiem.
 //    W tej metodzie nie podajemy argumentu w nawiasie.
 //    Składnia polecenia:
    arrayName.toString();

    // Metoda join() również konwertuje całą zawartość tablicy do ciągku znaków.
    // Jednak w tym przypadku w nawiasie jako argument podajemy znak którym będziemy odzielali kolejne wartości elementów tablicy w wynikowym ciągu zanków.
    // Jeżeli chcemy aby znak odzielający był również ciągiem znaków to w nawiasie ten znak umieszczamy w cudzysłowiu. Może być to również liczba, wówczas bez cudzysłowia.
    // Otrzymuje ciąg znaków w którym wartości elementów tabilcy są oddzielone znakiem z nawiasu.
    // Składnia polecenia:
    arrayname.join("_");

    // Przykład:
    cities.toString(); // wynikiem będzie ciąg znaków zlepiony z elementów tablicy oddzielonych przecinkiem(,)
    cities.join("_"); // wynikiem będzie ciąg znaków zlepiony z elementów tablicy oddzielonych podkreslnikiem(_)
    cities.join(88); // wynikiem będzie ciąg znaków zlepiony z elementów tablicy oddzielonych dwoma ósemkami(88)

 // d) Usuwanie pierwszego elementu z tablicy za pomocą shift():
 //    Metoda ta usuwa pierwszy element tablicy.
 //    W tej metodzie nie podajemy argumentu w nawiasie.
 //    Składnia polecenia:
    arrayName.shift();

    // Dodatkowo metoda ta oprócz usunięcia pierwszego elementu tablicy również zwraca wartość usuwanego elementu.
    // Aby tak się stało musimy umieścić całe to polecenie shift() w jakims poleceniu do wyśweitlania informacji lub na przykład przypisać całe polecenie do jakiejś zmiennej:

    var x = arrayName.shift();
    console.log(x);

    // Przykład:
    cities.shift();
    var firstItem = cities.shift();

 // e) Dodawanie nowego elementu na początku tablicy za pomocą unshift();
 //    Metoda ta dodaje nowy element na początku tablicy, przesuwając istniejące już elementy na nowe indeksy.
 //    Nazwę tego nowego elementu wpisujemy w nawiasie metody.
 //    Składnia polecenia:
    arrayName.unshift("NaPoczątku");

    // Dodatkowo metoda ta oprócz dopisania na poącztku tablicy nowego elementu zwraca też nową długość tablicy (długosć po dodaniu nowego elementu).
    // Aby tak się stało musmy umieścić całe to polecenie unshift() w jakimś poleceniu do wyśweitlania informacji lub na przykład przypisać całe polecenie do jakiejś zmiennej:

    var x = arrayName.unshift("newFirstItem");
    console.log(x);

    // Przykład:
    cities.unshift("Żarnowiec");
    var firstItem = cities.unshift("Żarnowiec");

 // f) Usuwanie elementu za pomocą delete:
 //    Aby usunąć konkretny element z tablicu używamy metody delete przed nazwią talbicy i indeksem tego elementu który chcemy usunąć.
 //    Należy jednak pamiętać, że po usunięciu elementu z tablicy za pomocą delete w  miejscu wartości tego elementu będzie wartość undefined.
 //    Długość tablicy będzie nadal taka sama z tą różnicą, że w miejscu usuniętego elementu będzie pusta wartość.
 //    Pozostałe elementy nie przesunąć sie w miejsce usuniętych elememtów.
 //    Składnia metody:
    delete arrayName[i];

    // Przykład:
    delete cities[1];

 // g) Dodawanie nowych elementów w określony indeks tablicy za pomocą splice():
 //    Metoda ta dodaje nowe elementy, może być ich kilka, do tablicy w określone miejsce tablicy.
 //    Możemy dodać nowe elementy pomiędzy elementy już istniejące w tablicy lub na jej poczatku lub na jej końcu, w zalężonści od tego jakie argumenty podamy w metodzie.
 //    Składnia polecenia:
    arrayName.splice(x,y,newItem1,newItem2...);
    // x - określa indeks tabeli od którego zostaną dodane nowe elementy,
    // y - okresla ile elementów, już istniejąych w tabeli, zostanie skasowanych w wyniku dodawania nowych elementów, jeżeli podamy 0 to dodamy nowe elementy, od indeksu podanego jako x, a pozostałe zostaną przesunięte w nowe indeksy, jeżeli nowe elementy dodamy pomiędzy już istniejące,
    // newItem1, newItem2... - wartości elementów które dodajemy do tablicy, może być ich kilka.

    // Przykład:
    cities.splice(1,1,"Kraków","Warszawa");

 // h) Usuwanie elementów z okreslonych indeksów tablicy za pomocą splice():
 //    Jeżeli nie podamy w poleceniu splice() nowych elementów jakie chcemy dodać do tablicy, wówczas polecenie to będzie służyć do usuwania elementów z określonych indeksów tablicy.
 //    Najważniejsze jest to, że w przeciwieństwie do polecenia delete, takie usuwanie elementów nie powoduje powstawania pustych miejsce w tablicy.
 //    Składnia polecenia:
    arrayName.splice(x,y);
    // x - określa indeks tablicy od którego zacznie usuwanie elementów, włączając ten indeks,
    // y - ilość usuwanych elementów tablicy, począwszy od indeksu tego którego wskazalismy jako początek usuwania.

    // Przykład:
    cities.splice(2,1);

 // i) Łączenie dwóch tabel w jedną za pomocą concat():
 //    Metoda ta łączy dwie lub więcej tabel w jedną.
 //    Nie zmienia którejkolwiek tablic, lecz tworzy nową tabelę z wartościami z tabel które łączylismy.
 //    Możemy zarówno podawać nazwy już istniejących tabel bądź podać w poleceniu bezpośrednio tabelę z wartościami zapisaną jako nawiasy kwadratowe.
 //    Składnia polecenia:
    array1.concat(array2,array3,[1,2,3],...);
    // array1 - nazwa pierwsze tablicy którą będziemy łączyć z innymi,
    // array2 - nazwa drugiej tablicy którą będziemy łaczyć z inncymi,
    // [1,2,3] - wartości tablicy która będzie łączona z inncymi tablicami,

    // Wynikiem tej metody jest nowa tablica więc najlepiej będzie jak to polecenie przypiszemy do zmiennej:
    var newArray = array1.concat(array2,array3...);

    // Elementy w nowej tablicy będą miałby przypisane indkesy w kolejności użycia nazw tablic w poleceniu concat().

    // Przykład łączenia tabel:
    var countries = ["Poland", "Germany", "Russia"];
    var continents = ["Europe", "Africa", "Asia"];
    var mix = cities.concat(countries,continents);

// j) Kopiowanie elementów z jednej tablicy do drugiej za pomocą slice():
//    Metoda ta kopiuje część elementów z jednej tablicy i umieszcza w nowej tablicy.
//    Nie usuwa tych kopiowanych elementów z tablicy będącej źródłem.
//    Składnia polecenia:
   array1.slice(x,y);
   // array1 - nazwa talbicy z której będziemy kopiować elementy,
   // x - okresla indeks elementu tablicy z której będziemy kopiować, od tego elementu zaczynamy kopiowanie, włącznie z elementem pod tym indeksem,
   // y - określa indeks elementu tabicy który określa zakres kopiowania, ale element ten nie będzie brany do kopiowania.
   //     UWAGA ! y nie jest wymagany, jeżeli go nie podamy to kopiowanie bedzie od x do końca tablicy.

   // Wynikiem tej metody jest nowa tablica więc najlepiej będzie jak to polecenie przypiszemy do zmiennej:

   var newArray = array1.slice(x,y);

   // Przykład:
   var cliceArray = cities.slice(1,3);

// k) Sortowanie alfabetyczne tablic za pomocą sort():
//    Metoda ta pozwala na sortowanie tablic, których wartościami są ciągni znaków.
//    Ograniczenie to wynika z faktu, że sortowanie polega na porównywaniu najpierw pierwszych liter każdej wartości w tabli.
//    Jeżeli pierwsza litera będzie taka sama, wówczas porównywana jest kolejna i tak dalej, aż do rozstrzygnięcia.
//    Składnia polecenia:
   array.sort();

   // Przykład:
   cities.sort();

   // UWAGA ! Znaczenie ma również wielkość liter. Wielka litera o tym samym znaku zawsze będzie w sortowaniu wcześniej niż mała litera.

   // Pomocną metodą wystepującą razem z sort() jest reverse().
   // Służy ona do odwrócenia wcześniejszego sortowania. Jest to po prostu sortowanie malejące.
   // Składnia polecenia:
   arrayName.reverse();

   // Przykład:
   cities.reverse();

   // UWAGA ! Aby winik był prawidłowy najpierw na tej tablicy musimy użyć sort(), a dopiero potem reverse():

   cities.sort();
   cities.reverse();

   // UWAGA ! Możemy również używać sort() na wrtościach liczbowych. Jednak metoda ta ma sens tylko dla wartości jednocyfrowych.
   //         Metoda ta w przypadku licz porównuje tylko pierwszą cyfrę. Jeżeli liczby będą składały się z dwóch i większej cyfr wówczas prównanie nastapi tylko na podstawie pierwszej.
   //         A to spowoduje, że wynikiem sortowania może być na przykład: 1,13,1444,2,223,4,5555,7,9988

// l) Sortowanie numeryczne tablic za pomocą funkcji porównywania w metodzie sort():
//    Jest to rozbudowana metoda sort(), ponieważ w nawiasie jej wpisujemy funkcję porónującą.
//    Składnia polecenia:
   arrayName.sort(function(a, b){return a-b}); // w przypadku sortowania rosnącego
   arrayName.sort(function(a, b){return b-a}); // w przypadku sortowania malejącego

   // W momencie porównywania tegotypu najpierw metoda sort() dokonuje porównania wprost dwóch wartości.
   // Nastepnie za pomocą function(a, b)return{a-b} dokonywane jest sprawdzenie jaki rodzaj wartości (negatywne, zero, pozytywne) zwraca porównanie dwóch wartości.
   // Wyniki tych dwóch porównań w jednym można uzyskać prawidłowy wynik porównania numerycznego

   // Przykład:
   var numericSort = [1,7,4,5,9,11,551,1155,44899];
   document.getElementById('ae').innerHTML = numericSort.sort(function(a,b){return a-b});

// m) Wykorzystując powyższą funkcjonalność możemy znaleźć wartość największą i najmniejszą.
//    Po przesortowaniu metodą sort() z funkcją porównująca dostajemy tablicę z wynikiem sortowania malejącego bądź rosnącego, w zależności jak zapisaliśmy funkcję porównującą.
//    W związku z tym, że wynik jest tablicą już posortowaną to pierwszy element o indeksie [0] jest albo najmniejszy albo największy.
//    A element o indkesie [arrayName.length-1] jest również elementem albo największym albo najmniejszym.

   // Przykład:
   var numericSort = [1,7,4,5,9,11,551,1155,44899];
   numericSort.sort(function(a,b){return a-b});
   numericSort[0]; // najmniejszy elementu
   numericSort[numericSort.length-1]; // największy element

   // Jednak powyższa metoda jest nieefektywna jeżeli chcemy znaleźć tylko wartośc największą bądź najmniejszą.

// n) Inne metody znajdowania wartości min/max w tabeli:

   // Wartość najewięszka za pomocą metody Math.max() użytej na tablicy.
   // Składnia polecenia:
   Math.max.apply(null, nameArray);

   // Przykład:
   Math.max.apply(null, cities);

   // Wartość najmniejsza za pomocą metody Math.min() użytej na tablicy.
   // Składnia polecenia:
   Math.min.apply(null, nameArray);

   // Przykład:
   Math.min.apply(null, cities);

   // Najszybsze uzyskanie najmniejszej i największej to utworzenie funkcji z wewnętrzną pętlą while która porównuję każdy element tablicy z nieskończonością:
   // Składnia funkcji szukającej wartości największej:
   function myArrayMax(arr) {
    var len = arr.length
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
          }
        }
      return max;
    }

    // Składnia funkcji szukającej wartości najmniejszej:
    function myArrayMin(arr) {
    var len = arr.length
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
          }
        }
      return min;
    }

// o) Zwracanie numeru indeksu elementu tablicy za pomocą indexOf():
//    Metoda ta służy do zwracania numeru indeksu pod jakim znajduje się określony element tablicy.
//    Bardzo pomocne jeżeli nie znamy indeksu a znamy elementu.
//    W nawiasie metody podajemy element którego szukamy indeksu.
//    UWAGA ! Jeżeli jest kilka elementów o takiej samej wartości to zwróci indeks pierwszego który wystepuje w tablicy.

   // Składnia polecenia:
   arrayName.indexOf(item);

   // Przykład:
   cities.indexOf("Żarnowiec");
