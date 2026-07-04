/**
 * Storage Management Module
 * Gerencia dados locais no localStorage
 */

const Storage = (() => {
    const PREFIX = 'md2epub_';

    return {
        set: (key, value) => {
            try {
                localStorage.setItem(PREFIX + key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.error('Erro ao salvar no localStorage:', e);
                return false;
            }
        },

        get: (key, defaultValue = null) => {
            try {
                const item = localStorage.getItem(PREFIX + key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.error('Erro ao ler do localStorage:', e);
                return defaultValue;
            }
        },

        remove: (key) => {
            try {
                localStorage.removeItem(PREFIX + key);
                return true;
            } catch (e) {
                console.error('Erro ao remover do localStorage:', e);
                return false;
            }
        },

        clear: () => {
            try {
                Object.keys(localStorage).forEach(key => {
                    if (key.startsWith(PREFIX)) {
                        localStorage.removeItem(key);
                    }
                });
                return true;
            } catch (e) {
                console.error('Erro ao limpar localStorage:', e);
                return false;
            }
        }
    };
})();
