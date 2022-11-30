let = familia = [4];
let x = 0;
for (let i = 1; i <= 5; i++) {
    familia[x] = prompt("Digie o "+i+".o valor: ")
    x++
}
x = 0;
console.log("Os valores que você digitou são:\n")
for (let i = 1; i <= 5; i++) {
    console.log(familia[x])
    x++
}
/*
Neste código eu crio uma array com 4 posições onde o usuário vai inserir os valores
para as posições desse array e depois será mostrado no console os valores digitados
*/
