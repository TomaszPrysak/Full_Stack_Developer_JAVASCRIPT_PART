// Obiekty

// Obiekty w JavaScript są bardzo podobne do słowników w Pythonie.

// Są to swego rodzaju tablice do przechowywania informacji.
// Jednak w tablicach odwłoywalismy się do elementów w nich poprzez indkesy.
// Natomiast w obiektach każdemu elementowi przypisany jest klucz, bądź operując nazewnictwem profesjonalny, właściwość.
// Z kolei element przypisany do klucz nazywany jest wartością.

// Tablice używane są przede wszystkim do tworzenia list zawierających wiele elementów. Najczęściej jednego rodzaju.
// Na przykład tworzymy tablice zawierające imiona, daty, wyniki jakichś obliczeń itd.
// Bardzo rzadko w tablicach przechowujemy informacje różnego typu.
// Z tego powodu nazwałbym tablice jako "płaskie".

// Natomiast obiekty używane są do reprezentowania pojedynczych elementów z wieloma cechami.
// W tym celu pomocne są właśnie pary "klucz:wartość". Dzięki temu klucze będą opisywać nam cechy którym przypiszemy konkretne wartości.
// Dodatkowo obiekty mogą również posiadać metody, gromadzone w funkcjach, które mogą nadawać tym obiektom różnego rodzaju akcje odpowiadające charakterowi obiektu.
// Wszystkie obiekty tego samego typu będą miały te same cechy jednak będą się różnic wartościami.
// Wszystkie obiektu tego samego typu będą miały te same metody, jednak metody te będą powodowały wykonanie akcji w róznym czasie.

// Na przykład tworzymy obiekt samochód.
// Obiekt ten posiada właściowości: marka, model, ciężar, kolor itd.
// Posiada również metody, czyli inaczej funkcje, opisujące akcje nadawane samochodowi: ruszaj, hamuj, skręcaj, przyspiesz, włącz światła itd.

// W obiektach nie mam konkretnej kolejności pary "klucz:wartość". W obiektach po prostu do wartości odnosimy się poprzez klucz.

// 1. Definiowanie obiektu.
// Składnia tworzenia obiektu:

var objectName = {key:"ValueString1", key2:"ValueString2", key3:XXX, method:function(){kod funkcji}};

// Może być również sposób wieloliniowy:

var objectName = {
  key:"ValueString1",
  key2:"ValueString2",
  key3:XX,
  method:function(){
    kod funkcji
  }
}

// UWAGA! Klucze opisujemy zawsze za pomocą ciągów znaków. Jednak jest to ciąg znaków podczas tworzenia obiektu więc nie musimy zawierać go w cudzysłów. Inaczej jest to swego rodzaju nazwa zmiennej wewnątrz obiektu.
//        Z kolei wartości które przypisujemy kluczom mogą być różnego typu: numeryczne, ciągi znaków, logiczne itd. Wówczas musimy je zapisywac tak jak się je zapisuje. Ciągi znaków w cudzysłów itd.

// Na przykład:
var car = {brand:"Fiat",
           model:"500",
           color:"red",
           weight:800,
           fullName:function(){
             return this.barand + " " + this.model;
           }
         }
// klucze: brand, model, color, weight, fullNaME
// właściwości: Fiat, 500, red, 800, FUNCTION()

// 2. Dostęp do kluczy i wartości/elementów do nich przypisanych w obiekcie.
// Nie mamy możliwości wypisania każdej wartości obiektu za pomocą jednego polecenia.
// Dostęp do każdej wartości/elementu z osobna przypisanego do danego klucza nastepuje porzez podanie nazwy obiektu i po kropce nazwy klucza do którego wartość/element został przypisany.
// A więc musimy znać jakie klucze zostały zdefiniowane w obiekcie, aby później za ich pomocą odwołać się do wartości/elementów.
// Do wyświetlenia kluczy zdefiniowanyuch w obiekcie służy następująca składnia:

Object.keys(objectName);
// wówczas dostajemy po przecinku wypisane klucze użyte w definicji obiektu
// Uwaga ! Jeżeli przypisalibyśmy to polecenie do jakiejś zmiennej wówczas otrzymamy tablicę z kluczami jako elementy tablicy.

// Na przykład:

Object.keys(car1);

// Skoro już znamy jakie mamy klucze w obiekcie to teraz możemy użyć polecenia do uzyskania wartości/elementów przypisanych do tych kluczy.
// Składnia jest nastepująca:

objectName.key;

// Na przykład:

car1.model;

// UWAGA ! Powyższy sposób odwoływania się do wartości przypisanych do kluczy jest najbardziej intuicyjny w podejściu programowania obiektowego.
//         Możemy również odwoływać się do wartości obiektów tak jak w przypadku tablic. Po nazwie obiektu w nawiasie kwadratowym wpisujemy nazwę klucza w cudzysłowiu.
//         Jednak ten sposób nie będzie przezemnie używany.
//         A składnia wygąda tak:

objectName["key"];

// Na przykład:

car1["model"];

// Jeżeli chcemy zmienić wartość dla danego klucza to wystarczy po odwołaniu się do danego klucza postawić znak równa się i przypisam mu nową wartość.
// Jest to bardzo podobne do dodawania nowej pray "klucz:watość". Jednak w tym wypadku posługujemy się kluczem już istniejącym.
// Składnia zmiany wartości przypisanej do klucza:
objectName.key = newValue;
objectName["key"] = newValue;

