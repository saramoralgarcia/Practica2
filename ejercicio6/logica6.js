
function InsertarParrafo()
{
    //acceder al valor del nuevo texto
    const nuevoTexto = document.getElementById('nuevoTexto').value;
    //Crear un nuevo parrafo
    const insertarParrafo = document.createElement('p');
    insertarParrafo.textContent = nuevoTexto;
     //acceder al valor de parrafos
    const parrafos = document.getElementById('parrafos');
    // esta sentencia acceda al contenedor "parrafos" e inserta la variable "insertarParrafo" como firstChild

    parrafos.insertBefore(insertarParrafo,parrafos.firstChild);
}
document.getElementById("insertaParrafo").addEventListener("click", InsertarParrafo);

