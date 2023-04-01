/*
Script para a localização de poltronas disponíveis no cinema.
*/
//Função que chama todas as funções usadas no script quando a página é carregada
window.onload = function(){
    carregarPoltronas();
}

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas(){
    var imagens = document.getElementsByTagName("img");

    for (let i = 0; i < imagens.length; i++) {
        if (poltronas[i] == true) {
            imagens[i].src = "./poltrona1.png"; //atributo que repesenta a poltrona disponível
        } else{
            imagens[i].src = "./poltrona2.png";
        }        
    }
}

function selecionarPoltrona() {
    var imagens = document.getElementsByTagName("img");
    for (let i = 0; i < poltronas.length; i++) {
        if (poltronas[i] == true) {
            imagens[i].src = "./selecionada.png";
            var quer = confirm("Você quer esta Poltrona?");
            if (quer == true) {
                break;   
            } else{
                imagens[i].src = "./poltrona2.png";
            }
        }
    }
}

function selecionarCasal(){
    var imagens = document.getElementsByTagName("img");
    for (let i = 0; i < poltronas.length; i++) {
        if (poltronas[i] == true && poltronas[i + 1] == true) {

            imagens[i].src = "./selecionada.png";
            imagens[i+1].src = "./selecionada.png";

            var quer = confirm("Você quer esta Poltrona?");
            if (quer == true) {
                break;   
            } else{
                imagens[i].src = "./poltrona2.png";
                imagens[i+1].src = "./poltrona2.png";
            }
        }
    }
}