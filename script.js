function toggleMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }

    else{
        menu.style.display = "flex";
    }
}

/* SLIDER */

let slides = document.querySelectorAll(".slide");

let index = 0;

function nextSlide(){

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(nextSlide, 3000);

/* ABRIR COMENTÁRIOS */

const botoesComentarios = document.querySelectorAll(".abrir-comentarios");

botoesComentarios.forEach((botao) => {

    botao.addEventListener("click", () => {

        const area = botao.nextElementSibling;

        if(area.style.display === "block"){
            area.style.display = "none";
        }

        else{
            area.style.display = "block";
        }

    });

});

/* ENVIAR COMENTÁRIO */

const botoesEnviar = document.querySelectorAll(".enviar-comentario");

botoesEnviar.forEach((botao) => {

    botao.addEventListener("click", () => {

        const area = botao.parentElement;

        const inputNome = area.querySelector(".input-nome");

        const inputComentario = area.querySelector(".input-comentario");

        const lista = area.querySelector(".lista-comentarios");

        if (inputNome.value.trim() !== "" && inputComentario.value.trim() !== "") {

            const novoComentario = document.createElement("div");

            novoComentario.classList.add("comentario");

            novoComentario.innerHTML = `
                <strong>Visitante:</strong>
                <strong>${inputNome.value}:</strong>
                <p>${inputComentario.value}</p>
            `;

            lista.appendChild(novoComentario);

            input.value = "";

        }

    });

});
/* MENU */

function toggleMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }

    else{
        menu.style.display = "flex";
    }
}

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