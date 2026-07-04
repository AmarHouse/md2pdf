/**
 * Preview Module
 * Gerencia a visualização do conteúdo
 */

const Preview = (() => {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    let fileContent = '';

    const init = () => {
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('drop', handleDrop);
        fileInput.addEventListener('change', handleFileSelect);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFileSelect = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            fileContent = e.target.result;
            updatePreview();
            Storage.set('lastFile', {
                name: file.name,
                content: fileContent,
                timestamp: new Date().toISOString()
            });
        };
        reader.readAsText(file);
    };

    const updatePreview = () => {
        const lines = fileContent.split('\n').slice(0, 20);
        preview.innerHTML = `<pre>${escapeHtml(lines.join('\n'))}</pre>`;
    };

    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    const getContent = () => fileContent;

    return {
        init,
        getContent
    };
})();

document.addEventListener('DOMContentLoaded', Preview.init);
