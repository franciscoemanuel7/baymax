
const texto = "<p><strong>4-Dança:</strong> A dança é uma forma divertida e eficaz de se exercitar. Experimente aulas de dança, como salsa, tango ou hip hop.</p><p><strong>5- Ciclismo:</strong> O ciclismo é uma atividade de baixo impacto que pode ajudar a melhorar a resistência e fortalecer os músculos das pernas. Experimente andar de bicicleta ao ar livre ou se exercitar em uma bicicleta ergométrica.</p><p>Lembrando que é importante ter o acompanhamento e a orientação de um profissional para traçar o melhor caminho para você alcançar seus objetivos e evitar contusões e lesões provenientes da má execução.</p>";

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
  botao2.innerHTML = 'Página Inicial';
  botao2.style.color = 'blue';
  botao2.href = 'slide6.html';
  divBotoes.appendChild(botao2);
}

digitar();

