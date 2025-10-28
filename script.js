/**
 * Sprint Design - Vacinação Infantil
 * Script para gerenciar navegação e interatividade
 */

// <<< CORREÇÃO: Flags para controlar o estado da rolagem
let isClickScrolling = false;
let scrollTimeout;

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
            // <<< CORREÇÃO: Avisa que o clique iniciou uma rolagem
            isClickScrolling = true;
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove classe active de todos os botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Remove classe active de todas as seções
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado (ESTA É A PARTE CERTA)
            this.classList.add('active');
            
            // Adiciona classe active à seção correspondente
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Scroll suave para o topo da seção
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // <<< CORREÇÃO: Reseta o "aviso" após a animação de rolagem terminar
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        isClickScrolling = false;
                    }, 750); // 750ms é um tempo seguro para a animação 'smooth' acabar
                    
                }, 100);
            } else {
                // <<< CORREÇÃO: Reseta se o alvo não for encontrado
                isClickScrolling = false;
            }
        });
    });
}

/**
 * Inicializa comportamento de scroll para destacar seção ativa
 */
function initializeScrollBehavior() {
    const navButtons = document.querySelectorAll('.nav-btn');
    // A lógica de scroll-spy (rolagem manual) ainda é incompatível
    // com 'display: none', mas esta correção impede que ela
    // quebre a navegação por clique.

    window.addEventListener('scroll', function() {
        // <<< CORREÇÃO: Se a rolagem foi causada pelo clique, ignora esta função.
        if (isClickScrolling) {
            return;
        }

        // A lógica de scroll-spy (rolagem manual) não pode funcionar
        // corretamente enquanto as seções usam 'display: none'.
        // Deixamos a função aqui para que a rolagem manual
        // não quebre o clique, mas ela não atualizará ativamente
        // o botão durante o scroll manual (o que já não fazia).
        
        // --- Início da lógica original (quebrada pelo 'display: none') ---
        const sections = document.querySelectorAll('.content-section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            // O problema: 'section.clientHeight' é 0 para seções com 'display: none'
            if (section.clientHeight > 0 && scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-section') === current) {
                button.classList.add('active');
            }
        });
        // --- Fim da lógica original ---
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
