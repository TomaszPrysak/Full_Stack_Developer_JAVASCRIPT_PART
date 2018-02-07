var car1 = {brand:"Fiat",
            model:"500",
            color:"red",
            weight:800,
            fullName:function(){
              return this.brand + " " + this.model
            }
          };

var test = Object.keys(car1); // tablica z kluczami jako elementami
document.getElementById('a').innerHTML = test; // a ponieważ podaliśmy nazwę tablicy to
console.log(test);

document.getElementById('b').innerHTML = car1.brand;
document.getElementById('c').innerHTML = car1.model;
document.getElementById('d').innerHTML = car1.color;
document.getElementById('e').innerHTML = car1.weight;
document.getElementById('f').innerHTML = car1.fullName;

car1.model = "Tipo";
document.getElementById('m').innerHTML = car1.model;

document.getElementById('g').innerHTML = car1.fullName();

car1.power = 50;
car1.weightWith4Person = function(){
  return this.weight + (4*80)
};
document.getElementById('h').innerHTML = Object.keys(car1);
document.getElementById('i').innerHTML = car1.power;
document.getElementById('j').innerHTML = car1.weightWith4Person;
document.getElementById('k').innerHTML = car1.weightWith4Person();

var text1 = "<ul>";
for (var key in car1){
  text1 += "<li>Do klucza: " + key + " przypisana jest wartość: " + car1[key] + "</li>";
}
text1 += "</ul>";
document.getElementById('l').innerHTML = text1;
