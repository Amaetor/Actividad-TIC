function comprobar() {
    let numero =  parseInt(document.getElementById("numero").value, 10);
    if (numero >= 0 && numero <=4) {
        document.getElementById("mensaje").innerHTML= "Suspenso";
    }

    if (numero <0) {
        document.getElementById("mensaje").innerHTML= "Esta respuesta no es válida";
    }

    if (numero >= 5 && numero <6) {
        document.getElementById("mensaje").innerHTML= "Suficiente";
    }

    if (numero >= 6 && numero <7) {
        document.getElementById("mensaje").innerHTML= "Bien"
    }

    if (numero >= 7 && numero <9) {
        document.getElementById("mensaje").innerHTML= "Notable"
    }

    if (numero >= 9 && numero <=10) {
        document.getElementById("mensaje").innerHTML= "Sobresaliente"
    }

    if (numero >10) {
        document.getElementById("mensaje").innerHTML= "Esta respuesta no es válida"
    }
}