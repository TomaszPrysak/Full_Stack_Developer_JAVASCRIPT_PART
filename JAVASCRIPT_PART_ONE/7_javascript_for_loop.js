// Pętla for
// Jest ona bliźniacza do pętli while. Powodem tego jest sposób działania pętli.
// Pętla for pozwala na powtarzalne wykonywanie kodu znajdującego się między nawiasami klamrowymi.
// Kod będzie powtarzany do momentu, aż spełoniony będzie określony warunek.
// Największą różnicą pomiędzy pętlą for a while jest jej składnia pętli:

for (zmienna_startowa; warunek; inkrementacja/dekrementacja_zmiennej_startowej){
  # kod wykonywany, jeżeli warunek = true
}

// UWAGA ! kolejne wyrażenia są rozdzielone średnikiem (;).

// Podczas użycia pętli na początku deklarujemy 3 wyrażenia:
// 1. Zmienna startowa. Jest to deklaracja zmiennej pomocnicznej oraz inicjalizacja jej wartości początkowej.
//    Od wartości tej zmiennej jest zależne ile razy pętla się powtórzy.
// 2. Warunek. Określamy warunek jaki musi być spełniony, aby pętla wykonała kolejny przebieg.
//    Warunek ten określa przy jakiej wartości zmiennej startowej pętla nie wykona już kolejnego przebiegu i zakończy swoje działanie.
// 3. Inkrementacja/dekrementacja_zmiennej_startowej. W jednym z trzech możliwoych sposóbów zapisujemy inkrementację/dekrementację zmiennej startowej.
//    Z każdym przebiegiem pętli zmienna startowa będzie zwiększa/zmniejszana co spowoduje, że jej wartość będzie się zbliżać do wartości granicznej zapisanej w warunku.
//    Po przebiegu pętli znowu będzie sprawdzany warunek. Jeżeli wartość zmeinnej startowej będzie poza warunkiem, wówczas warunek nie będzie spwłniony i pętla zostanie zakończony. Kod wewnątrz pętli pominięty.
//    Trzy możliwości zapisu inkrementacji/dekrementacji:
//    a) x = x + 1;/ x = x - 1;
//    b) x += 1;/ x -= 1;
//    c) ++x;/ --x (w przypadku jeżeli zmienną zmieniamy o wartość inną niż jeden wówczas tego posobu nie możemy wykorzystać)
//
// Taka konstrukcja pętli zabezpieczna nas przed błedem działania pętli w nieskończoność.
// W przeciwieństwie do pętli while, tutaj z góry ustalamy ile razy pętla będzie wykonywana.
// Oczywiście nie we wszystkich sytuacjach możliwe będzie jej wykorzystanie. Są sytuacje w którch pętla while będzię właściwsza do zastosowania.

// Kod znajdujący się wewnątrz pętli for jest wykonywany od góry do dołu. W  momencie dotarcia do dołu (znowu) jest sprawdzany warunek pętli.
// Jeżeli znowu jego wartość logiczna równa jest true to kod znowu jest wykonywany. I znowu jest wykonywany od gory do dołu. I znowu jest sprawdzany warunek pętli.
// I w momencie kiedy warunek już nie jest spełniany więc kod jest pomijany i wykonywany zostaje kod poza pętlą, tzn. nawiasem klamrowym.

// UWAGA ! Oprócz podstawowej pętli for opisanej powyżej w JavaScript występuję jeszcze dwie inne pętle for:
//         1. for/in - dla obiektów JavaScript
//         2. for/of - dla tablic JavaScript
//         Zostaną one omówione w późniejszym czasie

// Przykłady pętli:
// 1.:
for (var i = 0; i < 5; i = i + 1) {
    console.log("Number is " + i );
}

// var i = 0; - deklaracja i inicjalizacja zmiennej startowej,
// i < 5; - warunek przebiegu pętli,
// i = i + 1 - inkrementacja zmiennej startowej przy każdym przebiegu pętli o jeden.

