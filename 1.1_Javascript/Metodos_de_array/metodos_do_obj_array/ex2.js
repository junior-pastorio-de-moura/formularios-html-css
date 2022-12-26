//indexOf(elemento, [arg2, true ou false]) - Retorna o índice do elemento de um array
//Retorna o índice do elemento do arrei, se o valor não existir ele retorna -1
var arr = [1, 2, "a", "b", "2", "c", 1, "a", "45"];

var a = arr.indexOf("b");
var b = arr.indexOf("a");
var c = arr.indexOf(23);
var d = arr.indexOf(2);
var e = arr.indexOf(45);

console.log(a, b, c, d, e);

var f = arr.indexOf(1, 2);//Procura o valor 1 a partir do índice 2 e retorna o índice desse valor.

console.log(f);

/*Esse método admite um terceiro argumento, que pode ser true ou false, 
quando o valro é true ele faz a busca sem diferenciar o tipo de dado*/

var g = arr.indexOf(45);//Retorna -1 pois não existe o num 45 no array
var h = arr.indexOf(45, 0, true);//Retorna o índice 8 pois não diferencia tipo de dado

console.log(h);

//lastIndexOf(elemento, [arg2, true ou false])
/*Semelhante ao método anterior, porém retorna o último índice
do elemento procurado*/

var i = arr.indexOf("a");
var j = arr.lastIndexOf("a");

console.log(i, j);

//join([arg]) - Transforma os elementos de um array em uma string

var k = arr.join();
var l = arr.join("-");
var m = arr.join("*");

console.log(k,"\n", l,"\n", m);

//map(função(elem, ind, obj) [,thisObjeto]) 
/*Percorre cada um dos elementos do array e modificá-lo conforme uma
função callback.*/

var arr1 = [21, 3, 18, 290];

//Abaixo, função callback
function funcaoUm(elem, ind, obj){
    return (elem = elem * 10);
}
var x = arr1.map(funcaoUm);
console.log(x);

//pop() - Remove o último elemento do array e retorna o valor que foi removido

var n = arr1.pop();
console.log(n);//Retorna 290
console.log(arr1); //Para visualizar o array com 1 elemento a menos

//push(arg1, arg2, ... argn)

var o = arr1.push("Álgebra", 144.8);//Retrona o número de elementros do array
console.log(o);
console.log(arr1);