let puntos = 8;
let lanzamiento = 5;

function jugar() {
    if (lanzamiento > 0) {
        const numeroDado = lanzarDado();
        mostrarCara(numeroDado);
        modificarPuntos(numeroDado);
        modificarLanzamiento();
    } else {
        alert("No tienes más lanzamientos.");
        document.querySelector('input[type="button"]').disabled = true;
    }
}


function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function mostrarCara(numero) {
    if (numero === 1) {
        cambiarImagen("imgDado", "dados1.png");
    } else if (numero === 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if (numero === 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if (numero === 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if (numero === 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if (numero === 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}

function modificarPuntos(numero) {
    puntos += numero;
    cambiarTexto("lblPunto", puntos);

    if (puntos > 20) {
        alert("¡GANASTE!!");
        limpiar();
    }
}
function modificarLanzamiento() {
    lanzamiento -= 1;
    cambiarTexto("lblLanzamiento", lanzamiento);


    if (lanzamiento <= 0) {
        alert("GAME OVER");
        limpiar();
    }
}

function limpiar() {
    puntos = 8;
    lanzamiento = 5;

    cambiarTexto("lblPunto", puntos);
    cambiarTexto("lblLanzamiento", lanzamiento);

    cambiarImagen("imgDado", "");

    document.querySelector('input[type="button"]').disabled = false;
}

function cambiarImagen(id, src) {
    document.getElementById(id).src = src;
}

function cambiarTexto(id, texto) {
    document.getElementById(id).textContent = texto;
}
