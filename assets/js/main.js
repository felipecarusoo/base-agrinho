document.addEventListener('DOMContentLoaded', function() {

    // Função para abrir o menu de navegação
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
  
    // Função para fechar o menu de navegação
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
  
    // Função para alternar entre abrir e fechar o menu de navegação
    function toggleNav() {
        var nav = document.getElementById("myNav");
        nav.style.width = (nav.style.width === "100%") ? "0%" : "100%";
    }
  
    // Adiciona a funcionalidade ao botão de navegação
    document.querySelector('.nav-button').addEventListener('click', toggleNav);
  
    // Adiciona a funcionalidade ao botão de fechar no menu sobreposto
    document.querySelector('.sobreposto .closebtn').addEventListener('click', closeNav);
  
});
