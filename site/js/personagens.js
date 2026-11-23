
function mostrarInfo(personagem) {
    let info = document.getElementById(personagem);

    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}
