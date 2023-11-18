function printLikePrinter(text, elementId, speed) {
    let i = 0;
    let interval = setInterval(function() {
        if (i < text.length) {
            let char = text.charAt(i);
            if (char === '\n') {
                // Inserta un elemento <br> para el salto de línea
                document.getElementById(elementId).appendChild(document.createElement('br'));
            } else {
                // Crea un nodo de texto para el carácter y lo agrega
                let textNode = document.createTextNode(char);
                document.getElementById(elementId).appendChild(textNode);
            }
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Texto a imprimir, con saltos de línea
const text = "Motivos de consulta: Tos con flema amarillenta y con sangre\n" +
             "\n" + // Salto de línea adicional
             "Antecedentes: Tabaquista, Padre fallecido por cáncer de pulmón\n" +
             "\n" + // Salto de línea adicional
             "Evolución: Paciente presenta tos intensa con flema amarillenta y rasgos de sangre, pérdida de peso de 10 kilos en 6 meses, antecedente familiar de cáncer de pulmón\n" +
             "\n" + // Salto de línea adicional
             "Plan terapéutico: Realizar radiografía de tórax y prueba de sangre\n" +
             "para confirmar diagnóstico y determinar tratamiento adecuado";


// Añadir un listener al botón para iniciar la impresión del texto
const button = document.getElementById('print-button');
button.addEventListener('click', function() {
    document.getElementById('text-area').textContent = ''; // Limpiar el área de texto antes de imprimir
    printLikePrinter(text, 'text-area', 100); // Ajusta la velocidad de impresión según sea necesario
});
