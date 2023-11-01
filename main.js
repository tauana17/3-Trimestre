
function tocaSomPom(){
document.querySelector('#som_tecla_pom').play();
}
const listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador <listadeteclas.length){

    listadeteclas[0] .onclick = tocaSomPom;
    contador = contador + 1;

    console.log(contador);
}
