const texto = "Olá! Eu sou Baymax, o seu agente pessoal de saúde! Lhe auxiliarei a monitorar a sua saúde! Para começar, nos diga o seu nome:";

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
  const botao1 = document.createElement('input');
  botao1.type = 'text';
  botao1.setAttribute('autofocus', '')
  divBotoes.appendChild(botao1);
  
  const botao2 = document.createElement('button');
  botao2.innerHTML = 'Enviar';
  botao2.className = 'btn';
  divBotoes.appendChild(botao2);
  botao2.addEventListener('click', () => {
    localStorage.setItem('nome', botao1.value);
    window.location.href = 'slide3.html';
  });
}

digitar();

