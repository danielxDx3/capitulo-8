recuperarTexto = function(idComponente) {
    let cmpTexto = document.getElementById(idComponente);
    return cmpTexto.value;
}

recuperarEntero = function(idComponente) {
    let valor = recuperarTexto(idComponente);
    return parseInt(valor);
}

recuperarFlotante = function(idComponente) {
    let valor = recuperarTexto(idComponente);
    return parseFloat(valor);
}

cambiarTexto = function(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

cambiarImagen = function(idComponente, imagen) {
    let componente = document.getElementById(idComponente);
    componente.src = imagen;
}

lanzarDado = function() {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 6;
    let numeroEntero = Math.floor(numeroMultiplicado);
    return numeroEntero + 1;
}

jugar = function() {
    let aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    
    let mensaje;
    let comentario;
    
    if (aleatorio > 3) {
        mensaje = "¡Ganaste!";
        comentario = "El número es mayor a 3";
    } else {
        mensaje = "¡Estás de malas!";
        comentario = "El número es menor o igual a 3";
    }
    
    cambiarTexto("resultadoMensaje", mensaje);
    cambiarTexto("resultadoComentario", comentario);
}
