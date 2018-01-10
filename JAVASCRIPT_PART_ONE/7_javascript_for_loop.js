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
