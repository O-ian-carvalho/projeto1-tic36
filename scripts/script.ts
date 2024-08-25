document.addEventListener("DOMContentLoaded", () => {

    let isAvancadoPage: boolean = window.location.pathname.split("/").pop() == "avancada.html"; // verifica se está na página Avançada
    let isBlack: boolean = false; // verifica se está no modo escuro ou claro

    // Importa elementos em comum entre as páginas
    const botao = document.querySelector<HTMLButtonElement>("#modoclick");
    const links = document.querySelectorAll<HTMLAnchorElement>(".link"); 
    const menu = document.querySelector<HTMLElement>("#menu"); 
    const profile = document.querySelector<HTMLElement>("#profile"); 

    // Importa elementos da página Avançado
    if(isAvancadoPage){
        const avancadotxt = document.querySelector<HTMLElement>("#avan");
    }


    // Adiciona um evento de clique ao botão para mudar o tema
    botao.addEventListener("click", () => {
        if (isBlack) {
            modoClaro();
        } else {
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
        links.forEach(element =>
        {
            element.style.color ="#fff";
        }
        )
        menu.style.backgroundColor = "#eee";   // muda cor de fndo do menu
        profile.style.backgroundColor = "#eee"; // muda cor de fundo do icone de perfil

        if(isAvancadoPage){
            avancadotxt.style.color = "#fff"; // muda cor do texto da página avançado
        }
    }

    function modoClaro() {
        document.body.style.backgroundColor = "#fff"; // Cor de fundo claro
        botao.style.backgroundColor = "#000"; // Cor do botão
        botao.style.color = "#fff"; // Cor do texto do botão
        botao.innerHTML = "Ativar Modo Escuro"; // muda o texto do botão

        // muda a cor dos links para outras páginas
        links.forEach(element =>
        {
            element.style.color ="#000";
        }
        )
        menu.style.backgroundColor = "rgba(0,0,0,0)"; // muda cor de fndo do menu     
        profile.style.backgroundColor = "#000" // muda cor de fundo do icone de perfil
        if(isAvancadoPage){
            avancadotxt.style.color = "#000"; // muda cor do texto da página avançado
        }
    }
    
});
