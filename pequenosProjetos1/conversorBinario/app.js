function converter(num){
    var valor = parseInt(num);
    var bin = valor.toString(2);
    document.getElementById("resultado").innerText=bin;
}