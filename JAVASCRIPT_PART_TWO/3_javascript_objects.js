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

// 1. Definiowanie obiektu.
// Składnia tworzenia obiektu:

var objectName = {key:"ValueString1", key2:"ValueString2", key3:XXX, method:function()};

// Może być również sposób wieloliniowy:

var ojectName = {
  key:"ValueString1",
  key2:"ValueString2",
  key3:XX,
  method:function()
}

// UWAGA! Klucze opisujemy zawsze za pomocą ciągów znaków. Jednak jest to ciąg znaków podczas tworzenia obiektu więc nie musimy zawierać go w cudzysłów. Inaczej jest to swego rodzaju nazwa zmiennej wewnątrz obiektu.
//        Z kolei wartości które przypisujemy kluczom mogą być różnego typu: numeryczne, ciągi znaków, logiczne itd. Wówczas musimy je zapisywac tak jak się je zapisuje. Ciągi znaków w cudzysłów itd.

// Na przykład:
var car = {brand:"Fiat", model:"500", color:"red", weight:800}
// klucze: brand, model, color, weight
// właściwości: Fiat, 500, red, 800

// 2. Dostęp do kluczy i wartości/elementów do nich przypisanych w obiekcie.

// Nie mamy możliwości wypisania każdej wartości obiektu za pomocą jednego polecenia.
// Dostęp do każdej wartości/elementu z osobna przypisanego do danego klucza nastepuje porzez podanie nazwy obiektu i po kropce nazwy klucza do którego wartość/element został przypisany.
// A więc musimy znać jakie klucze zostały zdefiniowane w obiekcie, aby później za ich pomocą odwołać się do wartości/elementów.
// Do wyświetlenia kluczy zdefiniowanyuch w obiekcie służy następująca składnia:

Object.keys(objectName);
// wówczas dostajemy po przecinku wypisane klucze użyte w definicji obiektu
// Jeżeli przypisalibyśmy to polecenie do jakiejś zmiennej wówczas otrzymamy tablicę z kluczami jako elementy tablicy.

// Na przykład:

Object.keys(car1);

// Skoro już znamy jakie mamy klucze w obiekcie to teraz możemy uzyc polecenia do uzyskania wartości/elementów przypisanych do tych kluczy.
// Składnia jest nastepująca:

objectName.key;

// Na przykład:

car1.model;

// UWAGA ! Powyższy sposób odwoływania się do wartości przypisanych do kluczy jest najbardziej intuicyjny w podejściu programowania obiektowego.
//         Możemy również odwoływać się do wartości obiektów tak jak w przypadku tablic. Po nazwie obiektu w nawiasie kwadratowym wpisujemy nazwę klucza w cudzysłowiu.
//         Jednak ten sposób nie będzie przezemnie używany.
//         A składnia wygąda tak:

objectName["key"];
