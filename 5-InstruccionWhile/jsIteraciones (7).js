function mostrar() {

	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio = 0;
	var seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
		}
		
		acumulador = acumulador + numero;

		contador++;

		seguir = prompt("Desea ingresar otro numero?");

	} while (seguir == "s");

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN