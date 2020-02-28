function mostrar()
{
    var numero;
    var contadorDivisores = 0;

    numero = parseInt(prompt("Ingrese un numero"));

    while (isNaN(numero)){
        numero = parseInt(prompt("Eso no es numero. Ingrese un numero: "));
    }

    for (i = 1; i <= numero; i++) {

        if (numero % i == 0) {
            console.log(i);
            contadorDivisores++;
        }
    }

    console.log("Cantidad de divisores encontrados: " + contadorDivisores);


}//FIN DE LA FUNCIÓN