function printLikePrinter(text, elementId, speed) {
    let i = 0;
    let interval = setInterval(function() {
        if (i < text.length) {
            let char = text.charAt(i);
            document.getElementById(elementId).value += char;
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

const text = "Motivos de consulta: Tos con flema amarillenta y con sangre\n\n" +
             "Antecedentes: Tabaquista, Padre fallecido por cáncer de pulmón\n\n" +
             "Evolución: Paciente presenta tos intensa con flema amarillenta y rasgos de sangre, pérdida de peso de 10 kilos en 6 meses, antecedente familiar de cáncer de pulmón\n\n" +
             "Plan terapéutico: Realizar radiografía de tórax y prueba de sangre\n" +
             "para confirmar diagnóstico y determinar tratamiento adecuado";

const button = document.getElementById('print-button');
button.addEventListener('click', function() {
    document.getElementById('text-area').value = ''; // Limpia el área de texto antes de imprimir
    printLikePrinter(text, 'text-area', 100); // Ajusta la velocidad de impresión según sea necesario
});
