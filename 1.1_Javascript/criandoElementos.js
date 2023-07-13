/*Exemplo de uso do javascript para criar tags html e adicionar classes a elas*/

//Função para criar as cartas do jogo
const createCard = () => {
    //Criando as tags html mecessárias 
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    //Adicionando as classes nas tags
    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    /*É necessário montar as tags, pois as tags com as classes front e back
    ficam dentro (child) da div com a classe card*/

    card.appendChild(front); //Para acrescentar um filho na div com a class card
    card.appendChild(back);

    //Colocando a carta dentro do grid
    grid.appendChild(card); //Adicionando a card dentro da tag grid
}

//É necessário chamar a função para ela funcionar
createCard();

for(let i = 0; i < 13; i++){
    createCard();
}