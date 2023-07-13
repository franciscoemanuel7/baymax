
const texto = "<strong>1-Caminhada:</strong> A caminhada é um exercício simples e eficaz para iniciantes. Comece caminhando por 10 a 15 minutos por dia e aumente gradualmente a duração e a intensidade da caminhada. Isso melhorará sua saude cardiovascular, reduzir asdores nas articulações e liberando endorfina,substâncias que aumenta a sensação bem-estar.</p><strong>2- Exercícios de força:</strong> Os exercícios de força,como flexões e agachamentos, são ótimos paraconstruir músculos e melhorar a resistência. Comececom uma carga leve e aumente gradualmente.</p><p><strong>3-Pratique yoga:</strong> A yoga é uma prática quecombina movimentos suaves com técnicas derespiração profundas, ajudando a melhorar a flexibilidade, equilíbrio e força.</p>";

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
  }, 1);
}

function criarBotoes() {
  const botao2 = document.createElement('a');
  botao2.innerHTML = 'Avançar';
  botao2.style.color = 'blue';
  botao2.href = 'slidetreino3.html';
  divBotoes.appendChild(botao2);
}

digitar();

