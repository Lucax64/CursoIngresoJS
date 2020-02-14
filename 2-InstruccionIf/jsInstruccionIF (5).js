function mostrar() {
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;

    if (edad < 13 || edad > 17)  // || = or
    {
        alert("Usted no es adolecente");
    }

}//FIN DE LA FUNCIÓN