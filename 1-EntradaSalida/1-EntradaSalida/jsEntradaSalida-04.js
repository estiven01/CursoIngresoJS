/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//definimos las variables
	let nombre = prompt("Escriba su nombre")
	document.getElementById("txtIdNombre").value = nombre;
	
}

