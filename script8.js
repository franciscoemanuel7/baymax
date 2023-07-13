
const texto = "A relação cintura-quadril (RCQ) é o cálculo que se faz a partir das medidas da cintura e do quadril para verificar o risco que uma pessoa tem de desenvolver uma doença cardiovascular. Isso acontece porque, quanto maior a concentração da gordura abdominal, maior o risco de ter problemas como colesterol alto, diabetes, pressão alta ou aterosclerose. <br> Para calcular a relação cintura-quadril deve-se utilizar uma fita métrica para avaliar: <ul> <li>Tamanho da cintura, que deve ser medido na parte mais estreita do abdômen ou na região entre a última costela e o umbigo;</li><li>Tamanho do quadril, que deve ser medido na parte mais larga das nádegas.</li></ul>";

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
  botao2.href = 'slidetmb2.html';
  divBotoes.appendChild(botao2);
}

digitar();

