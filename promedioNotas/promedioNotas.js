function calcularPromedioNotas() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
 
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, ingrese valores válidos para todas las notas.");
        return;
    }
    
    const promedio = calcularPromedio(nota1, nota2, nota3);
    
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El promedio es: ${promedio.toFixed(2)}`;
    
    const imagen = document.getElementById('resultadoImagen');
    if (promedio > 7) {
        imagen.src = 'exito.gif';
    } else {
        imagen.src = 'yakuza.gif'; 
    }

    imagen.style.display = 'block';
}
