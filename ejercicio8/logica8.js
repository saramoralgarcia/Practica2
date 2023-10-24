function MoverBoton(id)
{
    var boton = document.getElementById(id);
    var caja = document.getElementById('caja');
    movimiento.insertBefore(boton, caja.firstChild);
}