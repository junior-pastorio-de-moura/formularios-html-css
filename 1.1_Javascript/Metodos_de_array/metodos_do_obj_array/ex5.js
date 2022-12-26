//slice(arg1 [,arg2]) - Esse método retorna um subarray do array
//arg1 = índice inicial de extração
var arr = [1, 2, 3, 4, "a", "b", "c"];

var a = arr.slice(2, 5);
console.log(a);

var b = arr.slice(3);//Do terceiro índice até o último
console.log(b);

var c = arr.slice(-5, 6);
console.log(c);

var d = arr.slice(-6, -4);
console.log(d);

/*some(função(elen, ind, obj) [,thisObjeto]) - Percorre cada um dos elementos de um array
e executa uma função callback. Quando encontra um elemento que satisfaça as condições impostas
no corpo da função, retorna true, caro contrário retorna false.*/

var arr2 = [21, 3, 18, "a", 290];

function funcaoUm(elem, ind, obj){
    return (typeof elem == "string");
}

var x = arr2.some(funcaoUm);
console.log(x); //Retorna true, pois existe pelo menos um elemento string no array

/*sort([função]) - Deixa os elementos de um array ordenados, por padrão, coloca os elementos
em ordem alfabética.*/

var arr3 = ["morango", "banana", "pêsego", "abacate", "abacaxi", "cereja", "mamão", "amora"];

var y = arr3.sort();
console.log(y);

var arr4 = [44, 14, 12, 15, 21, 22];
var e = arr4.sort();
console.log(e);

var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var f = arr5.sort();
console.log(f);

/*Utilizando o método sort para colocar em ordem numéria crescente o array abaixo:*/
//Colocando os elementos do array em ordem crescente
var arr6 = [2, 128, -32, 47, 34, 111, -67];

var g = arr6.sort(function(a,b){
    return a-b;
});
console.log(g);