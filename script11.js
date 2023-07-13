
const texto = "Agora tire a medida da circunferência do quadril:";

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

function criarBotoes () {
    const img = document.createElement("img");
    img.src = "rcq2.webp";
    img.style = "width: 350px;";
    divBotoes.appendChild(img);
    const input = document.createElement("input");
    input.type = "number";
    input.setAttribute("autofocus", "");
    divBotoes.appendChild(input);
    const botao = document.createElement("button");
    botao.innerHTML = "Enviar";
    botao.className = "btn";
    divBotoes.appendChild(botao);
    botao.addEventListener("click", () => {
        localStorage.setItem("quadril", input.value);
        window.location.href = "slidetmbfinal.html";
        });
}

digitar();

