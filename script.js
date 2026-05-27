import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBNqyVC6uG53j0R-OfbWkQpTR6tm9rqFM4",
  authDomain: "explore-passa-quatro.firebaseapp.com",
  projectId: "explore-passa-quatro",
  storageBucket: "explore-passa-quatro.firebasestorage.app",
  messagingSenderId: "348978154042",
  appId: "1:348978154042:web:2e71ce4ef51d0162104303",
  measurementId: "G-EVZJ4RDRBM"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
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

/* FIREBASE COMENTÁRIOS */

const botoesEnviar = document.querySelectorAll(".enviar-comentario");

botoesEnviar.forEach((botao, index) => {

    carregarComentarios(index);

    botao.addEventListener("click", async () => {

        const area = botao.parentElement;

        const inputNome = area.querySelector(".input-nome");

        const inputComentario = area.querySelector(".input-comentario");

        if (
            inputNome.value.trim() !== "" &&
            inputComentario.value.trim() !== ""
        ) {

            await addDoc(collection(db, "comentarios"), {
                local: index,
                nome: inputNome.value,
                comentario: inputComentario.value
            });

            inputNome.value = "";
            inputComentario.value = "";

            carregarComentarios(index);
        }

    });

});

async function carregarComentarios(localIndex){

    const listas = document.querySelectorAll(".lista-comentarios");

    const lista = listas[localIndex];

    lista.innerHTML = "";

    const querySnapshot = await getDocs(collection(db, "comentarios"));

    querySnapshot.forEach((doc) => {

        const dados = doc.data();

        if(dados.local == localIndex){

            const novoComentario = document.createElement("div");

            novoComentario.classList.add("comentario");

            novoComentario.innerHTML = `
                <strong>${dados.nome}:</strong>
                <p>${dados.comentario}</p>
            `;

            lista.appendChild(novoComentario);

        }

    });

}
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
