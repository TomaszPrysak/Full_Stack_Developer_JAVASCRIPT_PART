// Operatory pozwalają nam na porównywanie, np. zmiennych, wartości, a następnie dodawanie do naszego skryptu logiki.

// Celem operacji porównywania jest otrzymanie wartości logicznej.

// Typy logiczne danych mogoą mieć wartości:
true // prawda
false // fałsz

// Rodzaje porównania:
// Większe niż
3 > 2; // true
2 > 3; // false
// Mniejsze niż
1 < 2; // true
// Większe lub równe
2 >= 2; // true
// Mniejsze lub równe
1 <= 3; // true

// Rówe / różne
// UWAGA ! Porównanie typu "równe" / "różne" jest szczególne ważne gdyż w JavaScript mamy możliwość porównania prostego i szczegółowego.

// Proste "równe"
// Używamy do tego podwójnego znaku równości - ==
// Porównanie proste polega na tym, że JavaScript stara się zamienić, sprowadzić porównywane dwie wartości do jednego typu danych, np. do typu liczbowego i wtedy porównać.
2 == "2"; // true - rozwiązaniem porównania jest prawda ponieważ JavaScript sprowadzi ciąg liczbowy "2" do wartości liczowej i wtedy porówna. A więc porówna dwie cyfry 2. A one są równe.
"user" == "user";  // true - w tym przypadku obydwie wartości są ciągiem liczb, które są identyczne pod każdym względem. UWAGA ! w przypadku porównywania ciągów znaków ważne są wielkości liter.
"user" == "User"; // false - jedna z liter porównywanego ciągu jest duża
2 == "user"; // false - dana liczbowa nie może być równa danej tekstowej
// Proste "różne"
// Używamy do tego wykrzyknika i znaku równości - !=
// Działa na tej samej zasadzie co proste "równe". Tyle, że sprawdzamy czy porównywane wartości nie są równe sobie, czyli czy są różne.
2 != "2"; // false - rozwiązaniem porównania będzie fałsz, ponieważ JavaScript najpierw sprowadzi typy danych porównywanych wartości do tego samego typu i póżniej porówna. A więc porówna dwie cyfry 2. A one są równie. A więc będzie fałsz, bo są równa a my pytamy czy są różne.
"user" != "User"; // true - będzie prawda ponieważ, jedna litera w drugiej wartości jest duża a w pierwszej wartości wszystkie są małe, a więc te dwa łańcuchy są różne, czyli prawda.
// Podsumowując, proste "równe" / "róże" najpierw próbuje sprowadzić dwie wartości do jednego typu danych a później porównać. A więc jak będziemy mieli dwie liczby, z któej jedna jest typem liczbowym (2) a drugia ciągiem znaków("2") więc obydwie zostaną sprowadzone do jednego typu danych i zawsze będą dwóne sobie.


// Szczegółowe "równe"
// Używamy do tego potrójnego znaku równości - ===
// Porównanie szczegółowe polega na tym, że JavaScript NIE sprowdza porównywanych wartści do jednego typu danych tylko oprócz wartości porównuje też ich typy danych.
2 === "2"; // false - rozwiązaniem porównanie jest fałsz, ponieważ typy danych porównywanych wartości jest różny. Wówczas już nie ma znaczenia wartość.
5 === 5; // true - obydwie wartości są takich samych typów i mają tą samą wartość
"user" === "user" // true
// Szczegółowe "różne"
// Używamy do tego wykrzyknika i podwójnego znaku równości - !==
// Dziąła na tej samej zasadzie co szczegółowe "równe". Tyle, że sprawdzamy czy porównywane wartości nie są równe sobie, czyli czy są różne.
2 !== "2"; // true - wynikiem będzie prawda, ponieważ są one różnych typów danych a więc wynikiem zapytania czy są różne będzie prawda.
5 !== 5; // false - będzie fałsz bo obie są tego samego typu danych i mają tą samą wartość, wiec nie są różne, a więc fałsz
"user" !== "User"; // true - w tym przypadku moglibyśmy też użyć prostego "rózne", bo są tych samych typów danych. Jedna z liter jest duża a więc nie są one równe, czyli prawda.
// Podsumowując, szczegółowe "równe" / "różne" oprócz wartości porównuje również, typy danych porównywanych wartości.

