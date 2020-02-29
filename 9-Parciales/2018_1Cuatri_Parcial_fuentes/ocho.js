function mostrar() {
    var letra;
    var numero;
    var acumuladorPos = 0;
    var contadorPos = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var ceros = 0;
    var promedioPositivos;
    var sumaNegativos = 0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;
    var flag = 0;
    var seguir;

    do {

        //Validacion
        letra = prompt("Ingrese una letra: ");
        while (letra < 'A' || letra > 'Z' && letra < 'a' || letra > 'z') {
            letra = prompt("Letra invalida. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 - 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero (-100 - 100): "));
        }

        //Pares e Impares
        if (numero % 2 == 0) {
            contadorPares++;
        }

        else {
            contadorImpares++;
        }

        //Positivos, Negativos y Ceros
        if (numero > 0) {
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }

        else if (numero < 0) {
            sumaNegativos = sumaNegativos + numero;
        }

        else {
            ceros++;
        }

        //Minimo y Maximo
        if (numero < numeroMinimo || flag == 0) {
            numeroMinimo = numero;
            letraMinimo = letra;
        }

        if (numero > numeroMaximo || flag == 0) {
            numeroMaximo = numero;
            letraMaximo = letra;
            flag = 1;
        }

        seguir = prompt("Desea ingresar otra letra y numero? (s-n)");

    } while (seguir == "s");


    //Promedio
    if (contadorPos != 0) {
        promedioPositivos = acumuladorPos / contadorPos;
    }


    document.write("Cantidad de numeros pares: " + contadorPares + "</br>");
    document.write("Cantidad de numeros impares: " + contadorImpares + "</br>");
    document.write("Cantidad de ceros: " + ceros + "</br>");
    document.write("El promedio de los numeros positivos es: " + promedioPositivos + "</br>");
    document.write("La suma de los negativos es: " + sumaNegativos + "</br>");
    document.write("El numero maximo es: " + numeroMaximo + " , y su letra es : " + letraMaximo + "</br>");
    document.write("El numero minimo es: " + numeroMinimo + " , y su letra es : " + letraMinimo + "</br>");

}