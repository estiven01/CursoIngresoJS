/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//definimos las variables
	let ingresesunombre;
	//pedimos dato al usuario
	ingresesunombre = document.getElementById("txtIdNombre").value;
	//mostramos dato
	alert(ingresesunombre);
}