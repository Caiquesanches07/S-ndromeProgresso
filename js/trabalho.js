// Função chamada quando a pessoa clica no botão do tema
function alternarTema() {
    // 1. Adiciona ou remove a classe 'dark-mode' no <body>
    document.body.classList.toggle('dark-mode');
    
    // 2. Verifica se o modo escuro ficou ativo após o clique
    const modoEscuroAtivo = document.body.classList.contains('dark-mode');
    
    // 3. Salva a escolha do usuário na memória do navegador (localStorage)
    localStorage.setItem('darkMode', modoEscuroAtivo);
}

// Quando a página carrega, o navegador checa se a pessoa já tinha deixado o escuro ativo antes
window.addEventListener('DOMContentLoaded', () => {
    const salvouModoEscuro = localStorage.getItem('darkMode');
    
    // Se o valor salvo for 'true', aplica a classe 'dark-mode' automaticamente
    if (salvouModoEscuro === 'true') {
        document.body.classList.add('dark-mode');
    }
});