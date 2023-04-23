function calcularIMC(){
    var formulario = document.getElementById("formulario");

    /*Como o javascript está tratando os valores como string, é
    necessário utilizar o método parseInt() para transformar esses
    valores em number*/
    //Cria-se variáveis abaixo para receber os dados dos inputs (kilos, 
    //metros e centimetros) recebidos pelos atributos for dos labels.

    var kilos = parseInt(formulario.kilos.value); //Pega o valor do atributo for "kilos"
    var metros = parseInt(formulario.metros.value);
    var centimetros = parseInt(formulario.centimetros.value);

    //A fórmula abaixo calcula a altura
    var altura = (metros * 100 + centimetros) / 100;
    
    var imc = kilos / (altura * altura);
    /*Foi usado o método toFixed() para limitar o número de casas após a vírgula*/
    formulario.imc.value = imc.toFixed(2);

    if(imc <= 20){
        alert("Abaixo do peso!");
    } else if(imc > 20 && imc <= 25){
        alert("Peso ideal!");
    } else if(imc > 25 && imc <= 30){
        alert("Sobrepeso!");
    } else if(imc > 30 && imc <= 35){
        alert("Obesidade moderada!");
    } else if(imc > 35 && imc <= 40){
        alert("Obesidade severa!");
    } else if(imc > 40 && imc <= 50){
        alert("Obesidade mórbida!");
    } else{
        alert("Super obesidade!");
    }
}