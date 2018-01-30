// Obiekty

// Obiekty w JavaScript są bardzo podobne do słowników w Pythonie.

// Są to swego rodzaju tablice do przechowywania informacji.
// Jednak w tablicach odwłoywalismy się do elementów w nich poprzez indkesy, będące.
// Natomiast w obiektach każdemu elementowi przypisany jest klucz, bądź operując nazwnictewm profesjonalny, właściwość.
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

// Składnia tworzenia obiektu:

var ojectName = {key:"ValueString1", key2:"ValueString2", key3:XX}

// Może być również sposób wieloliniowy:

var ojectName = {
  key:"ValueString1",
  key2:"ValueString2",
  key3:XX
}

// UWAGA! klucze opisujemy zawsze za pomocą ciągów znaków. Jednak jest to ciąg znaków podczas tworzenia obiektu więc nie musimy zawierać go w cudzysłów. Inaczej jest to swego rodzaju nazwa zmiennej wewnątrz obiektu.
//        Z kolei wartości które przypisujemy kluczom mogą być różnego typu: numeryczne, ciągi znaków, logiczne itd. Wówczas musimy je zapisywac tak jak się je zapisuje. Ciągi znaków w cudzysłów itd.

// Na przykład:
var car = {brand:"Fiat", model:"500", color:"red", weight:800}
// klucze: brand, model, color, weight
// właściwości: Fiat, 500, red, 800
