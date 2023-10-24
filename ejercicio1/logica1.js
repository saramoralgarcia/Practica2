let nuevaVentana;
function AbrirNuevaVentana()
{
    nuevaVentana = window.open("");
    nuevaVentana.document.write(`<h1>HOLA</h1>`);
}
function Verificacion()
{
    if(nuevaVentana && !nuevaVentana.window.closed) //propiedad booleana
    {
        alert("La ventana está abierta");
    }else
    {
        alert("La ventana esta cerrada");
    }
}

