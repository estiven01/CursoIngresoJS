/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let nuevoImporte;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

    descuento = prompt("Ingrese el porcentaje de descuento");
    descuento = parseInt(descuento);

	nuevoImporte = importe - importe * descuento / 100 ;

	document.getElementById("txtIdResultado").value = nuevoImporte;
}
