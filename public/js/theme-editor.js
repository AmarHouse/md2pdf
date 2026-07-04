/**
 * Theme Editor Module
 * Permite editar cores e estilos do tema
 */

const ThemeEditor = (() => {
    const DEFAULT_THEME = {
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        successColor: '#28a745',
        dangerColor: '#dc3545',
        warningColor: '#ffc107',
        infoColor: '#17a2b8',
        lightColor: '#f8f9fa',
        darkColor: '#343a40'
    };

    const init = () => {
        const saved = Storage.get('customTheme', DEFAULT_THEME);
        applyTheme(saved);
    };

    const applyTheme = (theme) => {
        const root = document.documentElement;
        Object.keys(theme).forEach(key => {
            const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty(cssVar, theme[key]);
        });
        Storage.set('customTheme', theme);
    };

    const resetTheme = () => {
        applyTheme(DEFAULT_THEME);
    };

    return {
        init,
        applyTheme,
        resetTheme
    };
})();

document.addEventListener('DOMContentLoaded', ThemeEditor.init);
