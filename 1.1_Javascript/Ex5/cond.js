//If...Else
/*
Exercício: Se a hora estiver entre 06:00 e 12:00, mostrar "Bom dia!",
se estiver entre 12:00 e 18:00, mostrar "Boa tarde!",
caso contrário, mostrar "boa noite"
*/
let hora = prompt("Digite a hora: ");
let minutos = prompt("Digite os minutos: ");

if (hora >= 6 && hora < 12) {
    alert("Bom dia!");
} else if (hora >= 12 && hora <= 18) {
    alert("Boa tarde!");
} else{
    alert("Boa noite!");
}
