class validator{
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

    //Iniciar a validação de todos os campos
    validate(fom){
        //pegar inputs
        let inputs = form.getElementByTagName('input');

        //Transforma o HTMLCOLLECTION => ARRAY
        let inputsArray = [...inputs];
        
        //Loops nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){
            //Loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                //Verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    //data-min-length => minlength
                    //Limpando a string para virar um método
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    //Valor do input
                    let value = input.getAttribute(this.validatins[i]);

                    //Invocar o método
                    this[method](input, value);
                }
            }
        }, this);
    }
    //Verifica se um input tem número mínimo de caracteres
    minlength(input, minValue){
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue){
            this.printMessage(input, errorMessage);
        }
    }
    //Método para imprimir mensagem de erro na tela
    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;
        template.classList.remover('template');
        inputParent.appendChil(template);
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

//Evento que dispara as validações

submit.adddEventListener('click', function(e){
    e.preventDefault();
    console.log("Funcionou");
    validator.validate(form);
});