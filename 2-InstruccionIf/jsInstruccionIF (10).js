function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo = 10;
	var minimo = 1;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (numero >= 9) {
		alert("Excelente. Nota: " + numero);

	}

	else if (numero < 4) {
		alert("Vamos, la proxima se puede. Nota: " + numero);
	}

	else {
		alert("APROBÓ. Nota: " + numero);
	}


}//FIN DE LA FUNCIÓN