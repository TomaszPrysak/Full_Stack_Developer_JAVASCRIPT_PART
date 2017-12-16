// Skrypt służy do przeliczania ciężaru z funtów na kologramy
// Wartość do przeliczenia podawana jest przez użytkownika

// Do zrealizowania tego wykorzystano polecenie prompt i jednocześnie wartość z niego zapisywana jest do zmiennej pounds
// Następnie tworzymy zmienną kolograms równą mnożeniu pounds * 0.454. Co oznacza, że dostajemy wartość przeliczoną
// W Następnym kroku za pomocą polecenia alert wyśweitlamy komunikat o wartości przeliczenia
// Na końcu w konsoli przeglądarki wyświetlany jest komunikta "Conversion Completed"

var pounds = prompt("Witaj w przeliczniku jednostek ciężaru.\nSłuży on do zamiany funtów (lbs) na kilogramy (kg).\nWprowadź ciężar w funtach:") // Wyśweitlanie okienkat do wprowadzania przez użytkownika i jednocześnie zapisywanie tej wartości do zmiennej pounds
var kilograms = pounds * 0.454 // Utworzenie zmiennej równej pomnożeniu pounds * 0.454
alert("Podany ciężar (" + pounds + " lbs) to " + kilograms + " kg") // Wyśweitlanie komunikatu o przeliczeniu
console.log("Conversion Completed") // Wyświetlenie komunikatu w konsoli przeglądarki
