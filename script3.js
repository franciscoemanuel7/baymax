const texto = "Qual seu sexo biológico?";

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
  const botao1 = document.createElement('button');
  botao1.innerHTML = 'Masculino';
  botao1.className = 'btn';
  botao1.style.marginRight = '10px';
  botao1.addEventListener('click', () => {
    localStorage.setItem('sexo', 'masculino');
    window.location.href = 'slide4.html';
  });
  divBotoes.appendChild(botao1);
  
  const botao2 = document.createElement('button');
  botao2.innerHTML = 'Feminino';
  botao2.className = 'btn';
  botao2.style.marginLeft = '10px';
  botao2.style.backgroundColor = '#FF1493';
  botao2.style.color = 'white';
  botao2.addEventListener('click', () => {
        localStorage.setItem('sexo', 'feminino');
        window.location.href = 'slide4.html';
      });
  divBotoes.appendChild(botao2);
}

digitar();

