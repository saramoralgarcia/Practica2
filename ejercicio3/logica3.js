function Boton()
{
    var numero = document.getElementById("numero").value;
    var resultado = 0;
    var resultadoRedondeado = 0;
    if (numero == NaN)
    {
        document.write("Ingrese un número valido");
    } else
    {
        resultado = Math.cbrt(numero);
        document.write('La raiz cubica de ' + numero + ' ' + 'es: ' + resultado);
        if (numero > 50)
        {
            resultado = Math.sqrt(numero);
            document.write('La raiz cuadrada es: ' + resultado);
        } else
        {
            resultado = Math.cbrt(numero);
            resultadoRedondeado = resultado.toFixed(2);
            document.write('La raiz cubica de ' + numero + ' ' + 'es: ' + resultadoRedondeado);
        }
    }
}