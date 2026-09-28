let jugadaUsuario = prompt("Ingresa: Piedra, Papel o Tijera");

let numeroRandom = Math.random();
let jugadaComputadora = "";

if (numeroRandom < 0.34) {
    jugadaComputadora = "Piedra";
} else if (numeroRandom <= 0.67) {
    jugadaComputadora = "Papel";
} else {
    jugadaComputadora = "Tijera";
}

console.log("Tu elegiste: " + jugadaUsuario);
console.log("La computadora eligio: " + jugadaComputadora);

if (jugadaUsuario === jugadaComputadora) {
    console.log("Es un empate!");
} else if (
    (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
    (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra") ||
    (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel")
) {
    console.log("Ganaste vos!");
} else {
    console.log("Gano la computadora!");
}