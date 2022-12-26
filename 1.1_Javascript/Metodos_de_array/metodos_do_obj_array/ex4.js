//reverse() - Inverte a ordem dos elementos de um array, altera o array existente

var arr = [1, 2, "a", "b"];
console.log(arr);

var a = arr.reverse();
console.log(a);

//shift() - Remove o primeiro elemento do array e retorna o valor que foi removido

var arr1 = [5, 7, 12];

var b = arr1.shift();//Retrona o primeiro elemento do array, e remove ele do array
console.log(b);
console.log(arr1);//Mostra o array sem o seu primeiro elemento