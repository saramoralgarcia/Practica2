function MostrarPares()
{
    var imagenes = document.getElementsByTagName('img');
    for (var i = 0; i < imagenes.length; i++)
    {
        
        if(i % 2 === 0)
        {
            imagenes[i].style.display = 'block';
        }else
        {
            imagenes[i].style.display = 'none';
        }
    }

}
function MostrarImpares()
{
    var imagenes = document.getElementsByTagName('img');
    for (var i = 0; i < imagenes.length; i++)
    {
        if(i % 2 === 0)
        {
            imagenes[i].style.display = 'none';
        }else
        {
            imagenes[i].style.display = 'block';
        }
    }
}
function Resetear()
{
     location.reload();    
}