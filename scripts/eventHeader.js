//Capturar evento para organizar barra de navegación en dispositivos móbiles. 
const iconHamburgerHeader = document.getElementById("iconHeader");
const headerNav = document.querySelector(".header-nav");
const textDecorationNav = document.querySelector(".header-nav__decoration-any");
const containerDecoration = document.querySelector(".container-decoration");
const conatinerLinks = document.querySelector(".link-container");
const headerMain = document.getElementById("idHeader");
const logoHeader = document.querySelector(".header-page__logo");

iconHeader.addEventListener("click", function () {

    iconHamburgerHeader.classList.toggle("icon-header-active");
    headerNav.classList.toggle("nav-adaptive-active");
    conatinerLinks.classList.toggle("links-adaptive-active");
    headerMain.classList.toggle("header-adaptive-active");
    textDecorationNav.classList.toggle("nav-decoration-active");
    containerDecoration.classList.toggle("nav-decoration-active");
    logoHeader.classList.toggle("logo-header-unable")

    if (iconHamburgerHeader.innerHTML == "☰") {
       iconHamburgerHeader.innerHTML = "⨉";
    } else{
        iconHamburgerHeader.innerHTML = "☰";
    }; 
});

document.addEventListener("click", function (event) {
    if(headerNav.classList.contains("nav-adaptive-active")) {
        console.log("Hola Sebastian")
    }

    if ( ( !headerNav.contains(event.target) || conatinerLinks.contains(event.target) ) &&
        headerNav.classList.contains("nav-adaptive-active")) {
        iconHamburgerHeader.classList.toggle("icon-header-active");
        headerNav.classList.toggle("nav-adaptive-active");
        conatinerLinks.classList.toggle("links-adaptive-active");
        headerMain.classList.toggle("header-adaptive-active");
        textDecorationNav.classList.toggle("nav-decoration-active");
        containerDecoration.classList.toggle("nav-decoration-active");
        logoHeader.classList.toggle("logo-header-unable")
        iconHamburgerHeader.innerHTML = "☰";
    }
});

function changeDesignHeader() {

    const designHeader = document.getElementById("idHeader");

    if (scrollY > 0) {
        designHeader.classList.add("design-header-scroll");
    } else {
        designHeader.classList.remove("design-header-scroll");
    }

   /*
   --- VERIFICAR EN QUE PARTE DE LA PANTALLA SE ENCUENTRA UN ELEMENTO Y 
      REALIZAR ALGUNA ACCIÓN.
   if (scrollY == 400) {
        const text = document.getElementById("idCertified");
        text.style.background = "#FCA311";
    } else {
        const text = document.getElementById("idCertified");
        text.style.background = "#FFFFFF"; 
    }
    */
}

document.addEventListener("scroll", function () {
    changeDesignHeader();
});
        