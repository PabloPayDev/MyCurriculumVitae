// --- PDF Generator Function ---
function generatePDF(){
    const elementoHTML = document.querySelector('.mainContainer'); 
    
    // --- Html2Pdf Options ---
    const opciones = {
        filename: 'Curriculum Vitae - Pablo Javier Becerra Vargas - 10932239.pdf', 
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' } 
    };

    html2pdf(elementoHTML, opciones);
    console.log("Convertio");
}
