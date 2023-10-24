var tablaExistente = false;
document.getElementById("boton").addEventListener("click",function()
{
    if(!tablaExistente)
    {
        var contenido =[
            [1,'Rojo','Resino'],
            [2,'Azul','Minayo'],
            [3,'Verdde','Resino']
        ];
        var tableBody = document.getElementById("tableBody");// accede al cuerpo de la tabla
        if(tableBody.querySelector('tableBody'))
        {
            return;
        }
        contenido.forEach(row =>
        {
            var tr = document.createElement('tr');//recorre el array y crea una fila 
            row.forEach(dato => // recorre la fila y crea una celda
            {
                var td = document.createElement('td');
                td.textContent = dato;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
        tablaExistente = true;
    }
});

