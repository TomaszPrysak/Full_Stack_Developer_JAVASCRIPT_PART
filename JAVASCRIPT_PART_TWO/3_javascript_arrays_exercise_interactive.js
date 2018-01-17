
var arrayLists = [];
var arrayListsLen = arrayLists.length;

function arrayLength(){
  if (arrayListsLen == 0) {
    var text = '<p class="text-center">Aktualnie Twoja lista jest pusta.</p><p class="text-center">Wykorzystaj menu poniżej do obsługi aplikacji.</p>'
    document.getElementById('tableContent').innerHTML = text;
  }
}

function display(){
  if (arrayListsLen > 0) {
    var text = '<p class="text-center">Twoja lista wygląda następująco:</p><table id="tableItem" class="table table-sm table-dark"><thead><tr><th scope="col">#</th><th scope="col">Item</th></tr></thead><tbody>';
    for (var i = 0; i < arrayLists.length; i++) {
      text += '<tr><th scope="row">' + (i + 1) + '</th>' + '<td>' + arrayLists[i] + '</td></tr>';
    }
    text += '</tbody></table>'
    document.getElementById('tableContent').innerHTML = text;
  }else {
    alert("Twoja lista jest pusta, więc nie mamy co wyświetlić")
  }
}

function hide(){
  if (arrayListsLen > 0) {
    document.getElementById('tableContent').innerHTML = '<p class="text-center">Twoja lista została ukryta. Użyj przycisku "display", aby ją ponownie wyśweitlić</p>';
  } else {
    alert("Twoja lista jest pusta, więc nie mamy co ukrywać");
  }
}

function add(){
  var x = document.getElementById('addItem').value
  if (x !== "") {
    arrayLists.push(x);
    alert("Dodano do listy następujący element: " + x)
    document.getElementById('addItem').value = "";
    arrayListsLen = arrayLists.length;
    display();
  }else {
    alert("Nie wprowadzono żadnej wartości do dodania, bądź wystąpił jakiś bład. Wprowadź wartość ponownie")
  }
}

function remove(){
  var x = document.getElementById('removeItem').value;
  if (x !== "") {
    for (var i = 0; i < arrayLists.length; i++) {
      if (arrayLists[i] == x) {
        arrayLists.splice(i,1);
        arrayListsLen = arrayLists.length;
        arrayLength();
        break;
      }
    }
    document.getElementById('removeItem').value = "";
    display();
  } else {
    alert("Nie wprowadzono żadnej wartości do usunięcia, bądź wystąpił jakiś bład. Wprowadź wartość ponownie")
  }
}
