var enderecoForm = document.querySelector(".form-body");
var cepInput = document.querySelector("#cep");
var ruaInput = document.querySelector("#rua");
var bairroInput = document.querySelector("#bairro");
var cidadeInput = document.querySelector("#cidade");
var estadoInput = document.querySelector("#estado");
var formiInput = document.querySelector(["data-input"])

cepInput.addEventListener("keypress", (e) => {
    const InputValue = e.target.InputValue

    if (InputValue.length === 8){

    }
});

var getEndereço = async (cep) => {

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch (apiURL);
    const data = await response.json();
    console.log(data);
    console.log(formInput);
    console.log(data.erro);
    
    ruaInput.value = data.logradouro;
    cidadeInput. value = data.localidade;
    bairroInput.value = data.barro;
    estadoInput.value = data.uf;

}


































/*cepInput.addEventListener("keypress", (e) =>{
    const onlyNumbers = /[0-9]/;
    const tecla = String.fromCharCode(e.keyCode);
    if(onlyNumbers.test(tecla)){
        e.preventDefault();
        return;
    }
});
cepInput.addEventListener("keyup", (e) =>{
    const InputValue = target.value;
    if(InputValue.length === 8){
        //fazer algima coisa - rodar a aplicação
        getEndeco(InputValue);
    }

});
const getEndeco = (cep) =>{

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch (apiURL);
    const data = await response.json();
    console.log(data);

}*/