// 2.:
var word = "ABCDEFGHIJK"
for (i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// Deklarujemy na początku zmienną word. Której wartością jest ciąg znaków.
// Nastepnie ustalamy, że nasza pętla for będzie wykonywana do momentu, aż zmienna startowa pętli będzie mniejsza od długość łańcucha znaków ze zeminnej word.
// Z każdym przebiegiem pętli będzie wypisywane w konsoli przeglądarki jedna litera ze zmiennej word.

// 3.:
var word = "ABABABABABA"
for (i = 0; i < word.length; i = i + 2) {
    console.log(word[i]);
}

// W tej pętli za każdym razem będzie wypisywana literka "A".
// Powodem tego jest inkrementacja zmiennej startowej nie o jeden a o dwa.
// A na co drugim miejscu w tej zmiennej znajduje się literka "A".

// BARDZO WAŻNE !
// Pętla for w połączeniu z innerHTML doskonale nadają się do umieszczania całych znaczników HTML wraz z treścią.
// Dzięki temu możemy stworzyć automatyczne umieszczanie dużych treści wraz z ich znacznikami HTML.
// Oczywiście musimy stworzyć jakiś znaniczk nadrzędny wraz z ID do którego wstawimy stworzony całkowicie automatycznie znacznik z treścią. Możemy to połączyć na przykłąd z Bootstrapem.

// Powyższe jest możliwe dzięki temu, że za pomocą innerHTML wstawimy nie sam zwykły tekst, ale dodamy do niego również w postaci tekstowej znaczniki HTML.
// Pomimo, że na początku będzie to zwykły tekst to w momencie jak go wstawimy za pomocą innerHTML to ten tekst mając w sobie już znaczniki będzie odczytywany prawidłowo przez przglądarkę.
// I znacnziki HTML zapisane w tekście zostaną odczytane przez przeglądarkę jako, np.: akapit P albo lista UL/OL, albo formularz itd.
// W związku z tym na stronie internetowej treść wyświwetli się zgodnie z wyświetlaniem zgodnym z danym znacznikiem.

// Aby powyższe zrealizować tworzymy przed pętla for zmienną kórej wartość jest ciąg znaków w postaci interesującego nas znaniczka otwierającego.
// Następnie w pętli for bedziemy do tej zmiennej dodawać treść wypełniającą, która w normalnych warunkach znajdowałaby się między znacznikiem otwierającym i zamykającym HTML.
// A poza pętlą for, cały czas do tej samej zmiennej dodajemy na sam konieć ciąg znaków w postaci znaniczka zamykającego.
// Dzieki temu w jednej zmiennej mamy całą zawartość wraz z załącznikami.
// Wykorzystując innerHTML zmienną tą przypisujemy do interesującego nas ID.
// Przeglądarka prawidłowo odczytuje i wyświtla treść naszej zmiennej.

// Przykład:
var cities = ["Szczekociny", "Myszków", "Zawiercie"];
var citiesLen = cities.length;

tresc = "<ul>";
for (var i = 0; i < citiesLen; i++) {
  tresc += "<li>" + cities[i] + "</li>";
}
tresc += "</ul>"
document.getElementById('f').innerHTML = tresc;

// Powyższe zapisalibyśmy w formacie HTML w następujący sposób:

<ul>
  <li>Szczekociny</li>
  <li>Myszków</li>
  <li>Zawiercie</li>
</ul>

// To co otrzymamy za pomocą pętli for to:

<ul><li>Szczekociny</li><li>Myszków</li><li>Zawiercie</li></ul>

// To jest to samo co forma przyjemniejsza dla oka, jednak dla przeglądarki HTML to nie ma znaczenia.
// Kod HTML piszemy z zachowaniem formy aby można druga osoba mogła się w nim połapać.
// Jednak dla przeglądarki wszystko mogłoby być zapisane w jendej lini.
// Dlatego to co uzyskamy przy pomocy pętli for mimo, że w jednej lini będzie prawidłowo wyświetlane.
