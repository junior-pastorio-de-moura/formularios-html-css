let teclado = require('prompt-sync')();
let num = [], opc, z = true;

console.clear();

function menu(){
    console.log('=======================');
    console.log('======== MENU =========');
    console.log('1 - Soma; =============');
    console.log('2 - Divisão; ==========');
    console.log('3 - Subtração; ========');
    console.log('=======================');
}
function exibeNumerosDigitados(x,y){
    console.log('Números digitados: '+x+' '+y);
}
function soma(x, y){
    let resultado;
    //Envolver em parseInt para não concatenar
    resultado = parseInt(x)+ parseInt(y);
    return resultado;
}

function divisao(x,y){
    let resultado = x/y;
    return resultado;
}

function subtracao(x,y){
    let resultado = x-y;
    return resultado;
}

//Lendo 2 valores para o array num
for(let i = 0; i < 2; i++){
    console.log('Digite o '+(i+1)+'.o valor:');
    num[i] = teclado();
    console.clear();
}
while(z){
    menu();
    console.log('Escolha uma das opções do menu:');
    opc = teclado();
    if(opc == 1){
        console.clear();
        exibeNumerosDigitados(num[0], num[1]);
        console.log('Soma dos números digitados: '+soma(num[0], num[1]));
        z = false;
    } else if(opc == 2){
        console.clear();
        exibeNumerosDigitados(num[0], num[1]);
        console.log('Divisão dos números digitados: '+divisao(num[0], num[1]));
        z = false;
    } else if(opc == 3){
        console.clear();
        exibeNumerosDigitados(num[0], num[1]);
        console.log('Subtração dos números digitados: '+subtracao(num[0],num[1]));
        z = false;
    } else{
        console.clear();
        console.log('!!!!! ERRO !!!!!');
        console.log('Valor digitado não corresponde a nenhuma opção do menu, digite novamente...');
    }
}
/*Para esse código funcionar e ler dados no terminal instale as dependências (na pasta do projeto)
com os comandos: npm init -y e npm i prompt-sync*/
