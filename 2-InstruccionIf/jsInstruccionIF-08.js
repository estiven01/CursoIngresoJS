function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let edadValida = edad < 18 && edad >=0;
    
    edad = parseInt(edad);
	

    //if(!(estadoCivil != "Soltero" && edadValida)) {
    	if(edad > 17 && estadoCivil == "Soltero") {
        alert("Es soltero y no es menor");
    }

	
	


}//FIN DE LA FUNCIÓN