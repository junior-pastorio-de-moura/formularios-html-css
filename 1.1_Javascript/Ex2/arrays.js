/*
EXERCÍCIO:
Receber com o promt e armazenar em um vetor os dados de um aluno e exibi-los
*/

let informacoes = [5];
informacoes[0] = prompt("Digite seu nome: ");
informacoes[1] = prompt("Digite sua idade: ");
informacoes[2] = prompt("Digite seu número de matrícula: ");
informacoes[3] = prompt("Quantas disciplinas pretende fazer esse semestre? ");
informacoes[4] = prompt("Digite o nome da disciplina que você tem preferência\n em fazer? ");
informacoes[5] = prompt("Pretende pagar o cpm? ");

if (informacoes[5] == "sim" || informacoes[5] == "Sim") {
    informacoes[5] = true
} else {
    informacoes[5] = false
}

for (let i = 0; i <= 5; i++) {
    console.log(informacoes[i])
}