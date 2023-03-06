//STRIGN

var x = new String("Texto dentro de texto de aspas");

console.log(x);
//document.writeln(x);

//length() - Retrona o tamanho da string
console.log(x.length);

//charAt() - Retorna um caractere na posição especificada

console.log(x.charAt(6));
console.log(x.charAt(x.length -1)); //Retrona a última string
console.log(x.charCodeAt(x.length -1)); //Retrona o valor unicode da última string

//concat() - Concatena strings
console.log(x.concat(" JavaScript"));

//fromCharCode() - Mostra a string do código
console.log(String.fromCharCode(115, 123, 234));

//indexOf() - Retrona  a posição do vetor de caracteres(string) que começa determinada string
console.log(x.indexOf("de"));

//lastIndexOf() - Retorna a posição da última ocorrência de determinada string
console.log(x.lastIndexOf("texto"));

//match() - Mostra as ocorrências para uma expressão regular
var re = /[a-c]/; //Variáve re recebe uma expressão regular no valor x.
console.log(x.match(re));

/*replace() - Altera a string, primeiro parêmetro define a string que você deseja alterar,
já o segundo parâmetro define-se a nova strgin que substituirá a anterior.
*/
console.log(x.replace("texto", "txt")); //É case sensitive, portanto "Texto" é diferente de "texto".

//document.write(x.substring(5,8) + "<br>");
//document.write(x.substr(5,8) + "<br>");
//document.write(x.slice(5,8) + "<br>");

//.split("/");

console.log(x.split(",")[1]);


//toLowerCase() e toUpperCase() - Deixam o texto todo em maiúsculo ou minúsculo.
var texto = "palavras escritas";

alert(texto.toUpperCase());

var texto2 = texto.toUpperCase();

console.log(texto2);

texto2 = texto.toLocaleLowerCase();
console.log(texto2);