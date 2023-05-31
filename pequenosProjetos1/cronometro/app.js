let sec = 0;
let min = 0;
let horas = 0;
let interval;

function start(){
    watch();
    interval = setInterval(watch,1000);
}
function pause(){
    clearInterval(interval);
}
function stop(){
    clearInterval(interval);
    min = 0;
    sec = 0;
    document.getElementById("watch").innerText="00:00:00";
}

function doisDigitos(digit){
    if(digit<10){
        return("0"+digit);
    } else{
        return(digit);
    }
}

function watch(){
    sec++;
    if(sec%60==0){
        min++;
        sec = 0;
        if(min%60==0){
            min = 0;
            horas++;
        }
    }
    document.getElementById("watch").innerText=doisDigitos(horas)+":"+doisDigitos(min)+":"+doisDigitos(sec);
}