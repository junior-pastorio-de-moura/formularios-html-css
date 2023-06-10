//IMC DATA

const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0",
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18.5 e 24.9",
        info: "Normal",
        obesity: "0",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Entre 25 e 29.9",
        info: "Sobrepeso",
        obesity: "I",
    },
    {
        min: 30,
        max: 39.9,
        classification: "Entre 30 e 30.9",
        info: "Obesidade",
        obesity: "II",
    },
    {
        min: 40,
        max: 99,
        classification: "Maior que 40",
        info: "Obesidade grave",
        obesity: "III",
    }
];

//Seleção de elementos

const imcTable = document.querySelector("#imc-table");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

//Funções
function createTable(data){
    data.array.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("p");
        classification.innerText = item.classification;

        const info = document.createElement("p");
        info.innerText = item.info;

        const obesity = document.createElement("p");
        obesity.innerText = item.obesity;

        div.appendChild(classification);
        div.appendChild(obesity);
        div.appendChild(info);

        imcTable.appendChild(div);
    });
}

function cleanInputs(){
    heightInput.value = "";
    weightInput.value = "";
}

function validDigits(text){
    return text.replace(/[^0-9,]/g, "");
}

//Inicialização
createTable(data);

//Eventos
[heightInput, weightInput].forEach((el) => {
    el.addEventListener("input", (e) => {
        const updateValue = validDigits(e.target.value);

        e.target.value = updateValue;
    });
})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cleanInputs();
});

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const weight = +weightInput.value.replace(",", ".");
    const height = +heightInput.value.replace(",", ".");

    if(!weight || !height) return;
})