function mostrarCuriosidade() {
    let texto = document.getElementById("textoCuriosidade");
    let botao = document.getElementById("botaoCuriosidade");

    if (texto.style.display === "block") {
        texto.style.display = "none";
        botao.innerText = "Mostrar curiosidade";
    } else {
        texto.style.display = "block";
        botao.innerText = "Esconder curiosidade";
    }
}