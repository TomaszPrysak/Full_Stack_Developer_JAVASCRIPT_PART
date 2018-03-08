var pies = {
						name:"Tina",
						age:2,
						color:"biało-brązowy",
						sound:"hau hau"
};

var kot = {
					 name:"Mruczek",
					 age:6,
					 color:"czarny",
					 sound:"miau miau"
};

function introduction(){
	 return this.sound + "! Wabię się " + this.name
};

var keys1 = Object.keys(pies);
document.getElementById('a').innerHTML = keys1;

document.getElementById('b').innerHTML = introduction;

pies.speak = introduction;
kot.speak = introduction;
document.getElementById('d').innerHTML = pies.speak();
document.getElementById('e').innerHTML = kot.speak();
