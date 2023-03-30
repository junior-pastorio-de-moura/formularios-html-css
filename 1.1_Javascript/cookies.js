/*COOKIES - Quando você cria variáveis com javascritp, toda vez que a página web
é carregada as variáveis são destruídas. Os cookies são informações que ficam
armazenadas no computador dos usuários.
    Os cookies possuem uma série de restrições de segurança, eles armazenam poucas informações,
não se pode executar programas apartir dos cookies, etc.*/

//Acessando os cookies e gravando informações neles:

new Date().toGMTString();
document.cookie = "nome=valor; expires=data; path=/"; 

/*Pode ser colocado qualquer nome para eles, suporta no máximo
4kb de dados, pode ser armazenado apenas 20 cookies por domínio,
recebe um caminho de diretório(domínio), ou seja, estão vinculados
à página em que foram criados e por fim, possuem uma data de expiração
no formato internacional*/

function weiteCookie(nome, value, days){
    //Por default, não exite expiração, ou seja o cookie étemporário
    var expires = "";

    //Especifíca o número de dias para guardar o cookie
    if(days){
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    if(value != "" && value != null && value != "null"){
        //Define o cookie com o nome, valor e data de espiração
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function readCookia(name) {
    //Encontra o cookie especificado e retorna o seu valor
    var searchName = name + "=";
    var cookies = document.cookie.split(";");
    for(var i = 0; i < cookies.length; i++){
        var c = cookies[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1, c.length);
            if(c.indexOf(searchName) == 0)
                return c.substring(searchName.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name){
    //Exclui o cookie
    writeCookie(name, "", -1);
}

//min 08:13