const formulario = document.querySelector("#formulario-registro");
const inputNombre = document.querySelector("#campo-nombre");
const inputApellido = document.querySelector("#campo-apellido");
const inputEmail = document.querySelector("#campo-email");
const submit = document.querySelector("#submit");
const registrado = document.querySelector("#registrado")



let clientes = []

class ClienteNuevo {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const agregarClienteNuevo = (array, inputNombre, inputApellido, inputEmail) => {
    array.push(inputNombre, inputApellido, inputEmail)
}

const clienteJSON = (clave, valor) => {
    const arrayJSON = JSON.stringify(valor)
    localStorage.setItem(clave, arrayJSON)
}

const parseCliente = (clave) => {
    const arrayParse = localStorage.getItem("clientes") || "[]"
    const parsearArray = JSON.parse(arrayParse)
    return parsearArray
}

function confirmacionRegistro() {
    if(inputNombre.value !== "" && inputApellido !== "" && inputEmail !== "") {
        registrado.innerHTML = `
        <h2>
        Gracias ${inputNombre.value} por registrarte a nuestra página
        </h2>
        `
    }
    else {
        registrado.innerHTML = `
        <h2>
        ¡¡ Por favor completar todos los campos !!
        </h2>
        `
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault();
    agregarClienteNuevo(clientes, inputNombre.value, inputApellido.value, inputEmail.value);
    confirmacionRegistro();
    formulario.reset();
    clienteJSON("clientes", clientes);
}














