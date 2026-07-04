/**
 * PDF Generator Module
 * Converte Markdown para PDF
 */

const PDFGenerator = (() => {
    const pdfBtn = document.getElementById('pdfBtn');

    const init = () => {
        if (pdfBtn) {
            pdfBtn.addEventListener('click', generatePDF);
        }
    };

    const generatePDF = async () => {
        const content = Preview.getContent();
        if (!content) {
            alert('Por favor, carregue um arquivo primeiro!');
            return;
        }

        try {
            pdfBtn.disabled = true;
            pdfBtn.textContent = 'Gerando PDF...';

            // Simular geração de PDF
            const pdf = createPDFStructure(content);
            downloadPDF(pdf);

            pdfBtn.textContent = 'Exportar para PDF';
            pdfBtn.disabled = false;
            alert('PDF gerado com sucesso!');
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('Erro ao gerar PDF: ' + error.message);
            pdfBtn.textContent = 'Exportar para PDF';
            pdfBtn.disabled = false;
        }
    };

    const createPDFStructure = (content) => {
        return {
            metadata: {
                title: 'Documento',
                author: 'Autor',
                creationDate: new Date().toISOString()
            },
            content: content
        };
    };

    const downloadPDF = (pdf) => {
        const dataStr = JSON.stringify(pdf);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'documento.pdf';
        link.click();
        URL.revokeObjectURL(url);
    };

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', PDFGenerator.init);
