function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var promedio = 0;
	var numero;

	while (contador < 5) {
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
	}
	promedio = acumulador / 5


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN