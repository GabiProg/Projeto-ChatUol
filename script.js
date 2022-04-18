let nome = prompt("Digite seu nome:");

nomeUsuario();
pegarMensagens();
enviarMensagens();

function nomeUsuario(){
    nome = prompt("Digite seu nome:");
    let promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', {name: nome});
    promessa.then(nomeAceito);
    promessa.catch(nomeNegado);
    mensagensNaTela();
    pegarMensagens();
    enviarMensagens();
}
function nomeAceito(resposta){
    console.log(resposta.data);
    pegarMensagens();
}
function nomeNegado(erro){
    console.log(erro);
   while(nome === erro){
    prompt("Digite seu nome:");
   }
};

function pegarMensagens(){
    let promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promessa.then(function(resposta){
        console.log(resposta.data);
    });
}
function enviarMensagens(){
    let promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', {from: nome,to: 'Todos',text: mensagem.value,type: message})
    promessa.then(function(resposta){
        console.log(resposta.data);
    });
    
}

function mensagensNaTela(){
    let section = document.querySelector("section");
    section.innerHTML = "";
    
}