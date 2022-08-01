const formulario = document.querySelector("#formulario-registro");
const inputNombre = document.querySelector("#campo-nombre");
const inputApellido = document.querySelector("#campo-apellido");
const inputEmail = document.querySelector("#campo-email");
const inputPassword = document.querySelector("#campo-password");
const submit = document.querySelector("#submit");

console.log(formulario, inputNombre, inputApellido, inputEmail, inputPassword)

const clientes = []

class ClienteNuevo {
    constructor(nombre, apellido, email, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    clientes.push(new ClienteNuevo(inputNombre.value, inputApellido.value, inputEmail.value, inputPassword.value))
    console.log(clientes)
}