/* MANIPULAÇÃO DE NÓS

CRIAÇÃO DE NÓS:
    createElement
    createTextNode
    createAttribute

ATRIBUIÇÃO DE NÓS
    appendChild
    removeChild
    repleaceChild
*/


window.onload = function () {
    var div = document.getElementsByTagName("div").item(0);

    //Criandao um elemento
    var hr = document.createElement("hr");
    //Adicionando esse elemento (hr) no div
    div.appendChild(hr);

    var p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = "algo escrito em um parágrafo criado com javascript, com um texto adicionado com javascript";

    var li = document.createElement("li");
    div.appendChild(li);
    li.innerHTML = "Um ítem de lísta";

    //Criando um nó do tipo atributo
    var atributo = document.createAttribute("style");
    //Adicionando um valor a esse atributo
    atributo.value = "color:red";
    //Associando esse atributo à algum elemento
    li.setAttributeNode(atributo);

    //O código da linha abaixo sobrescreve o da linha 34
    li.setAttribute("style", "font-size: 35px; color: green");

    //A linha de código abaixo sobrepõe a da linha 39
    li.style.color = "blue";

    //Criando um campo do tipo select
    var select = document.createElement("select");
    select.setAttribute("id", "estados");
    //Colocando um "option" dentro do "select"
    var option = document.createElement("option");
    option.setAttribute("value", "DF");
    option.appendChild(document.createTextNode("Distrito Federal"));
    select.appendChild(option);
    div.appendChild(select);

    var option2 = document.createElement("option");
    option2.setAttribute("value", "RS");
    option2.appendChild(document.createTextNode("Rio grande do sul"));
    select.appendChild(option2);

    //Clonando elementos
    var select2 = select.cloneNode(true);
    div.appendChild(select2);

    //Clonando uma opção e jogando ela para dentro do primeiro select
    var option3 = option.cloneNode(true);
    select.appendChild(option3);

}
