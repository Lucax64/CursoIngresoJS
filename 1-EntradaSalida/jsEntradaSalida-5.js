/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //Declaro las variable
    var nombre;
    var edad;

//Tomos los datos desde las cajas de texto
//"(elNombre y laEdad salen del html)"
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

//+ para concatenar (unir) entre los strings
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

