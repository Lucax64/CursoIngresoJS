/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio() {

    var precio = 35;
    var cantidad;
    var marca;
    var porcDescuento;
    var descuento;
    var precioConDescuento;
    var importeFinal;
    var iibb;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad > 0) {
        switch (cantidad) {

            case 1:
            case 2:
                porcDescuento = 0;
                break;
            case 3:
                if (marca == "ArgentinaLuz") {
                    porcDescuento = 15;
                }
                else if (marca == "FelipeLamparas") {
                    porcDescuento = 10;
                }
                else {
                    porcDescuento = 5;
                }
                break;
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    porcDescuento = 25;
                }
                else {
                    porcDescuento = 20;
                }
                break;
            case 5:
                if (marca == "ArgentinaLuz") {
                    porcDescuento = 40;
                }
                else {
                    porcDescuento = 30;
                }
                break;
            default:
                porcDescuento = 50;

        }
        //------------------------------------
        descuento = precio * porcDescuento / 100;

        precioConDescuento = precio - descuento;

        document.getElementById("precioDescuento").value = precioConDescuento;

        importeFinal = precioConDescuento * cantidad;

        if (importeFinal > 120) {
            iibb = importeFinal * 10 / 100;
            importeFinal = importeFinal + iibb;

            alert("Total a pagar $ " + importeFinal + " Usted pago $ " + iibb + " de ingresos brutos");

        }
        else {
            alert("Total a pagar $ " + importeFinal);
        }
    }
    else {
        alert("No es una cantidad valida");
    }
}
/*
function CalcularPrecio() {
    var lamparas = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precio = lamparas * 35;
    var impuesto = precio * 0.1;

    if (lamparas == 6) {
        document.getElementById("precioDescuento").value = precio - (precio * 0.5);
    }
    else if (lamparas == 5) {
        switch (marca) {
            case "ArgentinaLuz":
                document.getElementById("precioDescuento").value = precio - (precio * 0.4);
                break;
            default:
                document.getElementById("precioDescuento").value = precio - (precio * 0.3);
        }
    }
    else if (lamparas == 4) {
        switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                document.getElementById("precioDescuento").value = precio - (precio * 0.25);
                break;
            default:
                document.getElementById("precioDescuento").value = precio - (precio * 0.2);
        }
    }
    else if (lamparas == 3) {
        switch (marca) {
            case "ArgentinaLuz":
                document.getElementById("precioDescuento").value = precio - (precio * 0.15);
                break;
            case "FelipeLamparas":
                document.getElementById("precioDescuento").value = precio - (precio * 0.1);
                break;
            default:
                document.getElementById("precioDescuento").value = precio - (precio * 0.05);
        }
    }
    else if (lamparas > 6) {
        document.getElementById("precioDescuento").value = precio - (precio * 0.5) + impuesto;
        alert("Usted pago $" + impuesto + " de IIBB.");
    }
    else {
        document.getElementById("precioDescuento").value = precio;
    }
}*/

