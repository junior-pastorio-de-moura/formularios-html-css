function calculaRetangulo(b,h){
    alert("Retângulo");
    var area = (b*h);
    var perimetro = (b+h)/2;
    return alert("Área: "+area+"\nPerímetro: "+perimetro);
}

//Função que retorna um array
function calculaRetangulo2(b,h){
    alert("Retângulo 2 - (Array como retorno):");
    var area = (b*h);
    var perimetro = (b+h)/2;
    return [area, perimetro];
}
//Mandando valores para a função
let resultado = calculaRetangulo2(4, 8);

//A variável resultado recebe um vetor com 2 posições
alert("Mostrando aqui: "+resultado[0]+" - "+resultado[1]);

//Função que retorna um objeto

function calculaRetangulo3(b,h){
    alert("Retângulo 3 - (Objeto como retorno):");
    var area = (b*h);
    var perimetro = (b+h)/2;
    return {
        area: area,
        perimetro: perimetro
    };
};

let resultado2 = calculaRetangulo3(12,22);
alert("Área: "+resultado2.area+"\nPerímetro: "+resultado2.perimetro);
//Mostrando a função
alert(calculaRetangulo3);//Exibe a função na caixa de alerta


//Passando a função por referência para uma variável
let calculo = calculaRetangulo3;
alert(calculo(2,5));