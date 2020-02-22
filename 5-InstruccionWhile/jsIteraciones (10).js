function mostrar() {

	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorPares = 0;
	var contadorCeros = 0;
	var PromedioPositivos;
	var PromedioNegativos;
	var numero;
	var diferencia;
	var seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
		}

		if (numero >= 0) {
			positivo = positivo + numero;
		}
		else {
			negativo = negativo + numero;
		}



	} while (seguir == "s");


}//FIN DE LA FUNCIÓN