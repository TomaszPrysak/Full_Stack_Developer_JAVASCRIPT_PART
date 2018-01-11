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

var arrayName =[
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
console.log(cities);// Oczywiście jeżeli chcemy wyśweitlenia zawartości tą nazwę musimy użyć z jakimś poleceniem które tan pozwoli to wyświeltić, w przeciwnym wypadku nic nie dostaniem

// Natomiast do każdego elementu z osobna w tablicy mamy dostęp poprzez powołanie się na jego numer indeksu.
// Każda pozyca w tablicy ma swój numer indeksu, zaczynając od 0 dla pozycji pierwszej i rosnąco dla każdej następnej pozycji:

cities[0]; // w ten sposób wywołujemy zawartość pierwszego elementu tablicy
document.getElementById('id').innerHTML = cities[0]; //, podobnie jak w przypadku całej tablicy aby wyśweitlić tą wartość musimy użyc jakiegos polecenia do tego calu

// Każdą pozycje z tablicy możemy przypisać do osobnej zmiennej:

var city1 = cities[1]; // drugie element z tabeli przypisany do zmiennej city1

// Póżniej tą zmienną oczywiście możemy wykorzystać do wszelkiego rodzaju operacji w naszym kodzie.

// 3. Zmiana poszczególnych pozycji tablicy.
// Aby zmienić element zapisany na konkretnej pozycji dokonujemy tego poprzez odwołanie się do konkretnej pozycjia a następnie zapisanie w nim nowej wartości tak jak zmieniamy wartość zmiennej.

cities[1] = "Włoszczowa"; // wówczas w tablicy na pozycji 2 nie będzie już Myszków tylko Włoszczowa

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
  currentValue // jako wartość pojedynczego elementu tablicy, przy każdym przebiegu jest równy nastepnegmu elementowi
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

arrayName.forEach(nazwaFunkcji(aktualnyElement, indexElementu, tablicaElementu), taWartość);
// Jak widać ta metoda wymaga aby była stworzona funkcja i posiadała co najmniej jeden argument:
// aktualnyElement - ten argument JEST WYMAGANY, będzie on zwracać wartość aktualnego elementu tablicy, coś jak zmiena pomocniczan "currentValue" w pętli for/of
// indexElementu - ten argument NIE JEST wymagany, po prostu zwraca indeks aktualnego elementu tablicy,
// tablicaElementu - ten argument NIE JEST wymagany, po prostu zwraca nazwę aktualnego elementu tablicy.
// taWartość - argument poza funkcją, również nie jest wymagany
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
