const texto = "Olá! Seja bem-vindo(a) ao nosso site de monitoramento da saúde! Você já possui cadastro?";

const divTexto = document.getElementById('textoDigitado');
const divBotoes = document.getElementById('botoes');

function digitar() {
  let i = 0;
  const typingEffect = setInterval(() => {
    if (i <= texto.length) {
      divTexto.innerHTML = texto.slice(0, i);
      i++;
    } else {
      clearInterval(typingEffect);
      criarBotoes();
      
    }
  }, 50);
}

function criarBotoes() {
  const botao1 = document.createElement("button");
  botao1.innerHTML = "Sim já possuo cadastro";
  botao1.className = "btn";
  botao1.id = "botao1";
  divBotoes.appendChild(botao1);
  divBotoes.appendChild(document.createElement("br"));
  const botao2 = document.createElement("button");
  botao2.innerHTML = "Não, quero me cadastrar";
  botao2.className = "btn";
  divBotoes.appendChild(botao2);
  botao1.addEventListener("click", () => {
    window.location.href = "slide6.html";
  });
  botao2.addEventListener("click", () => {
    window.location.href = "slide2.html";
  });
}

digitar();


botao1 = document.getElementById('botao1');

