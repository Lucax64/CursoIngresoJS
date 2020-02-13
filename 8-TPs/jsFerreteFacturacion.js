/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = precio1 + precio2 + precio3;

    alert("La suma es de $" + suma);

}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio es de $" + promedio);
    
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;
    var resultado;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;

    promedio = suma * 21 / 100;

    resultado = suma + promedio;

    alert("La suma es de $" + suma + ", que con 21% de IVA se va a $" + resultado);

}