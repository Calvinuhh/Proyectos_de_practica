const heading = document.querySelector("#heading");

heading.textContent = "Nuevo Heading";

heading.classList.add("nueva-clase");

const enlaces = document.querySelectorAll(".navegacion a");

enlaces[0].textContent = "Nuevo texto para enlace";

enlaces[0].href = "http://google.com";

const nuevoEnlace = document.createElement("a");

nuevoEnlace.href = "nuevo-enlace.html";
nuevoEnlace.textContent = "Un Nuevo Enlace";
nuevoEnlace.classList.add("navegacion__enlace");

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(datos);

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarError("Todos los campos son obligatorios");
    return;
  }

  mostrarMensaje("Mensaje enviado correctamente");

  console.log("Enviando formulario");
});

function mostrarMensaje(mensaje) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("correcto");

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

function mostrarError(mensaje) {
  const error = document.createElement("p");
  error.textContent = mensaje;
  error.classList.add("error");

  formulario.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 5000);
}

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}
