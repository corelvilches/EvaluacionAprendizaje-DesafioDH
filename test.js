// Clase para emular el comportamiento del validador
class ChallengeCheckerEmulator {
    constructor() {
        this.errorCount = 0; // Contador de errores
        this.correcto = false; // Estado de corrección
    }

    // Método para informar errores con un mensaje
    informarError(msje) {
        this.errorCount++;
        this.correcto = false;
        alert(msje); // Mostrar mensaje de error
    }

    // Método para marcar como correcto
    marcarCorrecto() {
        this.correcto = true;
    }

    // Método para mostrar una moraleja o mensaje de éxito
    mostrarMoraleja(msje) {
        this.correcto = true;
        alert(msje); // Mostrar mensaje de éxito
    }
}

// Emulación del ChallengeChecker
const miValidador = new ChallengeCheckerEmulator();

// Detección de errores
if (typeof realizarPedido === "function") {
    realizarPedido(); // Llamada a la función
    // Obtener el elemento a modificar
    const elementoModificando = document.getElementById("parrafoMensaje");
    // Contenido esperado después de ejecutar la función
    const contenidoEsperado = "Gracias! Tu pedido llegará rápidamente";

    // Verificar si el contenido es el esperado
    if (elementoModificando.innerHTML !== contenidoEsperado) {
        // Informar un error si el contenido no es el esperado
        miValidador.informarError('Tu función realizarPedido() debe modificar el inner.HTML del párrafo con id="parrafoMensaje" mostrando el contenido solicitado en la consigna');
    }
} else {
    // Informar un error si la función no está definida
    miValidador.informarError('Se espera que definas la función realizarPedido() en tu script.js');
}

// Chequeo final y moraleja
if (miValidador.errorCount === 0) {
    // Marcar como correcto si no hay errores
    miValidador.marcarCorrecto();
    // Mostrar un mensaje de éxito o moraleja
    miValidador.mostrarMoraleja("¡Bien! Todo gran proyecto comienza por un primer paso");
}
