/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//definimos las variables 
let nombre; 
let edad;
let mensaje;


nombre = document.getElementById("txtIdNombre").value;

edad = document.getElementById("txtIdEdad").value;

mensaje = "Usted se llama" + nombre + "y tiene" + edad + "años.";

//mostramos el dato
alert(mensaje);
}

