let count = 1;
var elemento = document.getElementById("index-1");

console.log(elemento);
function Proximo() {

  document.getElementById("index-" + count).classList.remove("selecionado");
  nextImage();
  document.getElementById("index-" + count).classList.toggle("selecionado");
}
function nextImage(){
    count++;
    if(count > 3){
        count=1;
    }
}

function Anterior() {

    document.getElementById("index-" + count).classList.remove("selecionado");
    previousImage();
    document.getElementById("index-" + count).classList.toggle("selecionado");
  }
  function previousImage(){
      count--;
      if(count < 1){
          count=3;
      }
  }