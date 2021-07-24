function mostrar()
{
	let estacion;
	let destino;
	let precioFinal;
	let descuento = 0;
	let aumento = 0;
	const PRECIO = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":
		    if(destino == "Bariloche")
		    {
		    	aumento = 20;
		    }
		    else if(destino == "Mar del plata")
		    {
		    	descuento = 20;
		    }
		    else
		    {
		    	descuento = 10;
		    }
		    break;
		case "Verano":
		     if(destino == "Bariloche")
		    {
		    	descuento = 20;
		    }
		    else if(destino == "Mar del plata")
		    {
		    	aumento = 20;
		    }
		    else
		    {
		    	aumento = 10;
		    }
		    break;
		case "Otoño":
		case "Primavera":
		     if(destino != "Cordoba")
		    {
		    	aumento = 10;
		    }
		    else
		    {
		    	precioFinal = PRECIO;
		    }
		    break;
	}
	if(aumento !=0)
	{
		precioFinal = PRECIO + PRECIO * aumento / 100;
	}
	else if(descuento !=0)
	{
		precioFinal = PRECIO - PRECIO * descuento / 100;
	}
	alert("Precio final $" + precioFinal);
}//FIN DE LA FUNCIÓN