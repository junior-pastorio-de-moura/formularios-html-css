//MÉTODOS DO OBJETO ARRAY

var arr = [1, 2, "a", "b"];

//CONCAT - concat(arg1, arg2, ... argn)
/*Este método aplicado a um array lhe acrescenta os 
elementos definidos nos seus argumentos*/

var x1 = arr.concat(22, "Isadora", true); //Adiciona os elementos dentro dele no array
//Mostrando os valores
console.log(x1);
console.log(x1[5]);

//Mais isso pode ser feito de outra forma bem simples como abaixo

arr[7] = 12;//Adiciona um 7o elemento no array com o valor 12

//EVERY - every(função(elem, ind, obj) [,thisObjeto])

/*Percorre cada um dos elementos do array e executa uma função callback, 
quando a condição não é satisfeita ele retorna false, caso todos os
elementos do array satisfaça a função retorna true*/

var arr2 = [21, 3, 18, 290];

function funcaoUm(elem, ind, obj){
    return (typeof(elem == "number"));
}

var x = arr2.every(funcaoUm);
console.log(x);

//========================================

var arr3 = [21, 3, 18, 290, "a"];

function funcaoDois(elem, ind, obj){
    return (typeof elem == "number");
}

var y = arr3.every(funcaoDois);
console.log(y);

//FILTER - filter(função(elem, ind, obj) [,thisObjeto])
/*Filtra os elementos de um array e retorna esse array
após a aplicação do filtro sem alterar o array original.*/

var arr4 = [21, 3 , 18, "a", 290, "b", 7];

function filtrarArray(elem, ind, obj){
    return (elem >= 18);
}
/*A função acima retorna todos os elementos maiores ou
iguais a 18, ou seja, não todos os elementos do array.*/

console.log(arr4.filter(filtrarArray)); //Cria um outro array com esses elementos

//VEJA OUTRO EXEMPLO


var arr5 = [21, 3 , 18, "a", 290, "b", 7];

function filtrarArray2(elem, ind, obj){
    return (typeof elem == "string");
}
console.log(arr5.filter(filtrarArray2)); //Cria um array com apenas as strings do array anterior

//Exibindo apenas os 4 primeiros elementos do array

var arr6 = [21, 3 , 18, "a", 290, "b", 7];

function filtrarArray3(elem, ind, obj){
    return (ind < 4);
}
console.log(arr6.filter(filtrarArray3)); 