function Factorial() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    let num = parseInt(numero.value);
    let factorial = 1;

    if (num < 0) {
        resultado.innerText = "Error: El número debe ser positivo.";
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        resultado.innerText = `El factorial de ${num} es ${factorial}`;
    }
}