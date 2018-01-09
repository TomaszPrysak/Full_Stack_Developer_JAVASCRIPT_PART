// Za pomocą JavaScript możemy wywietlać dane/informacje za pomocą następujących sposobów:
//
// 1. Zapisywanie dancy/informacji do elementu HTML o określonym ID za pomocą "innerHTML".
//
//    Jednak wcześniej musimy uzyskać dostęp do elementu HTML aby w nim coś zapisać.
//    Dostęp do elementu HTML za pomocą JavaScript nastepuje poprzez metodę:
//    "document.getElementById(id)"
//    Gdzie, w nawiasie, w miejscu id wpisujemy ID elementu HTML za pomocą którego wyśweitlimy dane/informacje jako treść naszej strony.
//    Wówczas pomiedzy znacznikiem takiego elementu HTML nic nie piszemy. innerHTML umieści za nas treść w takim znaczniku HTML.
//    Może to być wynik jakiegoś działania, ciąg znaków, wartość jakiejś zmiennej itd. Wszystko co przetwarzamy za pomocą JavaScript.
//    Elementem HTML może być każdy element który powoduje wyśweitlanie treści na stronie internetowej, np.: akapit P, nagłówek H1, elementu formularza itd.
//
//    Ważne jest, aby podpięcie skryptu JS bądź pisanie go w kodzie HTML nastąpiło przed znacznikiem </BODY>.
//    Ponieważ aby mieć dostęp do elementów HTML i do nich coś zapisywać i później wyśweitlac za pomocą nich dane/informacje muszą one być załadowane przed załadowaniem skryptu.
//    Muszą być dostępne dla metody innerHTML. A wcześniejsze załadowanie elementów HTML przed załadowaniem skryptu umożliwia nam umieszczenie skryptu przed </BODY>.

//    A więc najpierw uzyskujemy dostęp do elementu HTML o okreslonym ID, a póżniej zapisujemy w nim dane/informacje, a ten element wyśweitla te dane/ifnormacje jako treść naszej strony.
//    Przykład:

      document.getElementById("test").innerHTML = 5 + 6; // za pomocą elementu o ID = test będziemy wyświetlać na naszej stronie internetowej wynik działania 5 + 6

//    Możemy się wspomoagać zmiennymi. To znaczy, przypiszemy do zmiennej nasz element HTML o okreslonym ID wraz z metoda dostawania się do niego, np.:

      var akapit = document.getElementById("test");

//    A następnie powołując się przez zmienną i innerHTML będziemy mu zmieniać treść, w poniższym przykłądzie za pomocą polecenia prompt() aby użytkownik sam podał to co ma zostać wyświetlone, np.:

      akapit.innerHTML = prompt("Wprowadź nowy tekst który będzie wyświetlany w akapicie");

//    Możemy wykorzystać tą metodę do pobierania treści z jednego elementu HTML i wklejenia go do innego elementu HTML.

      document.getElementById("do").innerHTML = document.getElementById("z").innerHTML + " - pobrano to co napsane w akapicie pierwszym i przeklejono do akapitu drugiego wszystko za pomocą innerHTML";

// 2. Wyśweitlanie danych/informacji za pomocą okienka wyskakującego przeglądarki.
//
//    Słyży do tego polecenie:
//    "alert()" bądź "window.alert()"
//    W nawiasach umieszczamy dane/informacje do wyśeitleniu w wyskakującym okienku okienku.
//    Może być to bezposrednia informacja, bądź zmienna itd.
//
//   UWAGA ! Polecenie to jest wykonywane na samym początku skryptu. Przed załadowaniem się treści na naszej stronie internetowej. Bez względu na to czy umieścimy je w skrypcie podpietynm w HEAD czy przed </BODY>.
//           Dopiero jak klikniemy OK tego okienka to załaduje się treść naszej strony internetowej.
//
//    Przykład:

   alert("Witaj na naszej stronie internetowej !"); // po otwarciu strony internetowej wyświetli się okienko z napisem "Witaj na naszej stronie internetowej !"
   window.alert("Witaj na naszej stronie internetowej !"); // tak jak przykład powyższy tylko inne polecenie

// 3. Wyśweitlanie danych/informacji za pomocą konsoli przeglądarki.
//
//    Służy do tego polecenie:
//    "console.log()"
//    W nawiasach umieszczamy dane/informacje do wyświetlenia w konsoli przeglądarki.
//    Polecenie to służy głównie do testowania i poszukiwaniu błędów na naszym kodzie JavaScript.
//    Głównym powodem tego jest to, że informacje nie pojawią się w postaci treści na stronie bądź w wyskakującym okienku tylko w konsli przeglądarki.
//
//    Przykład:

   console.log("Testujemy nasz skrypt");

// 4. Bezpośrednie wyświetlanie danych/informacji jako treść na stronie za pomocą document.write()
//
//    Metoda ta pozwala na bezpośrednio ze skryptu JavaScript wyśweitlenie danych/informacji na naszej stronie internetowej jako treść.
//    Służy do tego polecenie:
//    "document.write()"
//    W nawiasach umieszczamy dane/informacje do wyświetlenia jako treść na naszej stronie internetowej.
//    W tej metodzie nie musimy używać elementu HTML a później dostawać się do niego za pomoca innerHTML.
//    Po prostu piszemy to polecenie w naszym skrypcie a infromacje z nawiasu zostaną wyświetlone jako treść naszej strony.
//    Treść ta zostanie wyśweitlona tak jakby była umieszczona w akapicie P.

//    Ta metoda jest ściśle zależna od tego gdzie podepniemy nasz skrypt JS bądź gdzie będziemy pisać nasz skrpyt bezpośrednio w kodzie HTML.
//    Jeżeli podepniemy nasz skrypt JS bądź będziemy pisać go w sekcji HEAD wówczas to co będziemy chcieli wyświetlić jako treść za pomocą document.write() zostanie wyświetlone na samym poczatku naszej strony.
//    Analogicznie jezeli podepniemy nasz skrypt JS bądź będziemy pisać go w przed znacznikiem </BODY> wówczas to co chcieliśmy wświetlić jako treść za pomocą document.write() zostanie wyświetlone na samym końcu naszej strony.
//
//    Przykład:

   document.write("Informacje ze skryptu bezpośrednio umieszczone jako treść na stronie WWW");

   // Przykład ze stylizacją:

   document.write("<p style='font-weight: bold'>");
   document.write("Oto moja strona WWW");
   document.write("</p>")

   // lub prościej:

   document.write("<p style='font-weight: bold'>Oto moja strona WWW</p>");

   // Jak widać jeżeli chcemy dokonać stylizacji informacji wyświetlanych za pomocą document.write() musimy tak umieścić nasz kod HTML jak powyżej.
   // Po prostu tak jakby każdą linijkę naszego elementu HTML z treścią musimy umieśić w document.write().
