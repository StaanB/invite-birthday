// Pegando tempo do evento
const dataEvento = new Date("Dec 8, 2023 19:00:00");
const valorTotalAniversario = dataEvento.getTime();

contaAsHoras = setInterval(function() {
    // Pegando o horário desse segundo
    const agora = new Date()
    const valorTotalAgora = agora.getTime()

    const tempoAteOAniversario = valorTotalAniversario - valorTotalAgora

    // Fazendo os cálculos para converter
    const diasAteOAniversario = Math.floor(tempoAteOAniversario / (1000 * 60 * 60 * 24))
    const horasAteOAniversario = Math.floor((tempoAteOAniversario % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteOAniversario = Math.floor((tempoAteOAniversario % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteOAniversario = Math.floor((tempoAteOAniversario % (1000 * 60)) / 1000)

    document.getElementById("contador").innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`

    if(tempoAteOAniversario < 0){
        document.getElementById("contador").innerHTML = "Você perdeu a festa 😞"
    }
}, 1000)

