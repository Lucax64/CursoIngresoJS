function mostrar() {
    /*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
    hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.
    
    Testeo con los siguientes datos
    ( d , -150(mal) , -50(bien))
    ( z , 0)
    ( g , 20)
    ( a , 150(mal) , 0(bien))
    ( b , 3)
    ( k , 7) */

    var letra;
    var numero;
    var acumuladorNumeros = 0
    var contadorPares = 0;
    var contadorImpares = 0;
    var ceros = 0;
    var promedioPositivos;
    var sumaNegativos;
    var maximo;
    var minimo;
    var flag = 0;
    var seguir;

    do {

        numero = parseInt(prompt("Ingrese un numero (-100 - 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)); {
            numero = parseInt(prompt("Error. Ingrese un numero (-100 - 100): "));
        }

        acumuladorNumeros = acumuladorNumeros + numero;

        if (numero % 2 == 0) {
            contadorPares++;
        }

        else if (numero == 0) {
            ceros++;
        }

        else {
            contadorImpares++;
        }

        seguir = prompt("Desea ingresar otra letra y numero? (s-n)");

    } while (seguir == "s");

    document.write("Cantidad de numeros pares: " + contadorPares + "</br>");
    document.write("Cantidad de numeros impares: " + contadorImpares + "</br>");
    document.write("Cantidad de ceros: " + ceros + "</br>");


}