let peso = localStorage.getItem('peso');
let altura = localStorage.getItem('altura');
let imc = peso / (altura * altura);

let estado = '';
let quadro = '';

if (imc >= 25 && imc<30) {
  estado = 'acima do peso';
  quadro = 'Sobrepeso';
} else if (imc < 18.5) {
  estado = 'abaixo do peso';
  quadro = 'Magreza. Recomendo acompanhamento com um profissional da nutrição!';
}else if (imc >= 30 && imc<35) {
  estado = 'acima do peso';
  quadro = 'Obesidade tipo I. Recomendo acompanhamento com um profissional da nutrição!';
}else if (imc >= 35 && imc<40) {
  estado = 'acima do peso';
  quadro = 'Obesidade tipo II. Recomendo acompanhamento com um profissional da nutrição!';
}else if (imc >= 40) {
  estado = 'acima do peso';
  quadro = 'Obesidade tipo III. Recomendo acompanhamento com um profissional da nutrição urgentemente!';
} else {
  estado = 'com peso normal!';
}

let texto = `Seu IMC (índice de massa corporal) é de: <h3>${imc.toFixed(2)} kg/m²</h3> Segundo meus dados, seu IMC indica que você está ${estado}`;

if (imc > 24.9 || imc < 18.5) {
  texto += `, você se encontra no quadro de <b>${quadro}</b>`;
}

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
  }, 40);
}

function criarBotoes() {
  const img = document.createElement("img");
  img.src = "imcoff.png";
  img.style = "width: 350px;";
  divBotoes.appendChild(img);
  const botao2 = document.createElement("a");
  botao2.innerHTML = "<br> Página inicial";
  botao2.className = "";
  divBotoes.appendChild(botao2);
  botao2.addEventListener("click", () => {
    window.location.href = "slide6.html";
  });
}

digitar();
