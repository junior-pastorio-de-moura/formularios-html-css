/*
EXPRESSÕES REGULARES - São formas de definir um padrão para realizar pesquisas ou subistituição
de conteúdos e são independentes de qualquer linguagem de programação. O javascript possui um
objeto para manipular expressões regulares.
*/

var regex = new RegExp("javascript");
var string = "javascript";

console.log(regex.test(string)); //Verifica se a variável string possui a expressão "javascript"

//test() - Avalia se o padrão no objeto ergex aconteceu ou não.


//Outra forma para criar uma expressão regular(forma literal):
var string2 = "Programação";
var regex2 = /programação/i;
console.log(regex2.test(string2));

/*
O objeto RegExp possui outro parâmetro que são os modificadores, no caso acima a letra i no final da linha 17,
esse modificador (i) faz com que o objeto ignore letras maiúsculas e minúsculas.
*/
//Fazendo de forma direta:
//let string3 = prompt("Digite uma palavra qualquer: ");
//console.log(/gaming/i.test(string3));

//exec() - Retorna a primeira ocorrência de conteúdo da string que atende a expressão regular

console.log(/doce/i.exec("Qual é o Doce mais doce do que o doce?"));
//Acima a função exec retorna true ao encontrar a primeira ocorrência da palavra "doce".

//match() - Retorna todas as referências que bateram com o padrão
var str = "Qual é o Doce mais doce do que o doce?";
console.log(str.match(/doce/ig));

//METACARACTERES

console.log(/./.test("Pier21"));
/*O metacaractere "." encontra a ocorrência de qualquer caractere ou letra*/

//O metacaractere "\w" procura por qualquer caractere de a-z de 0-9 e _
console.log(/\w/.test("Pier21"));

//O metacaractere "\s" procura pela ocorrência de espaços na string
console.log(/\s/.test("Pier 21"));

//O metacaractere "\d" procura por dígitos(número).
console.log(/\d/.test("Pier"));

//O metacaractere "^" indica a ocorrência de uma determinada informação no início de uma string.
console.log(/^21/.test("Pier21"));


//O metacaractere "$" indica a ocorrência de uma determinada informação no final de uma string.
console.log(/21$/.test("Pier21"));


//VEJA ALGUNS EXEMPLOS DE CONBINAÇÕES DE METACARACTERES

//A expressão abaixo verifica a ocorrência de dígitos no final da string.
console.log(/\d$/.test("Pier21"));

//A expressão abaixo verifica a ocorrência de DOIS dígitos no final da string.
console.log(/\d\d$/.test("Pier21"));


//Padrão para encontrar CEP
console.log(/^\d\d\d\d\d-\d\d\d$/.test("70204-070"));

//Padrão para encontrar CPF
console.log(/^\d\d\d.\d\d\d.\d\d\d-\d\d$/.test("078.194.455-77"));


//QUANTIFICADORES
console.log(/\d*/.test("Pire"));//Procura entre 0 ou mais ocorrências de dígitos - Retorna verdadeiro
console.log(/\d+/.test("Pire"));//Procura entre 1 ou mais ocorrências de dígitos - Retorna falso
console.log(/\d?/.test("Pire"));//Procura entre 0 ou 1 ocorrência de dígito
console.log(/\d{2}/.test("1"));//Com esse método pode ser pesquisado entre uma quantidade específica de vezes.
console.log(/\d{3}$/.test("Pire4389"));//Busca por 3 ou mais dígitos no final da string
console.log(/\d[2-5]$/.test("Pire4389"));//Busca por uma string que tenha entre 2 a 5 dígitos no final

//Com isso podemos reescrever os padrões de CEP e CPF de uma forma mais otimizada:

//Padrão para encontrar CEP
console.log(/^\d{5}-\d{3}$/.test("70204-070"));

//Padrão para encontrar CPF
console.log(/^\d{3}.\d{3}.\d{3}-\d{2}$/.test("078.194.455-77"));

//Validação para datas
console.log(/^\d{2}\/\d{2}\/\d{2,4}$/.test("15/12/2020"));

//Expressão regular que avalie um email
// \w - Indica a aparência de letras
console.log(/\w+@\w+\.\w{2,3}/.test("joao@dasilva.com"));
/*A expressão espera uma string com pelo menos uma letra antes do "@" e logo após,
espera se pelomenos uma letra antes do caractere "." no email, e depois do caractere
"." ele exigem entre duas(2) ou três(3) letras (\w{2,3}) para o final da string email.
*/

//CARACTERES OPCIONAIS EM UMA STRING

//Teste para a ocorrência das duas palavras seguintes: cau ceu
/* [] - Agrupa letras: Se a palavra digitada começar com c (/c), terminar
com u (u/) e sua segunda letra for "a" ou "e" vai ser validado o teste.
*/
console.log(/c[ae]u/.test("cau"));

console.log(/\d[\d\,]*/.test("23,45"));
/*
A expressão acima indica de pode se ter ou dígitos (\d) ou
vírgulas (\,) na expressão: [\d,\,]*.
*/

//BUSCAS E SUBSTITUIÇÕES

var str2 = "Qual é o Doce mais doce que o doce?";
console.log(str2);
console.log(str2.match(/doce/ig));
console.log(str2.replace(/doce/ig, "docinho"));

//match = Retorna todas as ocorrências do que foi especificado
//replace = Substitui conteúdo
/*ig = Especifica que tanto faz digitar letras maiúsculas e minúsculas (i)
e faz uma pesquisa em toda a string (g)*/


str2 = "O rato roeu a roupa do rei de Roma";
console.log(str2.replace(/r/ig, "l"));
console.log(str2.match(/r[a-z]/ig));
console.log(str2.replace(/r[a-z]/ig, "XXX"));


var url = "www.xti.com.br/clientes-2023.html";

/*Deve-se ser realisado a troca da url acima pela seguinte:
    http://www.xti.com.br/2023/clientes.jsp
*/
var re = /www.xti.com.br\/\w{2,}-\d{4}.html/;
//Acima temos uma expressão regular que recupera qualquer página contida no "www.xti.com.br"
console.log(re.test(url));

/*Pode ser guardado em variáveis partes das expessões regulares para serem
posteriormente utilizadas com o método .repleace() utilizando parênteses.*/
var re = /(www.xti.com.br)\/(\w{2,})-(\d{4}).html/;
console.log(url.replace(re, "http://$1/$3/$2.jsp"));

//Com $1 ele pega os elementos do primeiro parênteses que aparece na expressão regular.
