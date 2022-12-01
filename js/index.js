const contenedorComics = document.getElementById("shop__content"),
    carritoComics = document.getElementById("carrito__contenedor"),
    botonVaciar = document.getElementById("vaciar__carrito"),
    contadorCarrito = document.getElementById("contador__carrito"),
    precioTotal = document.getElementById("precioTotal");

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
});

botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
});

stockComics.forEach((comic) => {
    const div = document.createElement("div");
    div.classList.add("revistas");
    div.innerHTML = `
    <img src=${comic.img} alt="">
    <p class="shop__contenttitle__title">${comic.nombre}</p>
    <p class="shop__contenttitle__precio" >Precio: $${comic.precio}</p>
    <button id="agregar${comic.id}" class="shop__content__art__btn">AGREGAR AL CARRITO</button>
    
    `;
    contenedorComics.appendChild(div);

    const boton = document.getElementById(`agregar${comic.id}`);

    boton.addEventListener("click", () => {
        agregarAlCarrito(comic.id);
    });
});

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some((prod) => prod.id === prodId);
    if (existe) {
        const prod = carrito.map((prod) => {
            if (prod.id === prodId) {
                prod.cantidad++;
            }
        });
    } else {
        const item = stockComics.find((prod) => prod.id === prodId);
        carrito.push(item);
    }
    actualizarCarrito();
};

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
};

const actualizarCarrito = () => {
    carritoComics.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "comicEnCarrito";
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton__eliminar fas fa-trash-alt"></button>
        `;
        carritoComics.appendChild(div);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
    contadorCarrito.innerText = carrito.length;

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
};
