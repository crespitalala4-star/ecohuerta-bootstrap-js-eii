// PF02 Lab1 - Fundamentos - ADSO 3478076 - crespitalala4-star
console.log("EcoHuerta: JavaScript conectado correctamente")



// practica #1-primera ejecución y consola//
{
console.log("Bienvenido a EcoHuerta");
console.log(8 + 5);
console.log("8" + 5);
console.warn("Este cultivo necesita revisión");
console.log("crespita cultivo de espinaca");
console.log(4*7);
console.log(8*2);
console.warn("El cultivo esta en perfecto estado");
console.log(20 / 4);
console.log(20 % 6);
console.log(2 ** 3);
console.log("Cultivo registrado");
}




// practica #2-variables, tipos de datos y operadores//
{
const cultivoInicial = "Tomate";
let diasIniciales = 15;
const aguaSemanalInicial = 4.5;
const necesitaSolInicial = true;
console.log(cultivoInicial);
console.log(typeof cultivoInicial);
console.log(typeof diasIniciales);
console.log(typeof necesitaSolInicial);
diasIniciales = diasIniciales + 7;
console.log(diasIniciales);
console.log(aguaSemanalInicial * 3);
const cantidadTexto = "12";
const cantidadNumero = Number(cantidadTexto);
console.log(cantidadTexto + 3);
console.log(cantidadNumero + 3);
console.log(Number("doce"));
console.log(Number.isNaN(Number("doce")));
console.log(12 === "12");
const nombreDePrueba = "Rábano";
let unidadesDePrueba = 8;
unidadesDePrueba = 12;
console.log(nombreDePrueba);
console.log(unidadesDePrueba);
console.log(typeof unidadesDePrueba);
let pendienteDeAsignacion;
const datoAusente = null;
console.log(pendienteDeAsignacion);
console.log(datoAusente);
console.log(typeof pendienteDeAsignacion);
pendienteDeAsignacion = 20;
console.log(pendienteDeAsignacion);
console.log(typeof pendienteDeAsignacion);
pendienteDeAsignacion = "Veinte plantas";
console.log(pendienteDeAsignacion);
console.log(typeof pendienteDeAsignacion);
const precioDePrueba = 2500;
const cantidadDePrueba = 3;
const descuentoDePrueba = 1000;
console.log(precioDePrueba * cantidadDePrueba);
console.log(precioDePrueba * cantidadDePrueba - descuentoDePrueba);
console.log(cantidadDePrueba >= 3);
console.log(cantidadDePrueba === "3");
console.log(cantidadDePrueba!== 0);
console.log(Number(" "));
console.log(Number("-3"));
console.log(Number("2,5"));
const nombreProducto = "Fertilizante Eco";
const precioUnitario = 12000;
let unidadesDisponibles = 25;
const disponible = true;
console.log(nombreProducto, typeof nombreProducto);
console.log(precioUnitario, typeof precioUnitario);
console.log(unidadesDisponibles, typeof unidadesDisponibles);
console.log(disponible, typeof disponible);
const valorDiez = precioUnitario * 10;
const valorSiete = precioUnitario * 7;
const diferencia = valorDiez - valorSiete;
console.log("Valor 10 unidades:", valorDiez);
console.log("Valor 7 unidades:", valorSiete);
console.log("Diferencia:", diferencia);
console.log(10 + 2 * 3);
console.log((10 + 2) * 3);
console.log(10 > 8);
console.log(10 <= 8);
console.log(10!== "10");
console.log(5 === 5);
console.log(5 == "5");
const litrosPorSemana = 3.5;
const semanas = 4;
const costoPorLitro = 250;
const costoTotalAgua = litrosPorSemana * semanas * costoPorLitro;
console.log("Costo total agua:", costoTotalAgua);
let contador = 5;
console.log(contador);
contador += 1;
console.log(contador);
contador -= 2;
console.log(contador);
contador *= 3;
console.log(contador);
let diasDePruebaCorregido = 10;
diasDePruebaCorregido = 11;
console.log(diasDePruebaCorregido);
console.log(10 + 20);
console.log("10" + "20");
console.log(10 === "10");
}




