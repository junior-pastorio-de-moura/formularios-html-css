window.onload = function () {
    var btn = document.getElementById("botao");

    btn.onclick = function(e){
        //alert("botao");
        //A linha abaixo tem o mesmo efeito da linha acima
        alert(this.id);
    }

    document.getElementById("texto").onblur = function(e){
        alert(this.id);
        alert(this.value);
    }

    //Disparando um evento direto via javascript
    btn.onclick = function(e){
        document.getElementById("texto").onblur();
        document.getElementById("texto").focus();
    }
}