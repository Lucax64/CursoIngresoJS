function mostrar() {

	var contador = 0;
	var numero;
	var maximo;
	var minimo;
	var seguir;
	// declarar variables

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
		}
		if (contador == 0) {
			maximo = numero;
			minimo = numero;
		}

		else if (numero > maximo) {
			maximo = numero;
		}
		else if (numero < minimo) {
			minimo = numero;
		}

		contador++;

		seguir = prompt("Desea ingresar otro numero?");

	} while (seguir == "s");

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;

	/*	var flag = 0;
		var numero;
		var maximo;
		var minimo;
	
		do {
			numero = parseInt(prompt("Ingrese un numero:"));
			while (isNaN(numero)) {
				numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
			}
	
			 if (flag == 0 || numero > maximo) {
				maximo = numero;
			}
			 if (flag == 0 || numero < minimo) {
				minimo = numero;
				flag == 1;
			}
	
			contador++;
	
			seguir = prompt("Desea ingresar otro numero?");
	
		} while (seguir == "s");
	*/

}//FIN DE LA FUNCIÓN