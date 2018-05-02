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
var car = {
						 brand:"Fiat",
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
// W związku z tym, że w obiektach nie ma konkretnej kolejności par "klucz:wartość" w związku z tym nie dodajemu tutaj obiektów na początku, na końcu czy gdzieś w środku. Tak jak ma to miejsce w tablicach.
// Nową parę "klucz:wartość" do obiektu dodajemy w ten sposób, że najpierw podajemy nazwę obiektu, a następnie po kropce podajemy nazwę klucza i po znaku równa się wartość temu kluczowi przypisaną.
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
  console.log("Do klucza: "key + " przypisana jest wartość: " + car1[key]);
}

// UWAGA ! W przypadku interowania za pomocą pętli for/in aby mieć dostęp do wartości przypisanej do klucza obiektu musimy odwołać się do niego za pomocą nazwy obiektu i nawiasu kwadratowego:
//         objectName[key].
//         W pętli nie możemy używać odwołania się do wartości poprzez notację kropkową, objectName.key - NIE zadziała w pętli. Ponieważ jest tutaj problem ze zmienną pomocniczą.

// Iterować możemy również za pomocą pętli for/each.
// Aby więcej o tym się dowiedzieć, poszukaj w internecie.

//////////////////////////////
// 7. PROGRAMOWANIE OBIEKTOWE
//////////////////////////////
// Do tej pory tworzyliśmy obiekty z odpowiednimi parami klucz:wartość.
// Następnie dodawaliśmy nowe pary klucz:wartość jak i modyfikowaliśmy wartości już przypisane kluczom.
// Nauczyliśmy się, również tworzyć funkcje bezpośrednio w obiekcie bądź po późniejszym stworzeniu pary klucz:metoda.
// Właśnie funkcje wykorzystujące obiekty nazywane są metodami.
// Teraz czas na programowanie obiektowe.

// 7.1 Słówko kluczowe "this"
// Słowo kluczewego "this" mozna używać w treści metody, aby odwołać sie do obiektu, przez który metoda ta jest właśnie wywoływana.
// Daje nam to możliwość tworzenia uniwersalnych metod, które będą działać dla każdego bliźniaczego obiektu który stworzymy. Zawierającego ten sam klucz, ktory będzie wymagany przez metode.
// Nie będziemy musieli podawać nazwy obiektu tylko odwołamy się do niego poprzez "this"
// Wykorzystanie słówka kluczowego "this" w definicji takiej uniwersalnej metody jest następujące:

function metdhodName(){
	console.log(this.key1 + " lorem impsum " + this.key2);
}

// Powyższa definicja metody spowoduje, że niezależnie przez jaki obiekt zostanie ona wywołana, wówczas wyświetli w konsoli przeglądarki wartości tego obiektu przypisane do kluczy "key1" oraz "key2".
// Oczywiście obiekt taki musi zawierać klucze użyte w definicji metody. Wiadomo równiez, że powyższy to jest przykład. Możemy na rózny sposób wykorzystywać klucze z obiektów.
// Nastepnie musimy taką metodę dodać do obiektu jako nową parę "klucz:metoda". Bądź podczas tworzenia obiektu od razu zdefiniować taką parę "klucz:metoda".
// Na początku jeżeli stworzyliśmy obiekty a później chcemy dodać metodę to tylko zrobimy to poprzez nową parę "klucz:metoda".
// Minus takiego dodawania jest taki, że jeżeli mamy już duzo obiektów tego samego typu to musielibyśmy do każdego dodać nową parę "klucz:metoda" z interesującą nas metodą.
// Aby tego uniknąc póxniej poznamy konstruktory do tworzenia obiektów.

// Przykład wykorzystania.
// Mamy dwa obiekty, opisujące zwierzęta:

var pies = {
						name:"Tina",
						age:2,
						color:"biało-brązowy",
						sound:"hau hau"
}

var kot = {
					 name:"Mruczek",
					 age:6,
					 color:"czarny",
					 sounr:"miau miau"
}

// Następnie tworzymy uiwersalną metodę która może być wykorzystywana przez obydwa obiekty:

function introdaction(){
	console.log(this.sound "! Wabię się " + this.name);
}

// Teraz dodajemy tą metodę do obu obiektów:

pies.speak = introdaction;
kot.speak = introdaction;

// UWAGA ! Powyższy przykład tworzenia obiektów i dodawania do nich metody jest poprawny jednak nie ekonomiczy.
//				 Ponieważ najpierw tworzymy obiekt, później tworzymy metodę a na końcu dodajemy nową parę klucz:metoda do obiektu.
//				 Lepszą praktyką (poza używaniem konstruktorów) jest stworzenie metody na początku, a nastepnie podczas definiowania obiektu umieścić paprę klucz:metoda.
//				 Para ta będzie sie odwoływać do metody stworzonej na początku
//				 Jest to ekonomiczniej bo nie musimy dodawać do już stworzonego obiektu nowej pary klucz:metoda

