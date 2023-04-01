function validar(){
    var formulario = document.getElementById("formulario");
    var cpf = formulario.cpf;
    var email = formulario.email;

    //Expressões regulares para email e cpf
    var re_email = /^([\w-]+(\.[\w-]+)*)\@(( [\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$\i/;
    var re_cpf = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;

    //Validação do CPF
    if(re_cpf.test(cpf.value)){
        //Formatando o cpf
        cpf.value = cpf.value.replace(re_cpf, "$1.$2.$3-$4");
        alert("CPF válido");
    } else{
        alert("CPF deve ter apenas 11 números sem ponto ou traços");
    }

    //Verificando se o email é inválido !
    if(re_email.test(email.value)){
        alert("Email inválido");
    } else{
        alert("Email válido");
    }
}