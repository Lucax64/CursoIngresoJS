/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var num1
var num2
var resultado

//De texto a numero
num1 = parseInt(document.getElementById("numeroUno").value);
num2 = parseInt(document.getElementById("numeroDos").value);

/*Otra manera:

num1 = (document.getElementById("numeroUno").value);
num2 = (document.getElementById("numeroDos").value);

num1 = parseInt(num1);
num2 = parseInt(num2); 
*/

resultado = num1 + num2;

alert("La suma es " + resultado);
}

/*
STRING + STRING = STRING
STRING + NUMBER = STRING
NUMBER + STRING = STRING
NUMBER + NUMBER = NUMBER
*/
