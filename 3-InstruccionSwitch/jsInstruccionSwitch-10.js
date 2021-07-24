function mostrar()
{
	let estacion;
	let destino;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":
		    if(destino == "Bariloche")
		    {
		    	alert("Se viaja");
		    }
		    else
		    {
		    	alert("No se viaja");
		    }
		    break;
		case "Verano":
		    if(destino == "Mar del plata")
		    {
		    	alert("Se viaja");
		    }
		    else if(destino == "Cataratas")
		    {
		    	alert("Se viaja");
		    }
		    else
		    {
		    	alert("No se viaja");
		    }
		case "Otoño":
		    if(destino != "Mendoza")
		    {
		    	alert("Se viaja");
		    }
		case "Primavera":
		    if(destino == "Bariloche")
		    {
		    	alert("No se viaja");
		    }
		    else
		    {
		    	alert("Se viaja");
		    }
	}

}//FIN DE LA FUNCIÓN