// 3. Dostęp do kluczy i metod do nich przypisanych.
// Troche inaczej sytuacja wygląda ze zdefiniowanymi metodami w obiekcie.
// Jeżeli za pomocą sposobu z kropką chcemy wywołać metodę przypisaną do klucza to musimy zapis skończyć za pomocą otwartego i zamkniętego nawiasu "()".

objectName.method();

// Na przykład:

car1.fullName();

// UWAGA ! Z kolei jeżeli po nazwie metody nie poznawimy otwarcia i zamknięcia nwiasu "()" to po polecenie zwróci nam cały kod zapisany w funkcji jako ciąg znaków.

// 4. Dodawanie nowych par "klucz:wartość" do obiektu.
// W związku z tym, że nie w obiektach nie ma konkretnej kolejności par "klucz:wartość" w związku z tym nie dodajemu tutaj obiektów na początkum, na końcu czy gdzieś w środku.
// Nową parę "klucz:wartość" do obiektu dodajemy w ten sposób, że najpierw podajemy nazwę obiektu, a następnie po kropce podajemy nazwę klucz i po znaku równa się wartość temu kluczowi przypisaną.
// Składnia dodawania nowej pary "klucz:wartosć"

objectName.newKey = value;

// Składnia tej formy której ja nie będę używać:

objectname["newKey"] = value;

// Na przykład:

car1.power = 50;
car1["torque"] = 88;

// 5. Dodawanie nowych par "klucz:metoda" do obiektu.
// Sposób dodawania pary "klucz:metody" jest bardzo podobny do tej której używaliśmy w przypadku dodawania pary "klucz:wartość"
// Nową metodą do istniejącego już obiektu dodajemy w ten sposób, że najpierw podajemy nazwę obiektu, a nastepnie po kropce nazwę klucza do którego metoda będzie przypisana.
// I tutaj pojawia się różnica. Mianowicie następnie po znaku równa się podajemy słowo kluczowe "function()" i w nawiasie klamrowym definicję funkcji.
// Składnia dodawania nowej pary "klucz:metoda":

objectName.newKey = function(){
  definicja funkcji
}

// Przykład:

car1.weightWith4Person = function(){ // funkcja zdefiniowana jako osobna w kodzie programu
  return this.weight + (4*80) // "this" zwracające się do klucza obiektu do którego ta funkcja będzie przypisana
}

// UWAGA ! Słówko kluczowe "this" w definicji funkcji będzie omawiane przy okazji programowania obiektowego w punkcie 7.

// 6. Iterowanie po parach "klucz:wartość/klucz:metoda" obiektu.
// Stosując polecenie "Object.keys(objectName)" dostajemy możliwość wypisania za jednym razem kluczy obiektu.
// Jeżeli przypiszemy do tego polecenia zmienną to klucze z danego obiektu będą elementami tablicy o nazwie zmiennej do której przypisaliśmy to polecenie.
// Z koleim, jeżeli bedziemy za kazdym razem podawać nazwę obiektu i po kropce nazwę klucza wówczas mamy dostęp do wartości przypisanej do tego klucza.

// Jeżeli byśmy chcielibyśmy mieć za każdym razem dostęp do każdej pary "klucz:wartość" posiłkujemy się iterowaniem przez obiekt za pomocą pętli for/in.
// Poznajemy więc kolejną wersję pętli for. W wcześniej poznalismy standartdową pętlę for oraz specjalną pętlę stworzoną do tablic for/of.
// Tablicę mogliśmy iterować zarówno za pomocą standardowej pętli for jak i dedykowanej for/of.

// W przypadku obiektów musimy użyć tylko i wyłącznie pętli for/in.
// Nie możemy użyć standardowej pętli for, ponieważ nie mamy polecenia które pozwoli nam określić ilość par "klucz:wartość". A dodatkowo nie wiemy w jakiej kolejności są te pary.
// A jak wiemy pętla for posiada warunek który wykorzystujemy do inrkemenetacji zmiennej pomocniczej.
// Jeżeli zmienna pomocnicza jest mniejsza, niż warunek wówczas jest ona inkrementowana(bądź dekrementaowana) i nastepuje kolejny przebieg pętli.
// A skoro nie znamy ilości par "klucz:wartość" to posiłkujemy się pętlą for/in która dokładnie wie ile jest takich par i tyle razy zostanie wykonana.

// Składnia pętli pętli for/in:
for (var currentKey in objectName){
  currentKey;
}
// W pętli tej posiłkujemy się zmienną pomocniczą currentKey do której za każdym przebiegiem pętli jest przypisywany klucz obiektu.
// A następnie tą zmienną podstawiamy do poleceń które pozwola nam wykonać polecenia i otrzymać klucz bądź wartość do niego przypisaną.
// Zmienną pomocniczą możemy nazwać jak nam sie podoba. Tak jak ją nazwiemy później musimy takiej nazwy używać wewnątrz petli.
// Dla ułatwienia najlepiej ją nazwać tak jak w przykładzie lub podobnie tak aby kojarzyła się z kluczami obiektów.

// Na przykład:

for (var key in car1){
  console.log("Do klucza: "key + " przypisana jest wartość: " + car1.key);
}

// UWAGA ! W przypadku interowania za pomocą pętli for/in aby mieć dostęp do wartości przypisanej do klucza obiektu musimy odwołać się do niego za pomocą nazwy obiektu i nawiasu kwadratowego:
//         objectName[key].
//         W pętli nie możemy używać odwołania się do wartości poprzez notację kropkową, objectName.key - NIE zadziała w pętli. Ponieważ jest tutaj problem ze zmienną pomocniczą.

// Iterować możemy również za pomocą pętli for/each.
// Aby więcej o tym się dowiedzieć, poszukaj w internecie.

// 7. Programowanie obiektowe.
//
