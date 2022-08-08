const cartasComidas = comidas.hamburguesas.reduce((acc, elemento) => {
    return acc + `
    <div class="tarjeta">
        <div class="img-container">
            <img src=${elemento.img} alt=${elemento.nombre}>
        </div>
        <p>
            ${elemento.nombre}
        </p>
        <div>
            <p>
                ${elemento.precio}
            </p>
        </div>
        <div>
            <button class="comprar"> Comprar </button>
        </div>
    </div>
    `
}, "");

const contenedorCards = document.querySelector(".cards-hamburguesas");

contenedorCards.innerHTML = cartasComidas;


