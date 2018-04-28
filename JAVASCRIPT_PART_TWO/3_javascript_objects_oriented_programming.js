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

function Auto(marka, model, rocznik){
	this.marka = marka;
	this.model = model;
	this.rocznik = rocznik;
}
