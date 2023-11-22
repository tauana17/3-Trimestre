
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
const listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador <listadeteclas.length){
    const tecla = listadeteclas[contador];
    const instrumentos = tecla.classlist[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function () {
        tocaSom(idAudio)
    };
    contador = contador + 1;

    console.log(contador);
}
