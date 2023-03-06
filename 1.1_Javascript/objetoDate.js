//Objeto DATE - Objeto responsável por manipular datas

/*
UTC = Universal Time Coordinated
UTC = GMT
GMT = Greenwich Mean Time (Meridiano de Greenwich)
Hora Brasil = Hora GMT - 3h

//01/janeiro/1970 - Data zero para objetos do tipo date
*/

var data = new Date("Jul-20-2011 02:30:35"); //Função para data e hora local

console.log(data);


var data2 = new Date(2011, 2, 22, 4, 35, 30, 1234);
//O objeto Date segue a ordem ano, mês, dia, hora, minutos, segundos e milisegundos
console.log(data2);

var data3 = new Date(); //Mostra a data e hora atuais
console.log(data3);

//getHours() e getUTCHours
var data4 = new Date();
console.log(data4.getHours()+ " - " +data4.getUTCHours());

//Data no formato americano
var data5 = new Date("Jul/20/2020 04:30:20");
console.log(data5.getHours());

//getDate() - Retorna o dia do mês
var data6 = new Date();
console.log(data6.getDate());

//getDay() - Retorna o dia da semana
var data7 = new Date();
console.log(data7.getDay());

//getFullYear() - Retorna o ano atual com 4 dígitos
console.log(data7.getFullYear());

//getHours() - Retorna a hora atual
console.log(data7.getHours());

//getMilliseconds() - Retrona os milisegundos da data mensionada
console.log(data7.getMilliseconds());

//getMinutes() - Retrona a quantidade de minutos da hora mencionada no objeto Date()
console.log(data7.getMinutes());

//getMonth() - Retorna o mês, se não for mencionado nada no objeto date retorna o mês atual
console.log(data7.getMonth());

//getSeconds() - Retorna a quantidade de segundos informada
console.log(data7.getSeconds());

//getTime() - Retorna a quantidade total de milisegundos do objeto date
console.log(data7.getTime());


//getTimezoneOffset() - Mostra a diferença em minutos entre a hora local e a hora do Greenwich (universal)
console.log(data7.getTimezoneOffset());

/*parse() - Objeto estático que pode ser chamado direto da classe Date que retorna o número de
milisegundo de uma data informada*/
console.log(Date.parse(data7));

//Os métodos get recuperam dados e os métodos set atribuem dados

/*
RESUMO dos Métodos get
getHours()
getDate()
getDay()
getFullYears()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
getTime()
getTimezoneOffset()
parse()
*/
//Objetos set
//setFullYear() - Altera o ano
//setDate() - Altera o dia
//setMonth() - Altera o mês
//setHours() - Altera a hora
//setMilliseconds() - Altera os milisegundos
var data8 = new Date("Oct/15/2010 03:15:05");

data8.setFullYear(2015);
data8.setDate(26);
data8.setMonth(3);
console.log(data8);

//toDateString() - Converte a data em uma string

data8.toDateString();
console.log(data8);

//toLocaleDateString() - Converte a data em uma string adotando as convenções do sistema operacional
var data9 = new Date("Apr/14/2022");
data9.toLocaleDateString();
console.log(data9);
/*
Exemplos: 

var data = new Date(123456); - Informa a data 123456ms (milisegundos) após a data zero

Pode ser inserido a data com uma string como abaixo
var data = new Date("Jul-20-2011 02:30:35");

obs: Ano e mês são obrigatórios e pode ser adicionada uma data apenas com esses dois parâmetros
 min 17:25
*/