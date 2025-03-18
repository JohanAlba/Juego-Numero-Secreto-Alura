let numeroSecreto = 0;
let intentos = 0;
let numerosSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p', 'El número es mayor');
        } else {
            asignarTextoElemento('p', 'El número es menor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numerosGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numerosGenerado);
    console.log(numerosSorteado);
    
    if (numerosSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (numerosSorteado.includes(numerosGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteado.push(numerosGenerado);
            return numerosGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

// Llamamos a las condiciones iniciales al cargar el juego
condicionesIniciales();

