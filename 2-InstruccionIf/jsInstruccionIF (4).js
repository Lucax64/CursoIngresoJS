function mostrar() {
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;

    if (edad >= 13 && edad <= 17)  //&& = and
    {
        alert("Usted es adolecente");
    }

    /*
    if (!(edad < 13 || edad > 17)  ! = not
    {
        alert("Usted es adolecente");
    }
    */

}//FIN DE LA FUNCIÓN