function Descuento()
{
var producto = document.getElementById("producto").value;
var marca = document.getElementById("marca").value;
var precio = 3;
precioConDescuento = 0;

if(producto === "leche" && marca === "asturiana")
{
    precioConDescuento = precio - (precio * 0.05);
    document.write("Con descuento: " + precioConDescuento + "€");
}
else if(producto == "leche" && marca == "pascual")
{
    precioConDescuento = precio - (precio * 0.10);
    document.write("Con descuento: " + precioConDescuento + "€");
}else
{
    document.write("El precio de producto no tiene descuento " + precio + "€");
}

}