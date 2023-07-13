
botao.addEventListener("click", () => {
    nome = getdocument.getElementById("nome");
    localStorage.setItem("nome", nome.value);
    window.location.href = "slide10.html";
    });