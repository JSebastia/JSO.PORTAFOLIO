//Capturar evento para organizar barra de navegación en dispositivos móbiles. 
const hamburgerMenu = document.querySelector(".headerPag_nav_span");
const nav = document.querySelector(".headerPag_nav_div");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")

    if (hamburgerMenu.innerHTML == "☰") {
       hamburgerMenu.innerHTML = "⨉";
    } else{
        hamburgerMenu.innerHTML = "☰";
    }    
});