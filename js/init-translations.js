// Initialize translations after DOM is fully loaded
(function() {
    'use strict';
    
    function setupTranslations() {
        // Check if translations are loaded
        if (typeof window.translations === 'undefined' || 
            typeof window.translatePage !== 'function' ||
            typeof window.initTranslations !== 'function') {
            return;
        }
        
        // Initialize translations with saved language preference
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        window.translatePage(savedLang);
        
        // Setup language selector
        const languageSelector = document.getElementById('languageSelect');
        if (!languageSelector) {
            return;
        }
        
        // Set the current language in the selector
        languageSelector.value = savedLang;
        
        // Add event listener for language changes
        languageSelector.addEventListener('change', function() {
            const selectedLang = this.value;
            
            // Save preference
            localStorage.setItem('preferredLanguage', selectedLang);
            
            // Update page
            window.translatePage(selectedLang);
            
            // Show notification
            showLanguageNotification(selectedLang);
        });
    }
    
    function showLanguageNotification(lang) {
        const langNames = {
            'es': 'Español',
            'en': 'English',
            'zh': '中文'
        };
        
        // Remove any existing notification
        const existing = document.querySelector('.language-notification');
        if (existing) {
            existing.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.textContent = `Language changed to: ${langNames[lang]}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(99, 102, 241, 0.95);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Wait a bit more for header/footer to load
            setTimeout(setupTranslations, 200);
        });
    } else {
        // DOM already loaded
        setTimeout(setupTranslations, 200);
    }
    
    // Add animation styles if not already present
    if (!document.getElementById('translation-animations')) {
        const style = document.createElement('style');
        style.id = 'translation-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
})();
