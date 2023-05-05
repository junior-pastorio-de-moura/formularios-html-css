const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;


const trafficLght = ( event ) =>{
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if(colorIndex < 2){
        colorIndex++
    } else{
        colorIndex = 0;
    }
}

const changecolor = () => {
    const colors = ["red", "yellow", "green"];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    "red": () => img.src = "./vermelho.webp",
    "yellow": () => img.src = "./amarelo.webp",
    "green": () => img.src = "./verde.webp",
    "automatic": () => intervalId = setInterval(changecolor, 1500)
}

buttons.addEventListener("click", trafficLght);