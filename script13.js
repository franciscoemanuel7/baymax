let peso = localStorage.getItem('peso');
let altura = localStorage.getItem('altura');
let idade = localStorage.getItem('idade');
let sexo = localStorage.getItem('sexo');
let TMB = 0;
console.log(sexo)

if (sexo == 'masculino') {
    TMB = 66.5 + (13.75*peso) + (5.003*(altura*100)) - (6.775*idade)
} else {
    TMB = 655.1 + (9.563*peso) + (1.850*(altura*100)) - (4.676*idade)
}

let texto = `A Taxa Metabólica Basal (TMB) é o mínimo de energia necessária para manter as funções do organismo em repouso, como os batimentos cardíacos, a pressão arterial, a respiração e a manutenção da temperatura corporal. De acordo com a sua altura, peso e idade, sua TMB é de: <h2>${TMB.toFixed(2)} Kcal</h2> O cálculo da TMB é feito com o peso(em kg), a altura(em cm) e a idade.
Homem: <strong>66.5 + (13.75*peso) + (5.003*altura) - (6.775*idade) </strong>
Mulher: <strong>665.1 + (9.563*peso) + (1.850*altura) - (4.676*idade)</strong>`;


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
  const botao2 = document.createElement("a");
  botao2.innerHTML = "<br> Página inicial";
  botao2.href = "slide6.html";
  divBotoes.appendChild(botao2);
}

digitar();
