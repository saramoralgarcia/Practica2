var contador = 0;
var intervalo = null;
var colorDefault = "#fff";


function CambioDeColor() {
    var colores = ["#FF8080", "#FFCF96", "#F6FDC3", "#CDFAD5", "#BEADFA", "#D2E0FB", "#EDB7ED"];
    var fondo = document.getElementById("fondo");
    fondo.style.backgroundColor = colores[contador % colores.length];
    // el modulo de contador y el tamaño del array nos da la posicion para que se recorra uno a uno a su misma vez cuadno llegue al final como el numero entre el su mismo numero será 0 volvera la posicion inicial-
    contador++;

    // Si el contador llega a 8 volvera, nos avisará de que los colores se han acabado y la pantalla se volverá en blanco
    if (contador === 8) {
        clearInterval(intervalo);
        alert("Se han agotado los cambios de color.\nVuelva a pulsar el botón para ver de nuevo.");
        fondo.style.backgroundColor = colorDefault;
    }
}
// esta funcion inicia el Cambio de color, de esta manera evitamos que si se pulsa varias veces el boton no inicie constantemente.
function IniciarCambioDeColor() {
    if (intervalo === null) {
        intervalo = setInterval(CambioDeColor, 1000); //ejecutará la funcion del cambio de color en un intervalo de 1 segundo por color.
    }
}