//Função para adicionar um parágrafo p com o número do botão na página de ajuda
var botoes = document.querySelectorAll(".botaoAjuda");

var contador = 0;
console.log(botoes.length);

botoes.forEach(function(botao){
    var p = document.createElement("p");
    contador++;

    p.classList.add("pBotao");
    p.innerText = contador;
    botao.appendChild(p);
    console.log(contador);
});


function salvarDuvida() {
    const mensagem  = document.getElementById('message').value;

    if(mensagem.length < 20){
      alert('A mensagem de dúvida deve ter no mínimo 20 caracteres!')
      return;
    }

    let mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];

    mensagens.push(mensagem);

    localStorage.setItem('mensagens', JSON.stringify(mensagens));

    document.getElementById('message').value = '';

    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();


    alert('Dúvida enviada com sucesso para nossa equipe!');
}
