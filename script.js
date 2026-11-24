// Mensagem de confirmação no console para garantir que o script carregou
console.log("Script carregado com sucesso!");

// Interação: Botão de Mudar Tema (Claro / Escuro)
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão dependendo do modo
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = "Tema Claro";
    } else {
        btnTema.textContent = "Tema Escuro";
    }
});