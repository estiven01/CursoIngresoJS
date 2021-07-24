/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//definimos las variables 
let nombre; 
let edad;

nombre = document.getElementById("txtIdNombre").value;

edad = document.getElementById("txtIdEdad").value;

//mostramos el dato
alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

