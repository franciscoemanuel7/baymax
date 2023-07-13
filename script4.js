botao = document.getElementById("botao");
email = document.getElementById("email");
senha = document.getElementById("senha");
senha2 = document.getElementById("senha2");

botao.addEventListener("click", () => {
  //verificar se email e senha estao preenchidos, se nao estiver enviar um erro
  if (email.value == "" || senha.value == "") {
    alert("Preencha todos os campos");
  }
  //verificar se o email e valido, se nao estiver enviar um erro
  else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    alert("Email inválido");
  } else if (
    senha.value.length < 8 ||
    senha.value.match(/[a-z]/g) == null ||
    senha.value.match(/[A-Z]/g) == null ||
    senha.value.match(/[0-9]/g) == null ||
    senha.value.match(/[^a-zA-Z\d]/g) == null ||
    senha2.value != senha.value
  ) {
    var mensagem = "<ul>";

    if (senha.value.length < 8) {
      mensagem += "<li>A senha deve ter no mínimo 8 caracteres.</li>";
    }
    if (senha.value.match(/[a-z]/g) == null) {
      mensagem += "<li>A senha deve conter pelo menos uma letra minúscula.</li>";
    }
    if (senha.value.match(/[A-Z]/g) == null) {
      mensagem += "<li>A senha deve conter pelo menos uma letra maiúscula.</li>";
    }
    if (senha.value.match(/[0-9]/g) == null) {
      mensagem += "<li>A senha deve conter pelo menos um dígito numérico.</li>";
    }
    if (senha.value.match(/[^a-zA-Z\d]/g) == null) {
      mensagem += "<li>A senha deve conter pelo menos um caractere especial.</li>";
    }
    if (senha2.value != senha.value) {
      mensagem += "<li>As senhas digitadas não coincidem.</li>";
    }

    mensagem += "</ul>";

    var alertContainer = document.getElementById("balaozin");
    var alert = document.createElement("div");
    alert.setAttribute("class", "alert");
    alert.innerHTML =
      `<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>Sua senha contém alguns erros:</strong> ${mensagem}`;
    alertContainer.appendChild(alert);
  } else {
    window.location.href = "slide10.html";
  }
});
