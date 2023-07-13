if (!localStorage.getItem('nome')) {
    window.location.href = 'index.html';
}


const texto = `Olá ${localStorage.getItem('nome')}! O que você gostaria de saber?`;

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
  }, 50);
}

function criarBotoes() {
  const imagens = [
    {
      src: 'imc.png',
      onClick: funcao1
    },
    {
      src: 'tmb.png',
      onClick: funcao2
    },
    {
      src: 'rcq.png',
      onClick: funcao3
    },
    {
      src: 'treino.png',
      onClick: funcao4
    },
    {
      src: 'dieta.png',
      onClick: funcao5
    },
    {
      src: 'dados.png',
      onClick: funcao6
    }
  ];

  imagens.forEach((imagem) => {
    const botaoImagem = document.createElement('img');
    botaoImagem.src = imagem.src;
    botaoImagem.className = 'btn';
    botaoImagem.style.marginRight = '10px';
    botaoImagem.style.width= '100px';
    divBotoes.appendChild(botaoImagem);
    botaoImagem.addEventListener('click', imagem.onClick);
  });
}

function funcao1() {
  window.location.href = 'slideimc.html';
}

function funcao2() {
    window.location.href = 'slideTMBo.html';
}

function funcao3() {
    window.location.href = 'slidetmb.html';
}

function funcao4() {
    window.location.href = 'slidetreino.html';
}

function funcao5() {
    window.location.href = 'slidedieta.html';
}

function funcao6() {
    window.location.href = 'slide10.html';
}

digitar();
