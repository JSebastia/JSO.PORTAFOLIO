//Capturar evento para organizar barra de navegación en dispositivos móbiles. 
/*const hamburgerMenu = document.querySelector(".headerPag_nav_span");
const nav = document.querySelector(".headerPag_nav_div");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")

    if (hamburgerMenu.innerHTML == "☰") {
       hamburgerMenu.innerHTML = "⨉";
    } else{
        hamburgerMenu.innerHTML = "☰";
    }    
});*/

/*const elementImage = document.getElementById("imgAnimacion");
console.log(elementImage.getBoundingClientRect().y);

function animacionCaja1() {
    elementImage.style.transition = "1.0s"
    elementImage.style.boxShadow = "0px 10px 100px  #FCA31180";
}

function animacionCaja2() {
    elementImage.style.transition = "1.0s"
    elementImage.style.boxShadow = "0px 10px 30px  #FCA31180";
}
        
setInterval(animacionCaja1, 1000)
setInterval(animacionCaja2, 2000)*/

function changeDesignHeader() {

    const designHeader = document.getElementById("header-id");

    if (scrollY > 0) {
        designHeader.classList.add("design-header-scroll");
    } else {
        designHeader.classList.remove("design-header-scroll");
    }

   /* if (scrollY == 400) {
        const text = document.getElementById("idCertified");
        text.style.color = "#FCA311";
    } else {
        const text = document.getElementById("idCertified");
        text.style.color = "#FFFFFF"; 
    }*/
}

document.addEventListener("scroll", function () {
    changeDesignHeader();
});

/*function mostrarScroll() {

    document.addEventListener("scroll", function () {
        console.log(scrollY)
    });
    
}

setInterval(mostrarScroll, 100);*/
        