// Pórwnianie proste stosujemy jeżeli mamy pewność, że porównywane wartości są tych samych typów danych. A porównywanie szczegółowe jeżeli nie mamy takiej pewności.

// Powyższe rozważania nad prostym i szczegółowym porównaniem ma odzwierciedlenie w przypadku logiki i tego, że języki programowania interpretują:
// 1 to true
// 0 to false
// Jednak tak się dzieje tylko w przypadku porównania prostego. Czyli tego gdzie JavaScript sprowadza wartości do tego samego typu danych.
true == 1; // true
true === 1; // false

false == 0; // true
false === 0; // false

// DO ZAPAMIĘTANIA
null == undefined; // true
NaN == NaN; // false

// OPERACJE LOGICZNE
// Operacje logiczne są wykorzystywane do wielokrotnego porównywania.
// Do łączenia porównań służą dwa operatory:
// AND (i) zapisywane symbolicznie jako: &&
// Wynik tego operatora jest prawdą (true) jeżeli każde z poszczególnych wyrażeń jest prawdą (true)
1 === 1 && 2 === 2; // true - pierwsze wyrażenie jest prawdą i drugie wyraenie jest prawdą więc całe wyrażenie jest prawdą (1 i 1 = 1)
1 === "1" && "user" == "user"; // false - pierwsze wyrażenie jest fałszywe, ponieważ wykorzystujemy porównanie szczegółowe. Liczba jest różna od ciągu znaków. A skoro jedno wyrażenie jest fałszywe to całe wyrażenie jest fałszywe, mimo, że drugie wyrażenie jest prawdą (0 i 1 = 0).

// OR (lub) zapisywane symbolicznie jako: ||
// Wynik tego operatora jest prawdą (true) jeżeli choć jedno z wyrażeń jest prawdą (true)
1 === 2 || 1 === 1; // true - pomimo, że pierwsze wyrażenie jest fałszywe, ponieważ 1 jest różne od 2, to drugie wyrażenie jest prawdą bo 1 jest równe 1, a więc wynik całego wyrażenia jest prawdą (0 lub 1 = 1)
"user" == "User" || 1 > 2; // false - obydwa wyrażenia są fałszywa, a więc całość wyrażenia jest fałszywa (0 lub 0 = 0)

//Oczywiście możemy łączyc wiele wyrażeń za pomocą tych operatorów np.:
1 == 1 || 1 < 2 && 2 == 1; // true - to wyrażenie pokazuje w jaki sposób jest czytany kod przez JavaScript. Jeżeli w wyrażeniu występują operatory AND i OR to wówczas pierwsze porównywane są operatory AND, później OR. Jeżeli jest tylko jeden rodzaj operatora w wyrażeniu to kod jest czytany od lewej do prawej.
// W powyższym przykłądzie najpierw jest sprawdzane pierwsze wyrażenie AND. Wynikiem jego będzie false, ponieważ 1 jest mniejsze od 2 i 2 nie jest równe 1. A następnie wynik AND bierze udział w operacji OR. Wyrażenie 1 == 1 jest prawdą. Z wczesniejszego wyrażenia AND wynik był fałszem. A więc prawda i fałsz w wyrażeniu OR daje nam prawdę.

// UWAGA ! Operacje logiczne w nawiasach są czytane w pierwszej kolejności.

// NOT (zaprzeczenie) jest zpisywany symbolicznie jako: !
// Znak ten używamy przed wyrażeniem w nawiasie.
// Tak jak w teorii logiki znak ten zmienia wartość logiczną wyrażenia na przeciwną
!(1 === 1); // false - wyrażenie w nawiasie jest prawdą wieć jego zaprzeczenie daje nam fałsz

// Przykłady:
var x = 1
var y = 2

// 1
"2" == y && x === 1; // true - pierwsze wyrażenie jest prawdą (porównanie proste) i drugie wyrażenie też jest prawdą. Całość jest prawdą.

// 2
x >= 0 || y === "2"; // true - pierwsze wyrażenie jest prawdą, drugie wyrażenie jest fałszem (porównanie szczegółowe). Całość jest prawdą.

// 3
!(x !== 1) && y === (1+1); // true

// 4
y !== "2" && x < 10; // true

// 5
y !== x || y == "2" || x === 3; // true
