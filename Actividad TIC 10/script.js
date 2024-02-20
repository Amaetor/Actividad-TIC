function Calificar() {
    const alumnos = ["Alumno 1", "Alumno 2", "Alumno 3", "Alumno 4"];
    const notas = [];

    for (let i = 0; i < 4; i++) {
        let nota = parseInt(prompt(`Ingresa la nota del alumno ${alumnos[i]}:`));
        if (!isNaN(nota)) {
            notas.push(nota);
        } else {
            alert("Error: La nota debe ser un número.");
            i--;
        }
    }

    console.log("Notas:", notas);
}