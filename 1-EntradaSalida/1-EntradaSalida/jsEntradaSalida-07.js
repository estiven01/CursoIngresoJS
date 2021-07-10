/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{

let num1;
let num2;
let suma;
let mensaje;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

suma = num1 + num2;

mensaje = suma;

alert(mensaje);


}

function restar()
{

let num1;
let num2;
let resta;
let mensaje;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resta = num1 - num2;

mensaje = resta;

alert(mensaje);
	
}

function multiplicar()
{ 

let num1;
let num2;
let multiplicacion;
let mensaje;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

multiplicacion = num1 * num2;

mensaje = multiplicacion;

alert(mensaje);

}

function dividir()
{

let num1;
let num2;
let division;
let mensaje;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

division = num1 / num2;

mensaje = division;

alert(mensaje);
	
}

