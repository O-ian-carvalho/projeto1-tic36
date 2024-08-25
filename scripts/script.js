document.addEventListener("DOMContentLoaded", function () {
    var isAvancadoPage = window.location.pathname.split("/").pop() == "avancada.html"; // verifica se está na página Avançada
    var isBlack = false; // verifica se está no modo escuro ou claro
    // Importa elementos em comum entre as páginas
    var botao = document.querySelector("#modoclick");
    var links = document.querySelectorAll(".link");
    var menu = document.querySelector("#menu");
    var profile = document.querySelector("#profile");
    // Importa elementos da página Avançado
    if (isAvancadoPage) {
        var avancadotxt = document.querySelector("#avan");
    }
    // Adiciona um evento de clique ao botão para mudar o tema
    botao.addEventListener("click", function () {
        if (isBlack) {
            modoClaro();
        }
        else {
            modoEscuro();
        }
        isBlack = !isBlack; // Alterna o valor de isBlack
    });
    function modoEscuro() {
        document.body.style.backgroundColor = "#222"; // Cor de fundo escuro
        botao.style.backgroundColor = "#fff"; // Cor do botão
        botao.style.color = "#000"; // Cor do texto do botão
        botao.innerHTML = "Ativar Modo Claro"; // muda o texto do botão
        // muda a cor dos links para outras páginas
        links.forEach(function (element) {
            element.style.color = "#fff";
        });
        menu.style.backgroundColor = "#eee"; // muda cor de fndo do menu
        profile.style.backgroundColor = "#eee"; // muda cor de fundo do icone de perfil
        if (isAvancadoPage) {
            avancadotxt.style.color = "#fff"; // muda cor do texto da página avançado
        }
    }
    function modoClaro() {
        document.body.style.backgroundColor = "#fff"; // Cor de fundo claro
        botao.style.backgroundColor = "#000"; // Cor do botão
        botao.style.color = "#fff"; // Cor do texto do botão
        botao.innerHTML = "Ativar Modo Escuro"; // muda o texto do botão
        // muda a cor dos links para outras páginas
        links.forEach(function (element) {
            element.style.color = "#000";
        });
        menu.style.backgroundColor = "rgba(0,0,0,0)"; // muda cor de fndo do menu     
        profile.style.backgroundColor = "#000"; // muda cor de fundo do icone de perfil
        if (isAvancadoPage) {
            avancadotxt.style.color = "#000"; // muda cor do texto da página avançado
        }
    }
});
