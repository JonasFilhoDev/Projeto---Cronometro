let temporizador
let emExecucao = false
let [horas, minutos, segundos] = [0, 0, 0]

function atualizarDisplay() {
    document.getElementById("cronometro").textContent =
        `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
}

function iniciarParar() {
    if (emExecucao) {
        clearInterval(temporizador)
        document.getElementById("botaoIniciarParar").textContent = "Iniciar"
    } else {
        temporizador = setInterval(() => {
            segundos++
            if (segundos === 60) {
                segundos = 0
                minutos++
                if (minutos === 60) {
                    minutos = 0
                    horas++
                }
            }
            atualizarDisplay()
        }, 1000)
        document.getElementById('botaoIniciarParar').textContent = 'Parar'
    }
    emExecucao = !emExecucao;
}

function resetar() {

    clearInterval(temporizador);

    horas = 0;
    minutos = 0;
    segundos = 0;
    emExecucao = false;


    atualizarDisplay();


    const botao = document.getElementById("botaoIniciarParar");
    if (botao) {
        botao.textContent = "Iniciar";
    }
}

