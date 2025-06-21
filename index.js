const img = document.getElementById('img');
const buttons = document.getElementById('buttons')

let colorIndex = 0;
const trafficLght = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0;
    }
}

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]();
    colorIndex++;
    nextIndex();
}
const turnOn = {
    'red': () => img.src = 'imagem/semaforo-vermelho.png',
    'yellow': () => img.src = 'imagem/semaforo-amarelo.png',
    'green': () => img.src = 'imagem/semaforo-verde.png',
    'automatic': () => setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLght)