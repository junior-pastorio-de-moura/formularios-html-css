//reduce(função(v1, v2, ind, arr) [,vInicial])
/*Percorre cada um dos elementos do array e executa uma função callback.*/

var arr = [1, 4, 7, 15];

funcaoUm = function(v1, v2, ind, arr){
    return v1 + v2;
}
var x = arr.reduce(funcaoUm);
console.log(x);
//O resultado final é a soma dos elementos do array

//Outro exemplo

funcaoDois = function(v1, v2, ind, arr){
    return v1 + v2;
}
var y = arr.reduce(funcaoDois, 100);//Inicia com v1 valendo 100
console.log(y);

funcaoTres = function(v1, v2, ind, arr){
    return v1 * v2;
}

/*Se na função callback for colocado soma, ele soma todos os elementos do array*/

var z = arr.reduce(funcaoTres);
console.log(z);

//reduceRight(função(v1, v2, ind, arr) [,vInicial])
/*Semelhante à função anterior, porém percorre o array
do último para o primeiro elemento*/

var a = arr.reduceRight(funcaoTres);
console.log(a);