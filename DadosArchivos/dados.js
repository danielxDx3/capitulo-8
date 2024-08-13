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