var pies = {
						name:"Tina",
						age:2,
						color:"biało-brązowy",
						sound:"hau hau"
}

var kot = {
					 name:"Mruczek",
					 age:6,
					 color:"czarny",
					 sounr:"miau miau"
}

// Najpierw tworzymy metodę ktorą będzieny używać w naszych obiektach

function introdaction(){
	console.log(this.sound "! Wabię się " + this.name);
}

// Wywołanie metody:

pies.speak();
kot.speak();

// Następnie definiując nasze obiekty od razu tworzymy parę klucz:metoda w której odwołujemy się do metody zewnętrznej, czyli tej co wcześniej stworzyliśmy.

var pies = {
						name:"Tina",
						age:2,
						color:"biało-brązowy",
						sound:"hau hau",
						speak:introdaction
}

var kot = {
					 name:"Mruczek",
					 age:6,
					 color:"czarny",
					 sounr:"miau miau",
					 speak:introdaction
}

// Wywołanie metody nastąpuje w taki sam sposób jak w pierwszym sposobie:

pies.speak();
kot.speak();

// W powyższym przykładzie funkcja "introduction" powoduje wyświetlanie komunikatu zawierającego rodzaj dźwięku (this.sound) jaki zwierze wydaje oraz jego imienia (this.name).
// Użycie słowa kluczowego "this" powoduje, że imie i dźwięk wydawany prez zwierze dotyczy tego obiektu na ktorym wywołujemy metodę.
// Gdy wywołujemy tą metodę pies.speak() z obiektu pies to pobiera ona dwie  dwiw właściwości: this.sound(czyli: "hau hau") i this.name (czyli: "Tina").
// Tej samej funkcji "speak" możemy używac jako metody również w innych obiektach. Np własnie w drugim naszym obiekcie "kot"
// Powyzsze powoduje, że metody są współdzielone przez wiele obiektów tego samego typu.

// 7.2 Tworzenie obiektów za pomocą konstruktorów
// Tworząc obiekty w ten sposób, że za każdym razem definiujemy ich pary klucz:wartość/metod jest całkowicie poprawne.
// Jednak jest ono nieefektowne jeżeli mamy takich obiektów stworzyć bardzo dużo.
// Powtarzanie za każdym razem pełnej definicji obiektu jest żmudne szczególnie jeżeli mamy tworzy wiele obiektów tego samego typu.

// Aby uniknąć pisania za każdym razem całej definicji obiektu z pomocą przychodzą nam konstruktory.
// Konstruktor to taka funkcja, forma, szablon który definiujemy tylko raz i odpowiada strukturze obiektu który bedziemy chcieli za pomocą niego tworzyć.
// Po jego skonfigurowaniu możemy tworzyć dowolną ilość tych samych obiektów o podobnych podstawowych właściwościach.

// Konstrukcja konstruktora jest bardzo podobna do funkcji.
// Po słowie "function" nastepuje nazwa konstruktora a następnie w nawiasie argumenty które będziemy przekazwyać do niego, tworząc nowy obiekt.
// Argumenty te będą odpowiadać wartością jakie będą przypisane kluczom wystepującym w konstruktorze. Tak jakbyśmy sami definiowali

// Należy zwrócic uwage, że w definicji konstruktora są znaki "=" pomiędzy kluczami a wartościami/metodami.
// Natomiast definiując nowy obiekt bez konstruktora to są znaki ":" pomiędzy kluczami a wartościami/metodami.

// Budowa konstruktora:

function ConstructorsName(arg1, arg2, arg3, arg4="xxx"){
	this.key1 = arg1;
	this.key2 = arg2;
	this.key3 = arg3;
	this.key4 = arg4;
	this.key5 = (this.key2 * this.key3) / this.key4;
	this.keyFunction1 = function(){
		return this.key1 + " " + this.key2
	};
	this.changeKey1 = function(newKey1Value){
		this.key1 = newKey1Value;
	}
}

// UWAGA !!!

// Podczas definiowania konstruktora musi on zawierać wszystkiej pary klucz:wartość jakie chcemy aby konstruktor posiadał
// Nie mam możliwości dodawania nowej pary klucz:wartość do już stworzonego konstruktora tak jak ma to miejsce w przypadku dodawania takiej pary do już istniejącego obiektu.
// A więc taki zapis jet błędny !!!!!!:

ConstructorsName.newKey = "something"; // ZAPIS BŁĘDNY

