
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
const listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador <listadeteclas.length; contador++) {

}


    const tecla = listadeteclas[contador];
    const instrumentos = tecla.classlist[1];
    const idAudio = `#som_${instrumento}`; //template string
    console.log(idAudio)

    tecla.onclick = function () {
        tocaSom(idAudio)
    };
    
tecla.onkeydown = function (evento) {
    console.log(evento.code =='space')
    if (evento.code =='space'){
        tecla.classList.add('ativa'); 
    }
    
}

 tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
 }