// practica #1.3-condiciones y decisiones//
{
const humedadEjemplo = 37;
if (humedadEjemplo < 30) {
  console.log("Humedad baja");
} else if (humedadEjemplo <= 60) {
  console.log("Humedad adecuada");
} else {
  console.log("Humedad alta");
}
function clasificarHumedad(h) {
  if (h < 0 || h > 100) {
    console.log(h + " -> Humedad inválida");
  } else if (h < 30) {
    console.log(h + " -> Humedad baja");
  } else if (h <= 60) {
    console.log(h + " -> Humedad adecuada");
  } else {
    console.log(h + " -> Humedad alta");
  }
}
clasificarHumedad(-1); clasificarHumedad(0); clasificarHumedad(30);
clasificarHumedad(60); clasificarHumedad(100); clasificarHumedad(101);
const temperaturaEjemplo = 24;
let tieneAguaEjemplo = true;
if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
  console.log("Se cumplen las condiciones de la simulación");
} else {
  console.log("Revisar condiciones");
}
tieneAguaEjemplo = false;
if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
  console.log("Con agua false -> Se cumplen");
} else {
  console.log("Con agua false -> Revisar condiciones");
}
let litrosDisponibles = 1;
let temperaturaActual = 34;
let revisarPorAgua = litrosDisponibles < 2;
let revisarPorCalor = temperaturaActual > 30;
console.log(revisarPorAgua && revisarPorCalor);
console.log(revisarPorAgua || revisarPorCalor);
console.log(!revisarPorAgua);
litrosDisponibles = 4;
revisarPorAgua = litrosDisponibles < 2;
console.log("Con 4 litros:");
console.log(revisarPorAgua && revisarPorCalor);
console.log(revisarPorAgua || revisarPorCalor);
console.log(!revisarPorAgua);
if (revisarPorAgua || revisarPorCalor) {
  console.log("Revisar cultivo");
} else {
  console.log("Sin alertas");
}
function estadoInventario(cantidad) {
  if (cantidad === 0) console.log(cantidad + " -> Sin existencias");
  else if (cantidad >= 1 && cantidad <= 5) console.log(cantidad + " -> Existencias bajas");
  else console.log(cantidad + " -> Disponible");
}
estadoInventario(0); estadoInventario(1); estadoInventario(5); estadoInventario(6);
function clasificarCalificacion(nota) {
  if (nota < 0 || nota > 100) console.log(nota + " -> Calificación inválida");
  else if (nota <= 59) console.log(nota + " -> Por mejorar");
  else if (nota <= 79) console.log(nota + " -> Aceptable");
  else console.log(nota + " -> Destacado");
}
clasificarCalificacion(-1); clasificarCalificacion(0); clasificarCalificacion(59);
clasificarCalificacion(60); clasificarCalificacion(79); clasificarCalificacion(80);
clasificarCalificacion(100); clasificarCalificacion(101);
const estadoCultivo = "crecimiento";
const aguaDisponible = 1.5;
if (estadoCultivo === "crecimiento" && aguaDisponible < 2) {
  console.log("Aviso: el cultivo en crecimiento necesita agua");
}
const enCrecimiento = estadoCultivo === "crecimiento";
const faltaAgua = aguaDisponible < 2;
const necesitaAviso = enCrecimiento && faltaAgua;
if (necesitaAviso) console.log("Aviso (versión legible): Revisar riego");
let estadoPrueba = "semilla";
console.log("Antes:", estadoPrueba);
if (estadoPrueba === "cosecha") {
  console.log("Listo para cosechar");
} else {
  console.log("No está listo, sigue en:", estadoPrueba);
}
console.log("Después:", estadoPrueba);
}




// practica #1.4- arreglos y repeticiones//
{
const litrosRegistrados = [2, 3.5, 4, 1.5];
let totalLitros = 0;
for (let indice = 0; indice < litrosRegistrados.length; indice++) {
  totalLitros += litrosRegistrados[indice];
}
console.log(totalLitros);
console.log(litrosRegistrados[0]);
console.log(litrosRegistrados.length);
const herramientas = ["Pala", "Regadera", "Guantes"];
herramientas.push("Rastrillo");
console.log(herramientas.includes("Regadera"));
console.log(herramientas[1]);
herramientas.splice(0, 1);
console.log(herramientas);
console.log(herramientas[10]);
for (const herramienta of herramientas) {
  console.log("Herramienta: " + herramienta);
}
let intentosEjemplo = 0;
while (intentosEjemplo < 3) {
  console.log("Intento " + (intentosEjemplo + 1));
  intentosEjemplo++;
}
const diasObservados = [5, 10, 15];
for (let posicion = 0; posicion < diasObservados.length; posicion++) {
  console.log("Índice:", posicion, "Valor:", diasObservados[posicion]);
}
const cantidadesDePrueba = [4, 7, 2];
for (let i = 0; i < cantidadesDePrueba.length; i++) {
  console.log("Posición " + i + ": " + cantidadesDePrueba[i]);
}
for (const cantidad of cantidadesDePrueba) {
  console.log("Cantidad: " + cantidad);
}
const medicionesDePrueba = [];
let sumaMediciones = 0;
for (const medicion of medicionesDePrueba) {
  sumaMediciones += medicion;
}
if (medicionesDePrueba.length === 0) {
  console.log("No hay mediciones para promediar");
} else {
  console.log(sumaMediciones / medicionesDePrueba.length);
}
const cultivos = ["Tomate", "Lechuga", "Maíz", "Papa", "Espinaca"];
console.log("Primero:", cultivos[0], "Último:", cultivos[cultivos.length - 1]);
cultivos.push("Zanahoria");
cultivos.splice(1, 1);
console.log("Nueva longitud:", cultivos.length, cultivos);
const nums = [12, 8, 15, 5, 10];
let s = 0;
for (const n of nums) s += n;
console.log("Suma 50:", s, "Promedio 10:", s / nums.length);
let agotados = 0;
for (const e of [2, 0, 3, 0, 1]) if (e === 0) agotados++;
console.log("Agotados:", agotados);
for (let i = 0; i < ["Tomate","Lechuga","Maíz"].length; i++) {
  console.log((i+1) + ". " + ["Tomate","Lechuga","Maíz"][i]);
}
const nombresPrueba = ["Tomate", "Papa", "Maíz"];
for (let i = 0; i < nombresPrueba.length; i++) {
  console.log("i="+i, nombresPrueba[i].toUpperCase());
}
}