// Powyższe tyczy się rownież par klucz:metoda.
// Aby konstruktor zawierał jakaś metodę (zwracajacą jakąs wartość bądź coś obliczającą, nieważne)
// to definicja tej metody musi być zdefiniowana razem z konstruktorem.
// Nie można dodawać pary klucz:metoda do już istniejącego konstruktora tak jak ma to miejsce w przypadku dodawania takiej pary do już istniejącego obiektu.
// A więc taki zapis jest błędny !!!!:

ConstructorsName.newkeyFunction = function(){ // ZAPIS BŁĘDNY
	return this.newkeyFunction " smoething" // ZAPIS BŁĘDNY
} // ZAPIS BŁĘDNY

// Natomiast powyższe nie ma zastosowania, jeżeli obiekt jakiś obiekt już stworzymy.
// Wówczas TYLKO do tego jednego obiektu mamy możliwość dodania nowej pary klucz:wartość jak i klucz:metoda.
// Dokonujemy tego tak jak wcześniej się uczylismy w rozdziałach: 4 i 5.

// Ponieważ konstruktor to funkcja wiec możemy go tworzyć tak jak powyżej lub zapis drugi:

var ConstructorsName = function(arg1, arg2, arg3, arg4="xxx"){
	...
}

// Każde wywłanie konstruktora skutkuje utworzeniem obiektu z wbudowanymi właściwościami. Żeby wywołać normalną funkcję a za nią parę nawiasów, z argumentem bądź bez.
// W przypadku wywołania konstruktora przy tworzeniu nowego obiektu jest nastepująca składnia:

var newObject1 = new ConstructorsName(arg1, arg2, arg3, arg4); // w tym wypadku nadpisujemy wartość arg1
var newObject2 = new ConstructorsName(arg1, arg2, arg3); // w tym wypadku wartość arg4 jest domyślna

// Po prostu "new" oznacza, chcemy funkcji użyć jako konstruktora.
// Słówko kluczowe "new" i nazwa konstrukora oznacza, że tworzymy nowy obiekt z użyciem danego konstruktora.

// BARDZO WAŻNE !
// W przypadku konstruktorów bardzo ważne jest słówko "this".
// Ma ono zastosowanie bardzo podobne jak w przypadku metod.
// Tutaj właśnie powoduje ono, że nasz konstruktor jest uniwersalny.
// Tworząc nowy obiekt słówko "this" zawsze bedzie przypisywać do klucza wartość argumentu jaki podamy przy danym nowo tworzonym obiekcie.
// Za każdym razem słówko to będzie przypisywać do klucza wartości z aktualnie tworzonego obiektu.

// OGÓLNIE "THIS" ODNOSI SIĘ ZAWSZE DO OBIEKTU KTÓRY WYWOŁUJE POLECENIE ZAWIERAJĄCE "THIS".

// Przykład tworzenia obiektów z wykorzystaniem konstruktorów.
// Stworzymy konstruktor do obiketow typu auto.

function Auto(marka, model, rocznik, cenaNetto){
	this.marka = marka;
	this.model = model;
	this.rocznik = rocznik;
	this.cenaNetto = cenaNetto;
	// this.cenaBrutto = this.cenaNetto * 1.23;
	this.cenaBrutto = function(){
		return this.cenaNetto * 1.23
	};
	this.reklama = function(){
		return this.marka + " " + this.model + " z rocznika " + this.rocznik + " kosztuje " + this.cenaNetto + " zł netto a brutto " + this.cenaBrutto + " zł";
	};
	this.zmianaCeny = function(nowaCenaNetto){
		this.cenaNetto = nowaCenaNetto;
	};
}

// Teraz stworzymy dwa obiekty typu auto:

var skodaFelicia = new Auto("Skoda", "Felicia", 2001, 15000);

// 7.3 Propotypy
// W poprzednim rozdziale się nauczylismy, że do stworzonego już konstruktora nie możemy dodawać nowych par klucz:wartość oraz klucz:metoda.
// W JavaScript wszystkie obiekty dziedziczą wartości i metody od prototypów.
// Prototypy JavaScript ułatwiają współdzielnie metod, wartości przez rózne obiekty.
// Wszystkie konstruktory (zarówno te standardowe będące z góry w JavaScript jak i te które sami stworzylismy) maja właściwość "prototype".
// Poprzez tą właściwość możemy dodawać metode bądź wartość do konstrutkora która będzie współdzielona przez obikety stworzone przez ten konstruktor.

// Składnia dodawania metody bądź wartości do właściwości "prototype":

ConstructorsName.prototype.newFunction = function(){
	// code of function
}

ConstructorsName.prototype.newKey = "string";

// Przykład z wykorzystaniem konstrukotra Auto z poprzedniego podrozdziału:
Auto.prototype.rabat = function(){
	return this.cenaBrutto() * 0.9
};

Auto.prototype.krajProdukcji = "Czechy";
