function introduction(){
	 txt = this.sound + "! Wabię się " + this.name;
	 return txt
};

var pies = {
						name:"Tina",
						age:2,
						color:"biało-brązowy",
						sound:"hau hau",
						speak:introduction
};

var kot = {
					 name:"Mruczek",
					 age:6,
					 color:"czarny",
					 sound:"miau miau",
					 speak:introduction
};

var keys1 = Object.keys(pies);
document.getElementById('a').innerHTML = keys1;

document.getElementById('b').innerHTML = introduction;

document.getElementById('d').innerHTML = pies.speak();
document.getElementById('e').innerHTML = kot.speak();

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

var skodaFelicia = new Auto("Skoda", "Felicia", 2001, 15000);

var keys2 = Object.keys(skodaFelicia);

document.getElementById('f').innerHTML = keys2;

paraKlucz = "<ul>"
for (var key in skodaFelicia){
	paraKlucz += "<li>Do klucza " + key + " przypisana jest wartość: " + skodaFelicia[key] + "</li>"
}
paraKlucz += "</ul>"
document.getElementById('g').innerHTML = paraKlucz;

document.getElementById('h').innerHTML = skodaFelicia.reklama();

var staraCenaNetto = skodaFelicia.cenaNetto;
var staraCenaBrutto = skodaFelicia.cenaBrutto();

skodaFelicia.zmianaCeny(10000);

document.getElementById('i').innerHTML = skodaFelicia.cenaNetto;
document.getElementById('k').innerHTML = staraCenaNetto;
document.getElementById('l').innerHTML = skodaFelicia.cenaBrutto();
document.getElementById('m').innerHTML = staraCenaBrutto;

skodaFelicia.nrSeryjny = "1111";
document.getElementById('n').innerHTML = skodaFelicia.nrSeryjny;

Auto.prototype.rabat = function(){
	return this.cenaBrutto() * 0.9
};

Auto.prototype.krajProdukcji = "Czechy";

document.getElementById('o').innerHTML = skodaFelicia.rabat();

document.getElementById('p').innerHTML = skodaFelicia.krajProdukcji;
