function mostrar() {
    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("Ingrese un numero"));

    while (isNaN(numero)){
        numero = parseInt(prompt("Eso no es numero. Ingrese un numero: "));
    }

    for (i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            console.log(i);
            contadorPares++;
        }
    }

    console.log("Cantidad de pares encontrados: " + contadorPares);

}//FIN DE LA FUNCIÓN