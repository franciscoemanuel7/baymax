
const texto = "Infelizmente 9 em cada 10 pessoas tem hábitos de vida não saudável, segundo o site otempo.com.br, mas muitas pessoas querem sair dessa vida e começar a ter hábitos mais saudáveis, e alguns fatores são cruciais nesse processo:</p> <strong>1 - Consuma alimentos ricos em nutrientes:</strong> É importante consumir alimentos saudáveis e equilibrados, ricos em nutrientes, vitaminas e minerais. Evite alimentos processados, açúcar refinado e gorduras saturadas. Consuma proteínas magras, como frango ou ovos. Introduza frutas, verduras e legumes na dieta. Faça as três refeições no dia com lanches saudáveis entre elas.";

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
  botao2.href = 'slidedieta2.html';
  divBotoes.appendChild(botao2);
}

digitar();

