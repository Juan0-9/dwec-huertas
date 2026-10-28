/*
  Tarea 5 · DWEC · Juan Hakram Huertas Chergui
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

//Cambios con Javascript.
function aplicarCambios() {

  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const p = document.querySelectorAll("#contenido p");
  if (p.length >= 3) { // if por si no existe el elemento.
    const tercero = p[2];
    tercero.classList.add("text-danger");
  }
   
  console.log("Se han aplicado los cambios");
}

// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

// Añadir un párrafo a #contenido.
function anadirParrafo() {
  const parrafo = document.createElement("p");


  const contenido = document.querySelector("#contenido");
  const N = contenido.children.length + 1;
  parrafo.textContent = `Párrafo nuevo ${N}`; //N es el número de párrafos
  contenido.append(parrafo);
  document.getElementById("aviso2").classList.add("d-none"); //ocultar el aviso

  console.log(`Añadido: Párrafo nuevo ${N}`);
}

//busca el último párrafo de #contenido y lo borra.
function eliminarUltimo() {

  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;

  if (ultimo === null) {
    document.getElementById("aviso2").classList.remove("d-none");
    console.log("No quedan párrafos.");
  } else {
    ultimo.remove();
    console.log("Eliminado el último párrafo");
  }
}

// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================


function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {

    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  // cuántos párrafos se ha activado.
  console.log(`Resaltado activado en ${parrafos.length} párrafo/s`);
}

// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const text = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");
  const primerP = document.querySelector("#contenido p");

  if (text === "") {
    error.classList.remove("d-none");
    console.log("cambiarTexto: Esta vacio");
  } else {
    if (primerP !== null) {
      primerP.textContent = text;
      error.classList.add("d-none");
      console.log(`Primer párrafo cambiado: ${text}`);
    } else {
      console.log(`cambiarTexto(): No hay texto que cambiar.`);
    }
  }
}

function cambiarConHtml() {
  const text = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");
  const primerP = document.querySelector("#contenido p");


  if (text === "") {
    error.classList.remove("d-none");
    console.log("cambiarTexto: Esta vacio");
  } else {
    if (primerP !== null) {
      primerP.innerHTML = text;
      error.classList.add("d-none");
      console.log(`Primer párrafo cambiado: ${text}`);
    } else {
      console.log(`cambiarConHTML(): No hay texto que cambiar.`);
    }
  }
  //       Prueba las dos con <b>hola</b> y explica en el README qué diferencia ves y por qué es peligroso.
}

// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {

  const text = document.querySelector("#tareaInput").value.trim();
  const error = document.getElementById("error5");
  error.textContent = "Escribe una tarea.";
  const listaTareas = document.getElementById("listaTareas");

  if (text === "") {
    error.classList.remove("d-none");
    console.log("añadirTarea: no hay texto que añadir.");
  } else {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("form-check-input");

    document.querySelector("#tareaInput").value = "";
    const span = document.createElement("span");

    span.textContent = text;

    li.append(checkbox, span);
    listaTareas.append(li);

    error.classList.add("d-none");

    const total = document.querySelectorAll("#listaTareas li").length;
    document.getElementById("totalTareas").textContent = total;
    console.log(`Tarea añadida: ${text} y un total de ${total}.`);
  }

}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");

  if (marcadas.length === 0) {
    error.textContent = "Marca una o varias tareas.";
    error.classList.remove("d-none");
    console.log("BorrarTareas: No hay tareas o no estan marcadas.");
  } else {
    for (const tarea of marcadas) {
      tarea.parentElement.remove();
    }
    error.classList.add("d-none");
    
    //actualiza #totalTareas.
    const total = document.querySelectorAll("#listaTareas li").length;
    document.getElementById("totalTareas").textContent = total;
    console.log(
      marcadas.length === 1
        ? `Tarea eliminada: ${marcadas.length} y queda un total de ${total}.`
        : `Tareas eliminadas: ${marcadas.length} y queda un total de ${total}.`,
    );
  }
}

// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let punto = "";
  if (ancho >= 1400) {
    punto = "xxl";
  } else if (ancho >= 1200) {
    punto = "xl";
  } else if (ancho >= 992) {
    punto = "lg";
  } else if (ancho >= 768) {
    punto = "md";
  } else if (ancho >= 576) {
    punto = "sm";
  } else {
    punto = "xs";
  }

  document.querySelector("#datoPunto").textContent = punto;
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log(
    `Ventana - ${ancho}×${alto}, punto de corte: ${punto}, pantalla: ${screen.width}×${screen.height}, idioma- ${navigator.language}`
  );

}
