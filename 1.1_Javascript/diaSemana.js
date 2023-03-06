//Script dias da semana
var dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

for(let i = 0; i < 7; i++){
    if(dias[i] != "sábado" && dias[i] != "domingo"){
        dias[i] += "-feira";
    }
}

var data = new Date("Jul/28/2014 04:30:20");

alert(dias[data.getDay()]);