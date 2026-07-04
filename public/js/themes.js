/**
 * Themes Module
 * Gerencia temas da aplicação
 */

const Themes = (() => {
    const DARK_MODE_KEY = 'darkMode';

    const init = () => {
        const isDarkMode = Storage.get(DARK_MODE_KEY, false);
        if (isDarkMode) {
            enableDarkMode();
        }
    };

    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        Storage.set(DARK_MODE_KEY, true);
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        Storage.set(DARK_MODE_KEY, false);
    };

    return {
        init,
        toggleDarkMode,
        enableDarkMode,
        disableDarkMode
    };
})();

document.addEventListener('DOMContentLoaded', Themes.init);
