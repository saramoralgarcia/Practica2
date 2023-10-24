function AbrirVentana()
{
    var ventana = window.open("", "_blank", 'width=500,height=500,menubar=yes,location=no,resizable=no');
    ventana.document.write(`<button onclick="window.close()">Cerrar</button>`);
}

