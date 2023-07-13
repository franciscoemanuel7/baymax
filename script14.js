
const texto = "A prática de exercícios físicos reduz o estresse e sintomas de ansiedade, melhora a qualidade do sono, melhora a aprendizagem, reduz sintomas depressivos, previne e diminui a mortalidade por doenças crônicas como pressão alta e diabetes, melhora a força, equilíbrio e flexibilidade, proporciona a socialização e a convivência. A seguir terá dicas de exercícios que você pode fazer:";

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
  botao2.href = 'slidetreino2.html';
  divBotoes.appendChild(botao2);
}

digitar();

