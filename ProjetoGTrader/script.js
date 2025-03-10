// Obter o modal e os botões
var modal = document.getElementById("loginModal");
var loginButton = document.getElementById("loginButton");
var closeModal = document.getElementById("closeModal");

// Abrir o modal quando o botão de login for clicado
loginButton.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal quando o "X" for clicado
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
