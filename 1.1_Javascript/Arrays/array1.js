//ARRAYS - Um array é um objeto de pares ordenados índice/valor

/*Criando um array indexado*/
var meuArray = new Array ("Casa", "rio", 5, "Joinville", 125);

//Mostrando os valores do array indexado

console.log(meuArray[0], meuArray[1], meuArray[2], meuArray[3], meuArray[4]);

/*Pode ser adicionado ou alterado os valores do array*/

meuArray[5] = "José"; //Adiciona um novo valor no array
meuArray[4] = 457; //Foi alterado o valor da posição 4 do array

/*Arrays podem conter objetos*/

meuArray[6] = {x: 14, y: "mar"}; //Adicionando um objeto para a posição 6 do array

/*Para ler um dado do tipo objeto de dentro do array é usado a sintaxe 
mostrada abaixo:*/

console.log(meuArray[6].x);
console.log(meuArray[6].y);

//Sintaxe para ler dados de um objeto contido em um array
meuArray[6].x;
meuArray[6].y;

//Outra forma de se criar um array já contendo os valores
tenis = ["Cadarço", 38, 180, "branco"];

console.log(tenis[3]);

//Criando um array vazio e em seguida inserindo seus valores
carro = [3];
carro[0] = "Vermelho";
carro[1] = "Jeep";
carro[2] = "Renegade";
carro[3] = 30000;

console.log(carro[2]);

//Outro exemplo
var a = new Array;

a[0] = 3.14159;
a[1] = "prego";
a[2] = true;
a[3] = "floor";
a[4] = {nome: "Maurício", cidade: "Rio de Janeiro"};


//Para teste, foi criado um objeto abaixo
var loja = {
    nome: "Cacaushow",
    funcionarios: 2,
    faturaMes: 3000,
    custoInicio: 250000 
};

//Mostrando os valores do objeto criado
console.log(loja.nome);


//Sintaxe indexada de array

var arr = ["apartamento", "lago", 7, {nome: "Júnior", cidade: "Taquara"}, [3, false, "amor"]];

/*Dessa forma podemos criar arrays aninhados*/

//Mostrando os dados do array
console.log("Array literal:\n");

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[3].cidade);
console.log(arr[4]);
console.log(arr[4][2]);//Mostra valores de um array aninhado