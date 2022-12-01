const contenedorModal = document.getElementsByClassName("modal__contenedor")[0];
const botonAbrir = document.getElementById("boton__carrito");
const botonCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal__contenedor__carrito")[0];

botonAbrir.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal__active");
});
botonCerrar.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal__active");
});

contenedorModal.addEventListener("click", (event) => {
    contenedorModal.classList.toggle("modal__active");
});
modalCarrito.addEventListener("click", (event) => {
    event.stopPropagation(); 
});
