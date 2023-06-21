function calculate(){
    var altura = (document.getElementById("altura").value)/100;
    var peso = document.getElementById("peso").value;
    var resultado;
    
    let imc = peso/altura**2;
    
    if(imc<18.5){
        //alert("Você está muito magro!");
        resultado = "Você está muito magro!";
    } else if(imc >= 18.5 && imc < 24.9){
        //alert("Você está no peso ideal!");
        resultado = "Você está no peso ideal!";
    } else if(imc >= 24.9 && imc < 29.9){
        //alert("Você está acima do peso!");
        resultado = "Você está acima do peso!"
    } else if(imc >= 29.9 && imc < 39.9){
        //alert("Você é obeso!");
        resultado = "Você é obeso!";
    } else if(imc >= 39.9){
        alert("Você está com obesidade mórbida!");
        resultado = "Você está com obesidade mórbida!";
    } else {
        alert("Erro!");
    }
    var textarea = document.getElementById("textarea").innerText=resultado;
}