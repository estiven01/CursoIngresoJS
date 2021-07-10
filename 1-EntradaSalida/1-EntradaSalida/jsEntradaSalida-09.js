/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

let sueldo;
let nuevosueldo;
let aumento;
//para calcular el nuevo sueldo deberia sumarle al sueldo original el aumento 
// el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por cien
sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

aumento = sueldo * 10 / 100;

prompt("ingrese aumento");

nuevosueldo = sueldo + aumento;

document.getElementById("txtIdResultado").value = nuevosueldo;

}
