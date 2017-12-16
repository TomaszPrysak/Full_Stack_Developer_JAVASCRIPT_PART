// Komentarze w plikach JS są umieszczane po dwukrotnym ukośniku (//)

// Kod JavaScript czy to w zewnętrznym pliku, czy to pisany w HTML, jest wykonywany jako pierwszy podczas ładowania strony. Kod HTML i CSS jest wykonywany później.
// Więc nie ma znaczenia jakie formatowanie strony przyjmiemy i tak na początku wykonywany jest kod JavaScript. Więc jeżeli zastosujemy wyświetlenie jakiegoś alertu to pojawi się on na tle białej, pustej strony.

alert("Welcome to your Bank!") // Wyświetlenie alertu powitalnego
var deposit = prompt("How much would you like to deposit today ?") // Poproszenie użytkownika o podanie pewnej wartości i przypisanie jej do zmiennej
alert("You've deposited: " + deposit) // Kolejne wyśweitlenie alertu z informacją o wartości jaką podał użytkownik
console.log("You are a coll person!") // Wyświetlenie tekstu na konsoli przeglądarki. Zobaczymy ten tekst dopiero jak otworymy konsolę.