// practica #1.5- objetos y funciones//
{
const cultivoEjemplo = {
  nombre: "Tomate",
  dias: 85,
  agua: 7,
  estado: "cosecha"
};
console.log(cultivoEjemplo.nombre);
console.log(cultivoEjemplo["agua"]);
cultivoEjemplo.agua = 7.5;
console.log(cultivoEjemplo.agua);
const cultivosDeEjemplo = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];
for (const cultivo of cultivosDeEjemplo) {
  console.log(cultivo.nombre + ": " + cultivo.estado);
}
function calcularAgua(aguaPorSemana, semanas) {
  return aguaPorSemana * semanas;
}
const consumoTomate = calcularAgua(7, 4);
console.log(consumoTomate);
console.log(calcularAgua(3, 2));
function describirCultivo(cultivo) {
  return cultivo.nombre + " lleva " + cultivo.dias + " días registrado";
}
console.log(describirCultivo(cultivosDeEjemplo[1]));
function saludarCultivo() {
  console.log("Bienvenido al registro");
}
function mostrarNombreCultivo(nombre) {
  console.log("Cultivo: " + nombre);
}
function calcularConsumo(aguaSemanal, numeroSemanas) {
  return aguaSemanal * numeroSemanas;
}
saludarCultivo();
mostrarNombreCultivo("Cilantro");
const consumoCalculado = calcularConsumo(2.5, 4);
console.log("Consumo:", consumoCalculado);
const tipoDeUnidad = "litros";
function describirRiego(cantidad) {
  const mensajeLocal = cantidad + " " + tipoDeUnidad;
  return mensajeLocal;
}
console.log(describirRiego(3));
function costoTotalProducto(precio, unidades) {
  return precio * unidades;
}
const totalProducto = costoTotalProducto(1800, 3);
console.log("Total a pagar: " + totalProducto);
const duplicarEjemplo = (numero) => numero * 2;
console.log(duplicarEjemplo(6));
function obtenerTotal(precio, cantidad) {
  const resultado = precio * cantidad;
  return resultado;
}
console.log(obtenerTotal(2000, 3));
cultivoEjemplo.responsable = "Crespita";
cultivoEjemplo.estado = "crecimiento";
console.log(`Actualizado: ${cultivoEjemplo.nombre} -> ${cultivoEjemplo.estado}, responsable ${cultivoEjemplo.responsable}`);
function esCantidadValida(cantidad) {
  return Number.isFinite(cantidad) && cantidad >= 0;
}
console.log("0:", esCantidadValida(0));
console.log("2.5:", esCantidadValida(2.5));
console.log("-1:", esCantidadValida(-1));
console.log("NaN:", esCantidadValida(NaN));
console.log("Infinity:", esCantidadValida(Infinity));
function contarPorEstado(lista, estadoBuscado) {
  let cont = 0;
  for (const c of lista) {
    if (c.estado === estadoBuscado) cont++;
  }
  return cont;
}
console.log("cosecha:", contarPorEstado(cultivosDeEjemplo, "cosecha"));
console.log("crecimiento:", contarPorEstado(cultivosDeEjemplo, "crecimiento"));
function promedioAgua(lista) {
  if (lista.length === 0) return "Sin datos para promedio";
  let suma = 0;
  for (const c of lista) suma += c.agua;
  return suma / lista.length;
}
console.log("Promedio agua:", promedioAgua(cultivosDeEjemplo));
}