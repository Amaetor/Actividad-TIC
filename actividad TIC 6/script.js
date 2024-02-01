function comprobar() {
    let numero = parseInt(document.getElementById("numero").value, 10);
    if (numero%2==0){
        document.getElementById("resultado").innerHTML= "El número es par";
        console.log("par")
    }
    else{
        document.getElementById("resultado").innerHTML= "EL número es impar";
        console.log("impar")
    }
}