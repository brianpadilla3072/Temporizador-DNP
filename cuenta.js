var tiempoInicial = 0;
var tiempoRestante = 0;
var temporizador;
var pausado = false;

function iniciarCuentaRegresiva() {
    // Obtén el elemento por su id
    var panelControles = document.getElementById('panelControl');
    // Cambia el estilo a 'none'
    panelControles.style.display = 'none';


    var panelControlRecomendados = document.getElementById('panelControlRecomendados');
    // Cambia el estilo a 'none'
    panelControlRecomendados.style.display = 'none';



    // Obtén el elemento por su id
    var panelpause = document.getElementById('panelpause');
    // Cambia el estilo a 'none'
    panelpause.style.display = 'block'

    detenerCuentaRegresiva();


    var minutosIngresados = parseInt(document.getElementById('minutos').value, 10);

    if (!isNaN(minutosIngresados) && minutosIngresados > 0) {
        tiempoInicial = minutosIngresados * 60;
        tiempoRestante = tiempoInicial;
        actualizarCuentaRegresiva();
    } else {
        document.getElementById('minutos').value = "";
    }
}

function detenerCuentaRegresiva() {
    clearTimeout(temporizador);
    tiempoInicial = 0;
    tiempoRestante = 0;
    actualizarVisualizacion();
}

function pausarContinuarCuentaRegresiva() {

    var btn = document.getElementById('pausarContinuarBtn');

    if (pausado) {
        btn.innerHTML = 'Pausar';
        pausado = false;
        var panelControles = document.getElementById('panelControl');
        // Cambia el estilo a 'none'
        panelControles.style.display = 'none';


        var panelControlRecomendados = document.getElementById('panelControlRecomendados');
        // Cambia el estilo a 'none'
        panelControlRecomendados.style.display = 'none';

        // Obtén el elemento por su id
        var panelpause = document.getElementById('panelpause');
        // Cambia el estilo a 'none'
        panelpause.style.display = 'block'
        var btn = document.getElementById('pausarContinuarBtn');
        
        actualizarCuentaRegresiva();
    } else {
        btn.innerHTML = 'Continuar';
        pausado = true;
        var panelControles = document.getElementById('panelControl');
        // Cambia el estilo a 'none'
        panelControles.style.display = 'block';
    
    
        var panelControlRecomendados = document.getElementById('panelControlRecomendados');
        // Cambia el estilo a 'none'
        panelControlRecomendados.style.display = 'block';
    
        // Obtén el elemento por su id
        var panelpause = document.getElementById('panelpause');
        // Cambia el estilo a 'none'
        panelpause.style.display = 'none'
       
        clearTimeout(temporizador);
    }
}

function resetearInput() {
    document.getElementById('minutos').value = "";
}

function actualizarCuentaRegresiva() {
    var elementoCuentaRegresiva = document.getElementById('cuenta-regresiva');
    actualizarVisualizacion();

    if (tiempoRestante === 0) {
        elementoCuentaRegresiva.innerHTML = '¡ Fin !';
    } else {
        tiempoRestante--;
        if (!pausado) {
            temporizador = setTimeout(actualizarCuentaRegresiva, 1000);
        }
    }
}

function actualizarVisualizacion() {
    var elementoCuentaRegresiva = document.getElementById('cuenta-regresiva');
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;

    minutos = minutos <= 9 ? "0" + minutos : minutos;
    segundos = segundos <= 9 ? "0" + segundos : segundos;

    elementoCuentaRegresiva.innerHTML = minutos + ':' + segundos;
}
function ponerminutos(minuts) {
    document.getElementById('minutos').value = minuts;
    iniciarCuentaRegresiva();
}