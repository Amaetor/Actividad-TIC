function calcular() {
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    a = parseInt(document.getElementById("numero1").value, 0);
    b = parseInt(document.getElementById("numero2").value, 0);
    c = a + b;
    d = a - b;
    e = a * b;
    f = a / b;
    g = a % b;
    document.getElementById("numero").innerHTML = ("El primer número es " + a + "<br>El segundo número es " + b +"<br>El valor de la suma es: " + c + " <br>El valor de la resta es: " + d + "<br>El valor de la multiplicación es: " + e + "<br>El valor de la división es: " + f + "<br>El resto es " + g);
}