// PF02 - Main - ADSO 3478076 - crespitalala4-star - Estefania Cuadrado //
console.log("EcoHuerta: JavaScript conectado correctamente");


// PRACTICA 1.6 - DOM y eventos //
console.log("--- 1.6 DOM ---");

const anioActual = document.getElementById("anio");
if (anioActual) {
  anioActual.textContent = new Date().getFullYear();
}

const tituloCultivos = document.getElementById("cultivosTitulo");
if (tituloCultivos) {
  console.log("titulo original:", tituloCultivos.textContent);

}

const totalTxt = document.getElementById("totalCultivos");
if (totalTxt) console.log("total:", totalTxt.textContent);

const primera = document.querySelector(".crop-card");
console.log("primera tarjeta:", primera?.textContent?.slice(0,30));

const zona = document.getElementById("cultivos");
if(zona){
  console.log("contiene container?", zona.classList.contains("container"));
  zona.classList.add("border-top");
  zona.classList.remove("border-top");
}



// PRACTICA 1.7 - FORMULARIOS Y VALIDACION //

console.log("--- 1.7 Formularios ---");


const estadosPermitidos = ["semilla", "crecimiento", "cosecha"];
console.log("estado valido?", estadosPermitidos.includes("crecimiento")); // true
console.log("estado invalido?", estadosPermitidos.includes("desconocido")); // false

// El formulario real se valida en la practica 1.8, aqui solo dejamos el arreglo de prueba
const registrosPrueba = [];


// PRACTICA 1.8 - GESTOR FINAL - ACTIVIDAD INTEGRADORA //
console.log("--- 1.8 Gestor final ---");

const cultivos = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

const listaCultivosEl = document.getElementById("listaCultivos");
const totalCultivosEl = document.getElementById("totalCultivos");
const totalCrecimientoEl = document.getElementById("totalCrecimiento");
const totalCosechaEl = document.getElementById("totalCosecha");
const sinResultadosEl = document.getElementById("sinResultados");
const campoBusqueda = document.getElementById("busqueda");
const filtroEstado = document.getElementById("filtroEstado");
const formulario = document.getElementById("formCultivo");
const mensajeFormulario = document.getElementById("mensajeFormulario");

function contarPorEstado(lista, estadoBuscado) {
  let cont = 0;
  for (const c of lista) {
    if (c.estado === estadoBuscado) cont++;
  }
  return cont;
}

function crearTarjeta(cultivo) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";
  const card = document.createElement("article");
  card.className = "card h-100 crop-card";
  const body = document.createElement("div");
  body.className = "card-body";
  const h3 = document.createElement("h3");
  h3.className = "h5";
  h3.textContent = cultivo.nombre; // textContent para caso 14 <b>Prueba</b>
  const pDias = document.createElement("p");
  pDias.className = "mb-1";
  pDias.textContent = "Días: " + cultivo.dias;
  const pAgua = document.createElement("p");
  pAgua.className = "mb-1";
  pAgua.textContent = "Agua: " + cultivo.agua + " L/semana";
  const pEstado = document.createElement("p");
  pEstado.className = "text-secondary mb-0";
  pEstado.textContent = cultivo.estado;
  body.append(h3, pDias, pAgua, pEstado);
  card.append(body);
  col.append(card);
  return col;
}

function dibujarTarjetas(lista) {
  listaCultivosEl.replaceChildren();
  if (lista.length === 0) {
    sinResultadosEl.classList.remove("d-none");
    return;
  }
  sinResultadosEl.classList.add("d-none");
  for (const cultivo of lista) {
    listaCultivosEl.append(crearTarjeta(cultivo));
  }
}

function actualizarIndicadores() {
  totalCultivosEl.textContent = cultivos.length;
  totalCrecimientoEl.textContent = contarPorEstado(cultivos, "crecimiento");
  totalCosechaEl.textContent = contarPorEstado(cultivos, "cosecha");
}

function obtenerFiltrados() {
  const texto = campoBusqueda.value.trim().toLowerCase();
  const estado = filtroEstado.value;
  return cultivos.filter(c => {
    const porNombre = c.nombre.toLowerCase().includes(texto);
    const porEstado = estado === "todos" || c.estado === estado;
    return porNombre && porEstado;
  });
}

campoBusqueda.addEventListener("input", () => {
  dibujarTarjetas(obtenerFiltrados());
});

filtroEstado.addEventListener("change", () => {
  dibujarTarjetas(obtenerFiltrados());
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombreCultivo").value.trim();
  const diasTexto = document.getElementById("diasCultivo").value.trim();
  const aguaTexto = document.getElementById("aguaCultivo").value.trim();
  const estado = document.getElementById("estadoCultivo").value;

  // Validaciones PF02
  if (nombre === "" || nombre.length > 50) {
    mensajeFormulario.className = "mt-3 alert alert-danger";
    mensajeFormulario.textContent = "Revisa el nombre: no vacío y máximo 50.";
    return;
  }
  if (diasTexto === "" || !Number.isInteger(Number(diasTexto)) || Number(diasTexto) < 0) {
    mensajeFormulario.className = "mt-3 alert alert-danger";
    mensajeFormulario.textContent = "Revisa los días: entero >=0.";
    return;
  }
  if (aguaTexto === "" || !Number.isFinite(Number(aguaTexto)) || Number(aguaTexto) < 0) {
    mensajeFormulario.className = "mt-3 alert alert-danger";
    mensajeFormulario.textContent = "Revisa el agua: número >=0.";
    return;
  }
  if (!estadosPermitidos.includes(estado)) {
    mensajeFormulario.className = "mt-3 alert alert-danger";
    mensajeFormulario.textContent = "Revisa el estado: semilla, crecimiento o cosecha.";
    return;
  }

  const nuevo = { nombre, dias: Number(diasTexto), agua: Number(aguaTexto), estado };
  cultivos.push(nuevo);
  actualizarIndicadores();
  dibujarTarjetas(cultivos);
  mensajeFormulario.className = "mt-3 alert alert-success";
  mensajeFormulario.textContent = "Cultivo registrado: " + nombre;
  formulario.reset();
  campoBusqueda.value = "";
  filtroEstado.value = "todos";
});

// Inicializar
dibujarTarjetas(cultivos);
actualizarIndicadores();
































