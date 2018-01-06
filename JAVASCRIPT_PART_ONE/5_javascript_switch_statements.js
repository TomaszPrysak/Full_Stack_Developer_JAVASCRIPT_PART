// Instrukcja switch:
// Służy ona do wykonywania określonego fragmentu kodu na podstawie różnych warunków.
// Innymi słowy w zależności od wartości jaką przyjmuje sprawdzane przez nas wyrażenie i od warunków, zależnych od sprawdzanego wryważenia, przypisanych do poszczególnych przypadków taka akcja zajdzie (taki kod zostanie wykonany).
// Instrukcja ta jest bardzo podobna do insrtukcji warunkowej if + else if, ponieważ za pomocą instrukcji warunkowej też możemy zapisać wiele warunków i wykonywaną dla tych warunków akcję.
//
// Składnia instrukcji:
switch(wyrażenie) {
    case wartość1:
        # wykonywany kod, jeżeli wartość_wyrażenia === wartość1
        break;
    case wartość2:
        # wykonywany kod, jeżeli wartość_wyrażenia === wartość2
        break;
    default: # opcjonalnie
        # wykonywany kod, jeżeli wartość_wyrażenia nie została ujęta w żadnym przypadku
}

// Na początku pobierana jest wartość wyrażenia które zostało ujęte w nawiasie za słowem switch.
// Nastepnie wartość ta jest porównywana z wartością przypisaną do każdego przypadku.
// Jeżeli w którymś przypadku wartość jemu przypisana i wartość wyrażenia będą takie same to zostanie wykonany kod przypisany do tego przypadku.

// Natomiast jeżeli w żadnym przypadku nie będzie wartości która jest równa wartości wyrażenia wówczas zostanie wykonany kod z przypadku "default"
// Opcja "default" nie jest opcją wymaganą.

// UWAGA ! Jako wartość dla przypadku trzeba podać konkretną wartość a nie wartość typu większe mniejsze itd. Musi to być konkretna wartość.

// UWAGA ! Brdzo ważne, aby na koncu kodu który będzie wykonywany postawić "break", czyli funkcję przerywającą działanie instrukcji switch (i nie tylko tej instrukcji).
//         Jest to wymagane. Kod jest wykonywany w momencie kiedy wartość danego przypadku jest równa wartości wyrażenia.
//         Jednak jeżeli kod już jest wykonywany wówczas jego przerwanie i opuszczenie instrukcji switch może nastąpić tylko dzięki "break".
//         Jeżeli tego nie będzie to pomimo, że kod dla danego przypadku zostanie wykonany to instrukcja switch nie zostanie opuszczona tylko zostanie wykonywany kod z kolejnego przypadku (chyba, że to był ostatni przypadek).
//         Instrukcja switch ta nie jest automatycznie przerywana. Po prostu jezeli zacznie być wykonywana to jest wykonywana do końca bądź "break".

// Powyższa właściwość pozwala nam przypisać ten sam kod dla dwóch różnych przypadkuów.
// Po prostu wypisując pierwszy przypadek po dwukropu od nic nie napiszemy i od razu napiszemy drugi przypadek a w nim właściwy kod z "break".

// Przykład instrukcji switch:

var text;
switch (new Date().getDay()) { // tworzenie obiektu data i pobieranie z niego dnia tygodnia zapisanego jako 0 === niedziela ... 6 === sobota
    case 4: // jeżeli sprawdzanym dniem jest czwartek
    case 5: // jeżeli sprawdzanym dniem jest piątek
        text = "Soon it is Weekend"; // to do zmiennej text przypisywna jest odpowiedni tekst
        break;
    case 0: // jeżeli sprawdzanym dniem jest sobota
    case 6: // jeżeli sprawdzanym dniem jest niedziela
        text = "It is Weekend"; // to do zmiennej text przypisywna jest odpowiedni tekst
        break;
    default: // w kazdnym innym przypadku, czyli dla poniedziałku, wtorku i środy
        text = "Looking forward to the Weekend";  // do zmiennej przypisywany jest odpowiedni tekst
}
console.log(text); // na końcu zmienna text wypisywana jest w konsoli przeglądarki
