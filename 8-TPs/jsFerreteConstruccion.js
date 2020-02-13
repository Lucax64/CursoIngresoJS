/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var rectangulo;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    
    rectangulo = ((largo + ancho) * 2) * 3;

    alert("Se necesitan " + rectangulo + "m de alambre");

}
function Circulo () 
{
    var radio;
    var circulo;

    radio = parseFloat(document.getElementById("Radio").value);

    circulo = (2 * 3.14 * radio) * 3;

    alert("Se necesitan " + circulo + "m de alambre");

}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;
    var area;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}