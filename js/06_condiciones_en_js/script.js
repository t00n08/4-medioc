function temperatura() {
    let clima = parseInt(prompt("Ingresa la temperatura: "));
    if (clima <= 0) {
        alert("Hace frío");
    } else if (clima <= 25) {
        alert("La temperatura es agradable")
    } else if (clima >= 25) {
        alert("hace calor");
    }
}