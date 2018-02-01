var car1 = {brand:"Fiat", model:"500", color:"red", weight:800}

var test = Object.keys(car1); // tablica z kluczami jako elementami
document.getElementById('a').innerHTML = test;

document.getElementById('b').innerHTML = car1.brand;
document.getElementById('c').innerHTML = car1.model;
document.getElementById('d').innerHTML = car1.color;
document.getElementById('e').innerHTML = car1.weight;
