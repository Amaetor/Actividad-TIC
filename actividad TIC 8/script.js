function MensajeIf() {
    const hora = parseInt(document.getElementById("hora").value, 10);
    let mensaje;

    if (hora >= 0 && hora < 7) {
        mensaje = "¡Buenas noches!";
    } else if (hora >= 7 && hora < 12) {
        mensaje = "¡Buenos días!";
    } else if (hora >= 12 && hora < 21) {
        mensaje = "¡Buenas tardes!";
    } else if (hora >= 21 && hora < 24) {
        mensaje = "¡Buenas noches!";
    }
     else {
    mensaje = "Esta respuesta no es válida";   
    }

    document.getElementById("resultado").innerHTML = mensaje;
}

function MensajeSwitch() {
    let mensaje1 = parseInt(document.getElementById("hora"), 10);
    switch (mensaje1) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("resultado").innerHTML = "Buenos días";
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            document.getElementById("resultado").innerHTML = "Buenas tardes";
        break;
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            document.getElementById("resultado").innerHTML = "Buenas noches";
        break;
        default:
            document.getElementById("resultado").innerHTML = "Esta respuesta no es válida";
    }

}
