//splice(arg1 [, arg2, arg3 ... argn]) - Insere e/ou remove elementos de um array

//1o argumento define a posição onde se iniciará a inserção ou remoção
//2o argumento define a quantidade de elemento a se remover
//3o argumento em diante define os elementos a serem inseridos

var arr = [2, 5, 9, 7, 1, 6, 8, 3, 10, 4];
console.log(arr);

var num1 = arr.splice(5);//Remove os elementos do array a partir do elemento de íncie 5
console.log(num1);

var arr2 = [2, 5, 9, 7, 1, 6, 8, 3, 10, 4];
var num2 = arr2.splice(3, 4);/*Mantém os 4 elementos subsequentes do elemento com índice 3 em diante*/
console.log(num2);


var arr3 = [2, 5, 9, 7, 1, 6, 8, 3, 10, 4];
var num3 = arr2.splice(5, 13, 13, 54, 32);
console.log(num3);

/*toString - Converte cada elemento do array em string e retorna uma lista de elementos separados por vírgula*/

var arr4 = [16, 7, 2, 23];

var num4 = arr4.toString();
console.log(num4);

/*unshift(args) - Insere elementos no início do array e retorna  a nova quantidade de elementos do array*/

var arr5 = [1, 2, "a", "b"];

console.log(arr5);

var num5 = arr5.unshift(2, 4, 9);
console.log(num5);