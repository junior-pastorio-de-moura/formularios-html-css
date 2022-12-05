/*
Exercício 3:
O usuário deve escolher a quantidade de números que deseja digitar, e o programa
irá pedir esses números, recebe-los e elevá-los aos quadrado, subtrair por 4 e mostrar
no console os resultados.
*/
i = prompt("Quantos valores você que digitar para essa operação? ")
let u = --i;
let x = [u], result = [u];

for (let i = 0; i <= u; i++) {
    x[i] = prompt("Digite um valor para x: ")
result[i] = (x[i] * x[i]) - 4;    
}

for (let i = 0; i <= u; i++) {
    let x = 1;
    console.log("O "+x+".o valor que você digitou ao quadrado é "+result[i])
    x++;
}

