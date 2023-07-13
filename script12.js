let cintura = localStorage.getItem('cintura');
let quadril = localStorage.getItem('quadril');
let sexo = localStorage.getItem('sexo');
let rcq = cintura/quadril

let estado = '';
let quadro = '';

let texto = `Segundo meus cálculos, a Relação Cintura-Quadril de acordo com suas medidas corporais é de: <h3>${rcq.toFixed(2)}</h3> Isso significa que você`;

if (sexo == 'masculino') {
    if (rcq<0.95) {
        texto += ` está dentro da faixa de normalidade!`;
    }
    else if (rcq>=0.96 && rcq<=1) {
        texto += ` está dentro da faixa moderada de risco!`;
    }
    else if (rcq>1) {
        texto += ` está dentro da faixa alta de risco!`;
    }
} else {
    if (rcq<0.80) {
        texto += ` está dentro da faixa de normalidade!`;
    }
    else if (rcq>=0.81 && rcq<=0.85) {
        texto += ` está dentro da faixa moderada de risco!`;
    }
    else if (rcq>0.85) {
        texto += ` está dentro da faixa alta de risco!`;
    }
}

const divTexto = document.getElementById('textoDigitado');
const divBotoes = document.getElementById('botoes');
const imagenzinha = document.getElementById('imagem');

function digitar() {
  
  let i = 0;
  const typingEffect = setInterval(() => {
    if (i <= texto.length) {
      divTexto.innerHTML = texto.slice(0, i);
      i++;
    } else {
      clearInterval(typingEffect);
      const img = document.createElement("img");
      img.src = "trcq.png";
      img.style = "width: 350px;";
      divBotoes.appendChild(img);
      imagenzinha.innerHTML =
        'Cálculo do RCQ: <br><strong> Comprimento da cintura (cm) <hr color="#000000"style="width:60%;"> Comprimento do quadril (cm)</strong>"';
      criarBotoes();
    }
  }, 10);
}


function criarBotoes() {
  const botao2 = document.createElement("a");
  botao2.innerHTML = "<br> Página inicial";
  botao2.href = "slide6.html";
  divBotoes.appendChild(botao2);
}

digitar();
