var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

Nome = document.getElementById("nome");
Nome.innerHTML = localStorage.getItem("nome");

sexo = document.getElementById("sexo");
peso = document.getElementById("peso");
altura = document.getElementById("altura");
idade = document.getElementById("idade");
div = document.getElementById("profile");
botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    //verificar se todos os campos estão preenchidos e se o peso e altura são números
    if (sexo.value == "" || peso.value == "" || altura.value == "" || isNaN(peso.value) || isNaN(altura.value)) {
        //criar um alerta do bootstrap
        var alertContainer = document.getElementById("profile");
        var alert = document.createElement("div");
        alert.setAttribute("class", "alert alert-danger alert-dismissible fade show");
        alert.setAttribute("role", "alert");
        alert.innerHTML = "<strong>Erro!</strong> Preencha todos os campos corretamente.";
        alertContainer.appendChild(alert);
    } else {
        localStorage.setItem("sexo", sexo.value);
        localStorage.setItem("peso", peso.value);
        localStorage.setItem("altura", altura.value);
        localStorage.setItem("idade", idade.value);
        var alertContainer = document.getElementById("profile");
        var alert = document.createElement("div");
        alert.setAttribute("class", "alert alert-primary");
        alert.setAttribute("role", "alert");
        alert.innerHTML = "<strong>Parabéns!</strong> Seu cadastro foi realizado com sucesso, redirecionando em 10seg...";
        //redirecione em 10segundos
        setTimeout(() => {
            window.location.href = "slide6.html";
        }, 10000);
        alertContainer.appendChild(alert);
    }
});
