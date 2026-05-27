function toggleMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }

    else{
        menu.style.display = "flex";
    }
}
window.toggleMenu = toggleMenu;
/* GALERIAS */

document.addEventListener("DOMContentLoaded", () => {

    const galerias = document.querySelectorAll(".galeria-container");

    galerias.forEach((container) => {

        const galeria = container.querySelector(".galeria");

        const esquerda = container.querySelector(".esquerda");

        const direita = container.querySelector(".direita");

        esquerda.addEventListener("click", () => {

            galeria.scrollBy({
                left: -340,
                behavior: "smooth"
            });

        });

        direita.addEventListener("click", () => {

            galeria.scrollBy({
                left: 340,
                behavior: "smooth"
            });

        });

    });

});
