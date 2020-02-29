/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 ) */


function mostrar() {
    var temperatura;
    var marca;
    var peso;
    var contadorPares = 0;
    var contadorCong = 0;
    var marcaPesada;
    var pesoMaximoMas0;
    var pesoMaximo;
    var pesoMinimo;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var seguir;
    var flag = 0;

    //--------------------------------------------

    do {
        marca = prompt("Ingrese marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }
        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > pesoMaximoMas0) && temperatura > 0) {
            pesoMaximoMas0 = peso;
            marcaPesada = marca;
            flag = 1;
        }

        if (temperatura < 0) {
            contadorCong++;
        }

        acumuladorPeso = acumuladorPeso + peso;

        if (contador == 0 || peso > pesoMaximo) {
            pesoMaximo = peso;
        }
        if (contador == 0 || peso < pesoMinimo) {
            pesoMinimo = peso;
        }

        contador++;

        seguir = prompt("Quiere continuar?:");
    } while (seguir == 's');

    promedioPeso = acumuladorPeso / contador;

    if( flag == 0){
        marcaPesada = "sin datos";
    }

    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCong + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("f) El peso máximo: " + pesoMaximo + " y el mínimo: " + pesoMinimo + "</br>");


}





/*
function mostrar()
{    
var marca;
var peso;
var temperatura;
var promedioPeso;
var acumuladorPeso = 0;
var contador = 0;
var contadorTempPares = 0;
var contadorTempBajo0 = 0;
var pesoMax;
var pesoMin;
var marcaMax;
var seguir;

do{

    marca = prompt("Ingrese la marca: ");

    peso = parseInt(prompt("Ingrese el peso (1 - 100): "));
    while (peso < 1 || peso > 100 || isNaN(peso)) {
        peso = parseInt(prompt("Peso invalido. Ingrese el peso (1 - 100): "));
    }

    temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento (-30 - 30): "));
    while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento (-30 - 30): "))
    }

    if (temperatura % 2 == 0){
        contadorTempPares++;
    }


    if (peso > pesoMax || contador == 0) {
        pesoMax = peso;
        marcaMax = marca;
    }

    if (peso < pesoMin || contador == 0) {
        pesoMin = peso;
    }


    if (temperatura < 0){
        contadorTempBajo0++;
    }

    contador++;

    seguir = prompt("Desea ingresar de nuevo? (s-n)");

}while (seguir == 's');

} */


