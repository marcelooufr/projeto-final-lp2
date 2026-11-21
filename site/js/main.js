document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");

    if (!track) {
        console.log("Carrossel não encontrado!");
        return;
    }

    track.innerHTML += track.innerHTML;

    let posicao = 0;
    let ultimoTempo = 0;
    const velocidade = 50;

    function moverCarrossel(tempo) {
        if (ultimoTempo === 0) {
            ultimoTempo = tempo;
        }

        const intervalo = (tempo - ultimoTempo) / 1000;
        ultimoTempo = tempo;

        posicao += velocidade * intervalo;

        const metade = track.scrollWidth / 2;

        if (posicao >= metade) {
            posicao = 0;
        }

        track.style.transform = `translateX(-${posicao}px)`;

        requestAnimationFrame(moverCarrossel);
    }

    requestAnimationFrame(moverCarrossel);
});