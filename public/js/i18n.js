/**
 * Internationalization (i18n) Module
 * Suporta múltiplos idiomas
 */

const i18n = (() => {
    const DEFAULT_LANGUAGE = 'pt-BR';
    const LANGUAGE_KEY = 'appLanguage';

    const translations = {
        'pt-BR': {
            'title': 'MD2EPUB Premium',
            'subtitle': 'Converta seus documentos Markdown em EPUB ou PDF',
            'uploadTitle': 'Carregar Arquivo',
            'dropText': 'Arraste seu arquivo aqui ou clique para selecionar',
            'exportEPUB': 'Exportar para EPUB',
            'exportPDF': 'Exportar para PDF',
            'preview': 'Visualização',
            'settings': 'Configurações',
            'darkMode': 'Modo Escuro'
        },
        'en': {
            'title': 'MD2EPUB Premium',
            'subtitle': 'Convert your Markdown documents to EPUB or PDF',
            'uploadTitle': 'Load File',
            'dropText': 'Drag your file here or click to select',
            'exportEPUB': 'Export to EPUB',
            'exportPDF': 'Export to PDF',
            'preview': 'Preview',
            'settings': 'Settings',
            'darkMode': 'Dark Mode'
        }
    };

    const init = () => {
        const saved = Storage.get(LANGUAGE_KEY, DEFAULT_LANGUAGE);
        setLanguage(saved);
    };

    const setLanguage = (lang) => {
        const t = translations[lang] || translations[DEFAULT_LANGUAGE];
        document.documentElement.lang = lang;
        Storage.set(LANGUAGE_KEY, lang);
    };

    const translate = (key, lang = null) => {
        const language = lang || Storage.get(LANGUAGE_KEY, DEFAULT_LANGUAGE);
        return (translations[language] || translations[DEFAULT_LANGUAGE])[key] || key;
    };

    return {
        init,
        setLanguage,
        translate,
        translations
    };
})();

document.addEventListener('DOMContentLoaded', i18n.init);
