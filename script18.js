
const texto = "<strong>2 - Durma bem:</strong> O sono é algo essencial quando oassunto é vida saudável. Tente dormir pelo menos 7a 8 horas por noite.</p><strong>5- Beba bastante água:</strong> A água é essencial parao bom funcionamento do corpo. Para você saber aquantidade de água necessária para o seu corpobasta multiplicar seu peso vezes 35 milímetros. Evite bebidas alcoólicas e refrigerantes. </p>Lembre-se de que cada pessoa é única, e é sempreuma boa ideia consultar um profissional de saúde ou nutricionista para obter orientações personalizadas com base em suas necessidades individuais.";

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

