/**
 * EPUB Generator Module
 * Converte Markdown para EPUB
 */

const EPUBGenerator = (() => {
    const epubBtn = document.getElementById('epubBtn');

    const init = () => {
        if (epubBtn) {
            epubBtn.addEventListener('click', generateEPUB);
        }
    };

    const generateEPUB = async () => {
        const content = Preview.getContent();
        if (!content) {
            alert('Por favor, carregue um arquivo primeiro!');
            return;
        }

        try {
            epubBtn.disabled = true;
            epubBtn.textContent = 'Gerando EPUB...';

            // Simular geração de EPUB
            const epub = createEPUBStructure(content);
            downloadEPUB(epub);

            epubBtn.textContent = 'Exportar para EPUB';
            epubBtn.disabled = false;
            alert('EPUB gerado com sucesso!');
        } catch (error) {
            console.error('Erro ao gerar EPUB:', error);
            alert('Erro ao gerar EPUB: ' + error.message);
            epubBtn.textContent = 'Exportar para EPUB';
            epubBtn.disabled = false;
        }
    };

    const createEPUBStructure = (content) => {
        return {
            metadata: {
                title: 'Documento',
                author: 'Autor',
                language: 'pt-BR'
            },
            content: content
        };
    };

    const downloadEPUB = (epub) => {
        const dataStr = JSON.stringify(epub);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'documento.epub';
        link.click();
        URL.revokeObjectURL(url);
    };

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', EPUBGenerator.init);
