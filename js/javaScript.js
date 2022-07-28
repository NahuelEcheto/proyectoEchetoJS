let nombreCliente = prompt("Ingresa tu nombre");
let apellidoCliente = prompt("Ingresa tu apellido");
let direccionCliente = prompt("Ingresa la dirección a donde enviar el pedido");

const cliente = [
    {
    nombre: nombreCliente,
    apellido: apellidoCliente,
    direccion: direccionCliente
},
]

console.log(cliente);


const hamburguesa = [
    {
        producto: "Hamburguesa clásica",
        precio: 300,
    },
    {
        producto: "Hamburguesa con queso",
        precio: 370,
    },
    {
        producto: "Hamburguesa doble con cheddar",
        precio: 670,
    },
    {
        producto: "Hamburguesa con bacon",
        precio: 450,
    },
    {
        producto: "Hamburguesa triple con queso",
        precio: 790,
    },
    {
        producto: "Hamburguesa con guacamole",
        precio: 460,
    },
    {
        producto: "Hamburguesa de pollo",
        precio: 330,
    },
    {
        producto: "Hamburguesa de soja",
        precio: 390,
    },
    {
        producto: "Hamburguesa de lentejas",
        precio: 360,
    },
]

const filtroDePrecio = hamburguesa.filter((curr) => {
    return curr.precio < 500
})

console.log(filtroDePrecio);

const ordenDePrecios = hamburguesa.sort((a, b) => {
    if(a.precio > b.precio){
        return 1
    }
    else if(a.precio < b.precio){
        return -1
    }
})

console.log(ordenDePrecios);


console.log(comidas);

const cartasComidas = comidas.hamburguesas.reduce((acc, elemento) => {
    return acc + `
    <div class="tarjeta">
        <div class="img-container">
            <img src=${elemento.img} alt=${elemento.name}>
        </div>
        <p>
            ${elemento.name}
        </p>
    </div>
    `
}, "")

console.log(cartasComidas);

const contenedorCards = document.querySelector(".container-cards")

console.log(contenedorCards);

contenedorCards.innerHTML = cartasComidas;