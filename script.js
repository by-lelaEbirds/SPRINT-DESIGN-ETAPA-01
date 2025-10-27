/**
 * Sprint Design - Vacinação Infantil
 * Script para gerenciar navegação e interatividade
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollBehavior();
});

/**
 * Inicializa o sistema de navegação entre seções
 */
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove classe active de todos os botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Remove classe active de todas as seções
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            // Adiciona classe active à seção correspondente
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Scroll suave para o topo da seção
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
}

/**
 * Inicializa comportamento de scroll para destacar seção ativa
 */
function initializeScrollBehavior() {
    const sections = document.querySelectorAll('.content-section');
    const navButtons = document.querySelectorAll('.nav-btn');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-section') === current) {
                button.classList.add('active');
            }
        });
    });
}

/**
 * Função auxiliar para log de eventos (útil para debugging)
 */
function logEvent(eventName, data = {}) {
    console.log(`[Sprint Design] ${eventName}`, data);
}

/**
 * Função para exportar conteúdo (extensível para futuras funcionalidades)
 */
function exportContent(format = 'json') {
    const content = {
        title: 'Sprint Design - Etapa 1: Entender',
        course: 'Negócios Digitais',
        students: ['Arthur Uady', 'Eduardo Belli', 'Luiz Felipe', 'Matheus Peres'],
        timestamp: new Date().toISOString(),
        sections: {}
    };

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTitle = section.querySelector('h2')?.textContent || '';
        const sectionText = section.textContent;
        
        content.sections[sectionId] = {
            title: sectionTitle,
            content: sectionText.trim()
        };
    });

    if (format === 'json') {
        return JSON.stringify(content, null, 2);
    }

    return content;
}

/**
 * Função para copiar conteúdo para clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        logEvent('Conteúdo copiado para clipboard');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

/**
 * Função para imprimir a página
 */
function printPage() {
    window.print();
}

// Expor funções globalmente para uso em console ou extensões futuras
window.SprintDesign = {
    exportContent,
    copyToClipboard,
    printPage,
    logEvent
};

